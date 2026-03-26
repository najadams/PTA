import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { PTA } from '@/lib/constants'

const schema = z.object({
  name:    z.string().min(2),
  company: z.string().min(1),
  email:   z.string().email(),
  phone:   z.string().optional(),
  service: z.enum(['tta-drafting', 'gipc-compliance', 'investment-advisory', 'compliance-retainer', 'other'] as const),
  message: z.string().min(10),
})

const serviceLabels: Record<string, string> = {
  'tta-drafting':          'TTA Contract Drafting',
  'gipc-compliance':       'GIPC Compliance Review',
  'investment-advisory':   'Investment Structure Advisory',
  'compliance-retainer':   'Ongoing Compliance Retainer',
  'other':                 'Other / Not Sure Yet',
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 422 })
  }

  const { name, company, email, phone, service, message } = parsed.data

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not set')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from:    `PTA Website <noreply@${new URL(PTA.domain).hostname}>`,
      to:      [PTA.email],
      replyTo: email,
      subject: `New enquiry: ${serviceLabels[service]} — ${company}`,
      text: [
        `New enquiry from PTA website`,
        ``,
        `Name:    ${name}`,
        `Company: ${company}`,
        `Email:   ${email}`,
        `Phone:   ${phone || 'Not provided'}`,
        `Service: ${serviceLabels[service]}`,
        ``,
        `Message:`,
        message,
        ``,
        `---`,
        `Sent from ${PTA.domain}/contact`,
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
