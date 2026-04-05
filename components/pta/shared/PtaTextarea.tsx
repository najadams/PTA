'use client'
import { type TextareaHTMLAttributes } from 'react'
import { C } from './portal'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

export function PtaTextarea({ hasError, style, className, ...props }: Props) {
  return (
    <textarea
      rows={4}
      className={`pta-input ${hasError ? 'has-error' : ''} ${className ?? ''}`}
      style={{
        width: '100%', boxSizing: 'border-box',
        background: C.surfaceAlt,
        border: `1px solid ${hasError ? C.error : C.border}`,
        borderRadius: 8, padding: '13px 16px',
        fontSize: 14, color: C.text, minHeight: 100,
        resize: 'vertical',
        fontFamily: 'var(--font-dm-sans)', lineHeight: 1.6,
        ...style,
      }}
      {...props}
    />
  )
}
