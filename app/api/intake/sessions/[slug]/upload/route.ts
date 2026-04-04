import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { ptaServer } from '@/lib/supabase/pta-server'

interface RouteParams {
  params: Promise<{ slug: string }>
}

const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
])

const MAX_FILE_SIZE = 20 * 1024 * 1024 // 20 MB

export async function POST(req: NextRequest, { params }: RouteParams) {
  const { slug } = await params

  try {
    // Verify session exists
    const { data: session, error: sessionError } = await ptaServer
      .from('pta_intake_sessions')
      .select('id')
      .eq('slug', slug)
      .maybeSingle()

    if (sessionError) {
      console.error('Session fetch error:', sessionError)
      return NextResponse.json({ error: 'Failed to verify session', status: 500 }, { status: 500 })
    }
    if (!session) {
      return NextResponse.json({ error: 'Session not found', status: 404 }, { status: 404 })
    }

    let formData: FormData
    try {
      formData = await req.formData()
    } catch {
      return NextResponse.json({ error: 'Expected multipart/form-data', status: 400 }, { status: 400 })
    }

    const file = formData.get('file')
    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'file field is required', status: 422 }, { status: 422 })
    }

    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: `File type not allowed. Accepted: PDF, DOC, DOCX, XLS, XLSX`, status: 422 },
        { status: 422 }
      )
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `File exceeds 20 MB limit (received ${(file.size / 1024 / 1024).toFixed(1)} MB)`, status: 422 },
        { status: 422 }
      )
    }

    const fileId       = randomUUID()
    const safeFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
    const storagePath  = `${slug}/${fileId}-${safeFileName}`
    const buffer       = Buffer.from(await file.arrayBuffer())

    const { error: storageError } = await ptaServer.storage
      .from('pta-intake-docs')
      .upload(storagePath, buffer, {
        contentType:  file.type,
        cacheControl: '3600',
        upsert:       false,
      })

    if (storageError) {
      console.error('Storage upload error:', storageError)
      return NextResponse.json({ error: 'Failed to upload file', status: 500 }, { status: 500 })
    }

    const { data: uploadRow, error: insertError } = await ptaServer
      .from('pta_intake_uploads')
      .insert({
        session_id:   session.id,
        file_name:    file.name,
        storage_path: storagePath,
        file_size:    file.size,
        mime_type:    file.type,
      })
      .select('id, file_name, storage_path')
      .single()

    if (insertError) {
      console.error('Upload row insert error:', insertError)
      // Best-effort: clean up orphaned storage object
      await ptaServer.storage.from('pta-intake-docs').remove([storagePath])
      return NextResponse.json({ error: 'Failed to record upload', status: 500 }, { status: 500 })
    }

    return NextResponse.json(
      { file_id: uploadRow.id, file_name: uploadRow.file_name, storage_path: uploadRow.storage_path },
      { status: 201 }
    )
  } catch (err) {
    console.error('POST /api/intake/sessions/[slug]/upload:', err)
    return NextResponse.json({ error: 'Internal server error', status: 500 }, { status: 500 })
  }
}
