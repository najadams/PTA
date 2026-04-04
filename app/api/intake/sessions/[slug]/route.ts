import { NextRequest, NextResponse } from 'next/server'
import { ptaServer } from '@/lib/supabase/pta-server'

interface RouteParams {
  params: Promise<{ slug: string }>
}

// ── GET /api/intake/sessions/[slug] ──────────────────────────────────────────

export async function GET(_req: NextRequest, { params }: RouteParams) {
  const { slug } = await params

  try {
    const { data, error } = await ptaServer
      .from('pta_intake_sessions')
      .select('*')
      .eq('slug', slug)
      .maybeSingle()

    if (error) {
      console.error('Session fetch error:', error)
      return NextResponse.json({ error: 'Failed to fetch session', status: 500 }, { status: 500 })
    }
    if (!data) {
      return NextResponse.json({ error: 'Session not found', status: 404 }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (err) {
    console.error('GET /api/intake/sessions/[slug]:', err)
    return NextResponse.json({ error: 'Internal server error', status: 500 }, { status: 500 })
  }
}

// ── PATCH /api/intake/sessions/[slug] ────────────────────────────────────────

export async function PATCH(req: NextRequest, { params }: RouteParams) {
  const { slug } = await params

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body', status: 400 }, { status: 400 })
  }

  const { current_step, form_data } = body as {
    current_step?: number
    form_data?: Record<string, unknown>
  }

  if (current_step === undefined && form_data === undefined) {
    return NextResponse.json(
      { error: 'Provide at least one of: current_step, form_data', status: 422 },
      { status: 422 }
    )
  }

  try {
    // Verify session exists
    const { data: existing, error: fetchError } = await ptaServer
      .from('pta_intake_sessions')
      .select('id, form_data')
      .eq('slug', slug)
      .maybeSingle()

    if (fetchError) {
      console.error('Session fetch error:', fetchError)
      return NextResponse.json({ error: 'Failed to fetch session', status: 500 }, { status: 500 })
    }
    if (!existing) {
      return NextResponse.json({ error: 'Session not found', status: 404 }, { status: 404 })
    }

    // Build update payload — merge form_data via jsonb || on the DB side
    const updates: Record<string, unknown> = {}
    if (current_step !== undefined) updates.current_step = current_step
    if (form_data !== undefined) {
      // Use raw SQL merge so partial saves don't overwrite sibling fields
      const { data: merged, error: mergeError } = await ptaServer.rpc('jsonb_merge', {
        target: existing.form_data,
        source: form_data,
      })
      // If rpc not available, fall back to JS-level merge
      updates.form_data = mergeError ? { ...(existing.form_data as object), ...form_data } : merged
    }

    const { data, error } = await ptaServer
      .from('pta_intake_sessions')
      .update(updates)
      .eq('slug', slug)
      .select('*')
      .single()

    if (error) {
      console.error('Session update error:', error)
      return NextResponse.json({ error: 'Failed to update session', status: 500 }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (err) {
    console.error('PATCH /api/intake/sessions/[slug]:', err)
    return NextResponse.json({ error: 'Internal server error', status: 500 }, { status: 500 })
  }
}
