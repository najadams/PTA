'use client'
import type { ReactNode } from 'react'
import { C } from './portal'

interface Props {
  variant:  'warning' | 'error' | 'info' | 'notice'
  children: ReactNode
}

const VARIANT_STYLES = {
  warning: { border: C.warning,  bg: 'rgba(201,168,76,0.08)',  text: C.warning  },
  error:   { border: C.error,    bg: 'rgba(196,68,68,0.08)',   text: C.error    },
  info:    { border: C.gold,     bg: 'rgba(201,168,76,0.06)',  text: C.textMuted },
  notice:  { border: C.border,   bg: 'rgba(37,42,54,0.4)',     text: C.textMuted },
} as const

export function InlineAlert({ variant, children }: Props) {
  const s = VARIANT_STYLES[variant]
  return (
    <div style={{
      marginTop: 8,
      padding: '10px 14px',
      borderRadius: 3,
      border: `1px solid ${s.border}`,
      background: s.bg,
      fontSize: 13,
      color: s.text,
      fontFamily: 'var(--font-dm-sans)',
      lineHeight: 1.6,
    }}>
      {children}
    </div>
  )
}
