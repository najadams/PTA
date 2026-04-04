'use client'
import { C } from './shared/portal'

interface Props {
  referenceNumber: string
  companyName:     string
}

export function ConfirmationScreen({ referenceNumber, companyName }: Props) {
  return (
    <div style={{
      minHeight: 'calc(100vh - 56px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: C.bg, padding: '40px 24px',
    }}>
      <div style={{
        maxWidth: 520, width: '100%', textAlign: 'center',
      }}>
        {/* Checkmark */}
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          border: `2px solid ${C.success}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px',
        }}>
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
            <path d="M2 9L8.5 15.5L22 2" stroke={C.success} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-cormorant)', fontSize: 42, fontWeight: 500,
          color: C.text, margin: '0 0 16px', lineHeight: 1.1,
        }}>
          Submission Received
        </h1>

        <p style={{
          fontSize: 16, color: C.textMuted, fontFamily: 'var(--font-dm-sans)',
          lineHeight: 1.7, margin: '0 0 32px',
        }}>
          Your intake for <strong style={{ color: C.text }}>{companyName}</strong> has been received by Protocol &amp; Transfer Advisory.
          Our team will review your submission and begin structuring your agreement.
          You will be contacted within 1–2 business days.
        </p>

        {/* Reference box */}
        <div style={{
          display: 'inline-block',
          border: `1px solid ${C.border}`,
          borderRadius: 4, padding: '14px 28px',
          background: C.surface, marginBottom: 12,
        }}>
          <p style={{ margin: '0 0 4px', fontSize: 11, color: C.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-dm-sans)' }}>
            Reference number
          </p>
          <p style={{
            margin: 0, fontSize: 20, fontFamily: 'monospace',
            letterSpacing: '0.12em', color: C.gold, fontWeight: 600,
          }}>
            {referenceNumber}
          </p>
        </div>

        <p style={{ fontSize: 13, color: C.textMuted, fontFamily: 'var(--font-dm-sans)', marginBottom: 32 }}>
          Please retain this reference for all correspondence.
        </p>

        <div style={{ height: 1, background: C.border, margin: '0 0 24px' }} />

        <p style={{ fontSize: 14, color: C.textMuted, fontFamily: 'var(--font-dm-sans)' }}>
          Questions?{' '}
          <a href="mailto:contact@protocolandtransfer.com" style={{ color: C.gold, textDecoration: 'none' }}>
            contact@protocolandtransfer.com
          </a>
        </p>
      </div>
    </div>
  )
}
