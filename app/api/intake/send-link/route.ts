import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function buildEmailHtml(clientName: string, intakeUrl: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F4F2EE;font-family:Georgia,serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F2EE;padding:40px 20px;">
<tr><td>
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E2DBD0;">

  <!-- Header -->
  <tr><td style="padding:32px 40px 0;">
    <p style="margin:0;font-family:Georgia,serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#9A8E80;">Protocol &amp; Transfer Advisory</p>
    <div style="margin:12px 0 0;height:2px;background:#C9A84C;width:40px;"></div>
  </td></tr>

  <!-- Body -->
  <tr><td style="padding:28px 40px 0;">
    <p style="margin:0 0 20px;font-size:16px;color:#1C1915;line-height:1.7;">Dear ${clientName},</p>
    <p style="margin:0 0 16px;font-size:15px;color:#3A3530;line-height:1.8;">
      Thank you for engaging Protocol &amp; Transfer Advisory.
      We have prepared a secure intake portal to capture the information required to structure
      your Technology Transfer Agreement for GIPC compliance.
    </p>
    <p style="margin:0 0 28px;font-size:15px;color:#3A3530;line-height:1.8;">
      Please use the link below to complete your intake at your convenience.
      Your progress is saved automatically &mdash; you may complete it in multiple sessions.
    </p>
  </td></tr>

  <!-- CTA -->
  <tr><td style="padding:0 40px 28px;">
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:#C9A84C;border-radius:2px;">
          <a href="${intakeUrl}" style="display:inline-block;padding:14px 32px;font-family:Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0D0F14;text-decoration:none;">
            Open Your Intake Portal
          </a>
        </td>
      </tr>
    </table>
    <p style="margin:12px 0 0;font-family:monospace;font-size:11px;color:#9A8E80;word-break:break-all;">${intakeUrl}</p>
  </td></tr>

  <!-- Closing -->
  <tr><td style="padding:0 40px 32px;border-top:1px solid #EDE8E0;padding-top:24px;">
    <p style="margin:0 0 16px;font-size:14px;color:#3A3530;line-height:1.8;">
      If you have any questions before or during the process, reply to this email
      or contact us at
      <a href="mailto:contact@protocolandtransfer.com" style="color:#A6732A;text-decoration:none;">contact@protocolandtransfer.com</a>
    </p>
    <p style="margin:0;font-size:14px;color:#3A3530;">&mdash; The PTA Team</p>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:20px 40px;background:#FAF8F4;border-top:1px solid #EDE8E0;">
    <p style="margin:0;font-size:11px;color:#9A8E80;line-height:1.8;">
      Protocol &amp; Transfer Advisory &middot; Accra, Ghana<br>
      <em>Precision. Protocol. Transfer.</em>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body', status: 400 }, { status: 400 })
  }

  const { client_name, client_email, intake_url } = body as Record<string, unknown>

  if (typeof client_name !== 'string' || !client_name.trim())
    return NextResponse.json({ error: 'client_name is required', status: 422 }, { status: 422 })
  if (typeof client_email !== 'string' || !client_email.includes('@'))
    return NextResponse.json({ error: 'client_email is required', status: 422 }, { status: 422 })
  if (typeof intake_url !== 'string' || !intake_url.startsWith('http'))
    return NextResponse.json({ error: 'intake_url is required', status: 422 }, { status: 422 })

  if (!process.env.RESEND_API_KEY)
    return NextResponse.json({ error: 'Email service not configured', status: 500 }, { status: 500 })

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from:    'Protocol & Transfer Advisory <intake@protocolandtransfer.com>',
      to:      [client_email.trim().toLowerCase()],
      subject: 'Your TTA Intake Portal — Protocol & Transfer Advisory',
      html:    buildEmailHtml(client_name.trim(), intake_url.trim()),
    })
    return NextResponse.json({ sent: true })
  } catch (err) {
    console.error('send-link email error:', err)
    return NextResponse.json({ error: 'Failed to send email', status: 500 }, { status: 500 })
  }
}
