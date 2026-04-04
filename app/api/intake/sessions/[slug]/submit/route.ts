import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ptaServer } from '@/lib/supabase/pta-server'
import { generateReference } from '@/lib/pta/slug'
import { calculateRisk } from '@/lib/pta/risk'

interface RouteParams {
  params: Promise<{ slug: string }>
}

const RISK_COLORS: Record<string, string> = {
  High:   '#B05050',
  Medium: '#C9A84C',
  Low:    '#4A9B6F',
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString('en-GB', {
    day:      'numeric',
    month:    'long',
    year:     'numeric',
    hour:     '2-digit',
    minute:   '2-digit',
    timeZone: 'GMT',
    timeZoneName: 'short',
  })
}

function truncate(text: unknown, max: number): string {
  const str = typeof text === 'string' ? text : ''
  return str.length > max ? `${str.slice(0, max)}…` : str
}

function buildEmailHtml(params: {
  reference_number: string
  company_name:     string
  client_name:      string
  client_email:     string
  submitted_at:     string
  score:            string
  flags:            string[]
  formData:         Record<string, unknown>
  supabaseProjectRef: string
}): string {
  const {
    reference_number, company_name, client_name, client_email,
    submitted_at, score, flags, formData, supabaseProjectRef,
  } = params

  const riskColor = RISK_COLORS[score] ?? '#9A9488'
  const flagsHtml = flags.length > 0
    ? `<ul style="margin:8px 0 0;padding-left:20px;">${flags.map(f => `<li>${f}</li>`).join('')}</ul>`
    : '<p style="margin:4px 0 0;color:#4A9B6F;">None identified</p>'

  const dashboardUrl = `https://supabase.com/dashboard/project/${supabaseProjectRef}/editor`

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:system-ui,sans-serif;background:#0D0F14;color:#F0EDE8;padding:32px;margin:0;">
  <div style="max-width:600px;margin:0 auto;">

    <div style="border-bottom:2px solid #C9A84C;padding-bottom:16px;margin-bottom:24px;">
      <p style="margin:0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#9A9488;">Protocol &amp; Transfer Advisory</p>
      <h1 style="margin:8px 0 0;font-size:22px;color:#F0EDE8;">New TTA Intake Submission</h1>
    </div>

    <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px;">
      <tr><td style="padding:6px 0;color:#9A9488;width:140px;">Reference</td><td style="font-weight:600;letter-spacing:0.05em;">${reference_number}</td></tr>
      <tr><td style="padding:6px 0;color:#9A9488;">Company</td><td>${company_name}</td></tr>
      <tr><td style="padding:6px 0;color:#9A9488;">Contact</td><td>${client_name} (<a href="mailto:${client_email}" style="color:#C9A84C;">${client_email}</a>)</td></tr>
      <tr><td style="padding:6px 0;color:#9A9488;">Submitted</td><td>${formatDate(submitted_at)}</td></tr>
    </table>

    <div style="background:#13161E;border:1px solid #252A38;border-radius:4px;padding:20px;margin-bottom:24px;">
      <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#9A9488;">Risk Assessment</p>
      <p style="margin:0;font-size:20px;font-weight:700;color:${riskColor};">${score} Risk</p>
      ${flagsHtml}
    </div>

    <div style="background:#13161E;border:1px solid #252A38;border-radius:4px;padding:20px;margin-bottom:24px;">
      <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#9A9488;">Submission Summary</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:4px 0;color:#9A9488;width:160px;">Transferor</td><td>${formData.transferor_name ?? '—'}, ${formData.transferor_country ?? '—'}</td></tr>
        <tr><td style="padding:4px 0;color:#9A9488;">Transferee</td><td>${formData.transferee_name ?? '—'}</td></tr>
        <tr><td style="padding:4px 0;color:#9A9488;">Technology</td><td>${truncate(formData.technology_description, 120)}</td></tr>
        <tr><td style="padding:4px 0;color:#9A9488;">Fee Type</td><td>${formData.fee_type ?? '—'} at ${formData.fee_rate ?? '—'}%</td></tr>
        <tr><td style="padding:4px 0;color:#9A9488;">Duration</td><td>${formData.agreement_duration_months ?? '—'} months</td></tr>
        <tr><td style="padding:4px 0;color:#9A9488;">Territory</td><td>${formData.territory ?? '—'}</td></tr>
      </table>
    </div>

    <a href="${dashboardUrl}" style="display:inline-block;background:#C9A84C;color:#0D0F14;text-decoration:none;padding:12px 24px;border-radius:2px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">View Full Submission in Supabase →</a>

    <p style="margin-top:32px;font-size:11px;color:#5C5850;">This notification was sent automatically by the PTA Intake Portal.</p>
  </div>
</body>
</html>`
}

export async function POST(_req: NextRequest, { params }: RouteParams) {
  const { slug } = await params

  try {
    // Fetch current session
    const { data: session, error: fetchError } = await ptaServer
      .from('pta_intake_sessions')
      .select('*')
      .eq('slug', slug)
      .maybeSingle()

    if (fetchError) {
      console.error('Session fetch error:', fetchError)
      return NextResponse.json({ error: 'Failed to fetch session', status: 500 }, { status: 500 })
    }
    if (!session) {
      return NextResponse.json({ error: 'Session not found', status: 404 }, { status: 404 })
    }
    if (session.status === 'submitted') {
      return NextResponse.json(
        { error: 'Session already submitted', status: 409 },
        { status: 409 }
      )
    }

    const reference_number = generateReference()
    const submitted_at     = new Date().toISOString()
    const { score, flags } = calculateRisk(session.form_data as Record<string, unknown>)

    // Update session row
    const { data: updated, error: updateError } = await ptaServer
      .from('pta_intake_sessions')
      .update({ status: 'submitted', submitted_at, reference_number })
      .eq('slug', slug)
      .select('reference_number, status, submitted_at')
      .single()

    if (updateError) {
      console.error('Session submit update error:', updateError)
      return NextResponse.json({ error: 'Failed to submit session', status: 500 }, { status: 500 })
    }

    // Send notification email (non-blocking on failure)
    if (process.env.RESEND_API_KEY && process.env.PTA_NOTIFY_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const supabaseProjectRef = process.env.NEXT_PUBLIC_SUPABASE_URL
        ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname.split('.')[0]
        : 'unknown'

      resend.emails.send({
        from:    'PTA Intake Portal <intake@protocolandtransfer.com>',
        to:      [process.env.PTA_NOTIFY_EMAIL],
        subject: `New TTA Intake — ${session.company_name} ${reference_number}`,
        html:    buildEmailHtml({
          reference_number,
          company_name:  session.company_name,
          client_name:   session.client_name,
          client_email:  session.client_email,
          submitted_at,
          score,
          flags,
          formData:      session.form_data as Record<string, unknown>,
          supabaseProjectRef,
        }),
      }).catch(err => console.error('Resend notification error:', err))
    } else {
      console.warn('RESEND_API_KEY or PTA_NOTIFY_EMAIL not set — skipping notification email')
    }

    return NextResponse.json({
      reference_number: updated.reference_number,
      status:           updated.status,
      submitted_at:     updated.submitted_at,
    })
  } catch (err) {
    console.error('POST /api/intake/sessions/[slug]/submit:', err)
    return NextResponse.json({ error: 'Internal server error', status: 500 }, { status: 500 })
  }
}
