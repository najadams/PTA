'use client'
import { type SelectHTMLAttributes } from 'react'
import { C } from './portal'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  hasError?:    boolean
  placeholder?: string
}

export function PtaSelect({ hasError, placeholder, style, className, children, ...props }: Props) {
  return (
    <div style={{ position: 'relative' }}>
      <select
        className={`pta-input ${hasError ? 'has-error' : ''} ${className ?? ''}`}
        style={{
          width: '100%', boxSizing: 'border-box',
          background: C.surfaceAlt,
          border: `1px solid ${hasError ? C.error : C.border}`,
          borderRadius: 8, padding: '13px 36px 13px 16px',
          fontSize: 14, color: C.text,
          appearance: 'none',
          fontFamily: 'var(--font-dm-sans)', cursor: 'pointer',
          ...style,
        }}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      <svg style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
        width="11" height="7" viewBox="0 0 11 7" fill="none">
        <path d="M1 1L5.5 6L10 1" stroke={C.textMuted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}
