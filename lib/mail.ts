import nodemailer from 'nodemailer'
import { PTA } from './constants'

interface PtaMailMessage {
  to: string | string[]
  subject: string
  text?: string
  html?: string
  replyTo?: string
}

const DEFAULT_SMTP_HOST = 'smtp.zoho.com'
const DEFAULT_SMTP_PORT = 465

export function getMailConfigStatus() {
  const missing: string[] = []
  if (!process.env.ZOHO_SMTP_USER && !process.env.PTA_FROM_EMAIL) missing.push('ZOHO_SMTP_USER')
  if (!process.env.ZOHO_SMTP_PASS) missing.push('ZOHO_SMTP_PASS')

  return {
    configured: missing.length === 0,
    missing,
  }
}

export function getNotifyEmail() {
  return process.env.PTA_NOTIFY_EMAIL || PTA.email
}

export async function sendPtaMail(message: PtaMailMessage) {
  const status = getMailConfigStatus()
  if (!status.configured) {
    throw new Error(`Zoho SMTP not configured: ${status.missing.join(', ')}`)
  }

  const port = Number(process.env.ZOHO_SMTP_PORT || DEFAULT_SMTP_PORT)
  const smtpUser = process.env.ZOHO_SMTP_USER || process.env.PTA_FROM_EMAIL || PTA.email

  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST || DEFAULT_SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: smtpUser,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"${PTA.name}" <${smtpUser}>`,
    to: message.to,
    subject: message.subject,
    text: message.text,
    html: message.html,
    replyTo: message.replyTo,
  })
}
