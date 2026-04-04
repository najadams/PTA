'use client'
import { useState, type SelectHTMLAttributes } from 'react'
import { C } from './portal'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  hasError?:    boolean
  placeholder?: string
}

export function PtaSelect({ hasError, placeholder, style, onFocus, onBlur, children, ...props }: Props) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      <select
        style={{
          width: '100%', boxSizing: 'border-box',
          background: C.surfaceAlt,
          border: `1px solid ${hasError ? C.error : focused ? C.borderActive : C.border}`,
          borderRadius: 3, padding: '10px 36px 10px 12px',
          fontSize: 14, color: C.text,
          outline: 'none', appearance: 'none',
          fontFamily: 'var(--font-dm-sans)', cursor: 'pointer',
          transition: 'border-color 150ms ease',
          ...style,
        }}
        onFocus={e => { setFocused(true); onFocus?.(e) }}
        onBlur={e => { setFocused(false); onBlur?.(e) }}
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
