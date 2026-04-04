import { NextRequest, NextResponse } from 'next/server'
import { ptaServer } from '@/lib/supabase/pta-server'

interface RouteParams {
  params: Promise<{ slug: string; file_id: string }>
}

export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  const { slug, file_id } = await params

  try {
    // Fetch the upload row, confirming it belongs to this slug's session
    const { data: upload, error: fetchError } = await ptaServer
      .from('pta_intake_uploads')
      .select('id, storage_path, session_id, pta_intake_sessions!inner(slug)')
      .eq('id', file_id)
      .maybeSingle()

    if (fetchError) {
      console.error('Upload fetch error:', fetchError)
      return NextResponse.json({ error: 'Failed to fetch upload record', status: 500 }, { status: 500 })
    }
    if (!upload) {
      return NextResponse.json({ error: 'Upload not found', status: 404 }, { status: 404 })
    }

    // Type-narrow the joined relation (Supabase returns an array for !inner joins)
    const joined = upload.pta_intake_sessions
    const sessionSlug = (Array.isArray(joined) ? joined[0] : joined as unknown as { slug: string } | null)?.slug
    if (sessionSlug !== slug) {
      return NextResponse.json({ error: 'Upload does not belong to this session', status: 403 }, { status: 403 })
    }

    // Remove from storage
    const { error: storageError } = await ptaServer.storage
      .from('pta-intake-docs')
      .remove([upload.storage_path])

    if (storageError) {
      console.error('Storage delete error:', storageError)
      return NextResponse.json({ error: 'Failed to delete file from storage', status: 500 }, { status: 500 })
    }

    // Delete the DB row
    const { error: deleteError } = await ptaServer
      .from('pta_intake_uploads')
      .delete()
      .eq('id', file_id)

    if (deleteError) {
      console.error('Upload row delete error:', deleteError)
      return NextResponse.json({ error: 'Failed to delete upload record', status: 500 }, { status: 500 })
    }

    return NextResponse.json({ deleted: true })
  } catch (err) {
    console.error('DELETE /api/intake/sessions/[slug]/upload/[file_id]:', err)
    return NextResponse.json({ error: 'Internal server error', status: 500 }, { status: 500 })
  }
}
