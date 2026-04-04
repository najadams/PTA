'use client'
import { useState } from 'react'
import { C } from './shared/portal'

interface Props {
  url:         string
  emailSent:   boolean
  clientEmail: string
  onReset:     () => void
}

export function GenerateResult({ url, emailSent, clientEmail, onReset }: Props) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 56px)', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ maxWidth: 520, width: '100%', textAlign: 'center' }}>

        <div style={{ width: 52, height: 52, borderRadius: '50%', border: `2px solid ${C.success}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path d="M1.5 8L7.5 14L20.5 2" stroke={C.success} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 32, color: C.text, margin: '0 0 8px', fontWeight: 500 }}>
          Link generated and copied
        </h2>

        {emailSent && (
          <p style={{ fontSize: 14, color: C.success, fontFamily: 'var(--font-dm-sans)', margin: '0 0 24px' }}>
            Email sent to {clientEmail}
          </p>
        )}

        <div onClick={copy} style={{
          border: `1px solid ${C.border}`, borderRadius: 4, padding: '14px 20px',
          background: C.surface, cursor: 'pointer', marginBottom: 8, transition: 'border-color 150ms',
        }}>
          <p style={{ margin: 0, fontFamily: 'monospace', fontSize: 13, color: C.gold, wordBreak: 'break-all' }}>
            {url}
          </p>
        </div>

        <p style={{ fontSize: 12, color: C.textMuted, fontFamily: 'var(--font-dm-sans)', margin: '0 0 28px' }}>
          {copied ? 'Copied!' : 'Click to copy again'}
        </p>

        <button type="button" onClick={onReset} style={{
          background: 'none', border: `1px solid ${C.border}`, borderRadius: 2,
          padding: '11px 28px', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: C.text, cursor: 'pointer', fontFamily: 'var(--font-dm-sans)', fontWeight: 500,
        }}>
          Generate another
        </button>
      </div>
    </div>
  )
}
