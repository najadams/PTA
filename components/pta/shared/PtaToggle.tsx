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
      <div 
        onClick={onToggle} 
        className={`pta-toggle-track ${on ? 'is-on' : ''}`}
        style={{ background: on ? C.gold : C.border }}
      >
        <div className="pta-toggle-thumb" />
      </div>
      <span style={{ fontSize: 14, color: on ? C.text : C.textMuted, fontFamily: 'var(--font-dm-sans)', transition: 'color 200ms' }}>
        {label}
      </span>
    </div>
  )
}
