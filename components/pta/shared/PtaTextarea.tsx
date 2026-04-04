'use client'
import { useState, type TextareaHTMLAttributes } from 'react'
import { C } from './portal'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

export function PtaTextarea({ hasError, style, onFocus, onBlur, ...props }: Props) {
  const [focused, setFocused] = useState(false)
  return (
    <textarea
      rows={4}
      style={{
        width: '100%', boxSizing: 'border-box',
        background: C.surfaceAlt,
        border: `1px solid ${hasError ? C.error : focused ? C.borderActive : C.border}`,
        borderRadius: 3, padding: '10px 12px',
        fontSize: 14, color: C.text,
        outline: 'none', resize: 'vertical',
        fontFamily: 'var(--font-dm-sans)', lineHeight: 1.6,
        transition: 'border-color 150ms ease',
        ...style,
      }}
      onFocus={e => { setFocused(true); onFocus?.(e) }}
      onBlur={e => { setFocused(false); onBlur?.(e) }}
      {...props}
    />
  )
}
