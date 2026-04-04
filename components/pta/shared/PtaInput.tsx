'use client'
import { useState, type InputHTMLAttributes } from 'react'
import { C } from './portal'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export function PtaInput({ hasError, style, onFocus, onBlur, ...props }: Props) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      style={{
        width: '100%', boxSizing: 'border-box',
        background: C.surfaceAlt,
        border: `1px solid ${hasError ? C.error : focused ? C.borderActive : C.border}`,
        borderRadius: 8, padding: '13px 16px',
        fontSize: 14, color: C.text,
        outline: 'none', fontFamily: 'var(--font-dm-sans)',
        transition: 'border-color 150ms ease',
        ...style,
      }}
      onFocus={e => { setFocused(true); onFocus?.(e) }}
      onBlur={e => { setFocused(false); onBlur?.(e) }}
      {...props}
    />
  )
}
