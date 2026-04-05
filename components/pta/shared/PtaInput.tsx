'use client'
import { type InputHTMLAttributes } from 'react'
import { C } from './portal'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export function PtaInput({ hasError, style, className, ...props }: Props) {
  return (
    <input
      className={`pta-input ${hasError ? 'has-error' : ''} ${className ?? ''}`}
      style={{
        width: '100%', boxSizing: 'border-box',
        background: C.surfaceAlt,
        border: `1px solid ${hasError ? C.error : C.border}`,
        borderRadius: 8, padding: '13px 16px',
        fontSize: 14, color: C.text,
        fontFamily: 'var(--font-dm-sans)',
        ...style,
      }}
      {...props}
    />
  )
}
