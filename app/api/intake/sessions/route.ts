import { NextRequest, NextResponse } from 'next/server'
import { ptaServer } from '@/lib/supabase/pta-server'
import { generateSlug } from '@/lib/pta/slug'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body', status: 400 }, { status: 400 })
  }

  const { client_name, company_name, client_email } = body as Record<string, unknown>

  if (typeof client_name !== 'string' || client_name.trim().length < 1) {
    return NextResponse.json({ error: 'client_name is required', status: 422 }, { status: 422 })
  }
  if (typeof company_name !== 'string' || company_name.trim().length < 1) {
    return NextResponse.json({ error: 'company_name is required', status: 422 }, { status: 422 })
  }
  if (typeof client_email !== 'string' || !client_email.includes('@')) {
    return NextResponse.json({ error: 'client_email is required and must be valid', status: 422 }, { status: 422 })
  }

  try {
    // Resolve a unique slug, appending -2 / -3 etc. if taken
    const baseSlug = generateSlug(company_name.trim())
    let slug = baseSlug
    let attempt = 1

    while (true) {
      const { data: existing } = await ptaServer
        .from('pta_intake_sessions')
        .select('id')
        .eq('slug', slug)
        .maybeSingle()

      if (!existing) break

      attempt += 1
      slug = `${baseSlug}-${attempt}`

      if (attempt > 99) {
        return NextResponse.json({ error: 'Could not generate unique slug', status: 500 }, { status: 500 })
      }
    }

    const { data, error } = await ptaServer
      .from('pta_intake_sessions')
      .insert({
        slug,
        client_name:  client_name.trim(),
        company_name: company_name.trim(),
        client_email: client_email.trim().toLowerCase(),
      })
      .select('id, slug, status')
      .single()

    if (error) {
      console.error('Session insert error:', error)
      return NextResponse.json({ error: 'Failed to create session', status: 500 }, { status: 500 })
    }

    return NextResponse.json({ slug: data.slug, session_id: data.id, status: data.status }, { status: 201 })
  } catch (err) {
    console.error('POST /api/intake/sessions:', err)
    return NextResponse.json({ error: 'Internal server error', status: 500 }, { status: 500 })
  }
}
