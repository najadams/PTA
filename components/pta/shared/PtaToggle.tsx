'use client'
import { C } from './portal'

interface Props {
  on:       boolean
  onToggle: () => void
  label:    string
}

export function PtaToggle({ on, onToggle, label }: Props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div onClick={onToggle} style={{
        width: 40, height: 22, borderRadius: 11, cursor: 'pointer', flexShrink: 0,
        background: on ? C.gold : C.border, position: 'relative', transition: 'background 200ms',
      }}>
        <div style={{
          position: 'absolute', top: 3, left: on ? 21 : 3, width: 16, height: 16,
          borderRadius: '50%', background: on ? '#0D0F14' : C.textMuted, transition: 'left 200ms',
        }} />
      </div>
      <span style={{ fontSize: 14, color: on ? C.text : C.textMuted, fontFamily: 'var(--font-dm-sans)', transition: 'color 200ms' }}>
        {label}
      </span>
    </div>
  )
}
