import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getNotifyEmail, sendPtaMail } from '@/lib/mail'

const schema = z.object({
  firstName: z.string().min(1),
  lastName:  z.string().min(1),
  company:   z.string().min(1),
  email:     z.string().email(),
  phone:     z.string().min(7),
  service:   z.enum([
    'tta-advisory', 'corporate-immigration',
    'corporate-business', 'regulatory-compliance', 'market-research',
    'trade-development', 'other',
  ] as const),
  message: z.string().min(10),
  source:   z.string().optional(),
  campaign: z.string().optional(),
})

const serviceLabels: Record<string, string> = {
  'tta-advisory':          'TTA & GIPC Advisory',
  'corporate-immigration': 'Corporate Immigration',
  'corporate-business':    'Corporate & Business Services',
  'regulatory-compliance': 'Regulatory Compliance',
  'market-research':       'Market & Social Research',
  'trade-development':     'Trade Development & Market Entry',
  'other':                 'Not sure — book a compliance check',
}

export async function POST(req: NextRequest) {
  let body: unknown
  try { body = await req.json() } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed' }, { status: 422 })
  }

  const { firstName, lastName, company, email, phone, service, message, source, campaign } = parsed.data
  const serviceLabel = serviceLabels[service] ?? service

  try {
    await sendPtaMail({
      to:      [getNotifyEmail()],
      replyTo: email,
      subject: `New PTA Enquiry — ${serviceLabel} — ${firstName} ${lastName}`,
      text: [
        'New enquiry from the PTA website.',
        '',
        `Name:    ${firstName} ${lastName}`,
        `Company: ${company}`,
        `Email:   ${email}`,
        `Phone:   ${phone}`,
        `Service: ${serviceLabel}`,
        `Source:  ${source || 'direct'}`,
        `Campaign: ${campaign || 'free-tta-audit'}`,
        '',
        'Message:',
        message,
        '',
        '---',
        'Sent from ptadvisory.co/contact',
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Zoho SMTP error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
