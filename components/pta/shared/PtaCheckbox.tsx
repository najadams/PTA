'use client'
import type { ReactNode } from 'react'
import { C } from './portal'

interface Props {
  checked:   boolean
  onChange:  (checked: boolean) => void
  children:  ReactNode
  hasError?: boolean
}

export function PtaCheckbox({ checked, onChange, children, hasError }: Props) {
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer' }}>
      <div
        onClick={() => onChange(!checked)}
        style={{
          width: 18, height: 18, borderRadius: 4, flexShrink: 0, marginTop: 1,
          border: `2px solid ${checked ? C.gold : hasError ? C.error : C.border}`,
          background: checked ? C.gold : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 150ms ease', cursor: 'pointer',
        }}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="#0D0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <span style={{ fontSize: 14, color: C.text, fontFamily: 'var(--font-dm-sans)', lineHeight: 1.6 }}>
        {children}
      </span>
    </label>
  )
}
