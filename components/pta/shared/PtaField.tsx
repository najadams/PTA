'use client'
import type { ReactNode } from 'react'
import { C } from './portal'

interface Props {
  label:     string
  required?: boolean
  helper?:   string
  error?:    string
  children:  ReactNode
}

export function PtaField({ label, required, helper, error, children }: Props) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: 'block', marginBottom: 6,
        fontSize: 13, color: C.textMuted, letterSpacing: '0.03em',
        fontFamily: 'var(--font-dm-sans)',
      }}>
        {label}
        {required && <span style={{ color: C.gold, marginLeft: 3 }}>*</span>}
      </label>
      {children}
      {helper && !error && (
        <p style={{ marginTop: 5, fontSize: 12, color: C.textMuted, lineHeight: 1.5 }}>{helper}</p>
      )}
      {error && (
        <p style={{ marginTop: 5, fontSize: 12, color: C.error }}>{error}</p>
      )}
    </div>
  )
}
