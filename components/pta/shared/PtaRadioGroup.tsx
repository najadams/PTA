'use client'
import { C } from './portal'

interface Option {
  value: string
  label: string
}

interface Props {
  name:      string
  options:   Option[]
  value:     string
  onChange:  (value: string) => void
  hasError?: boolean
}

export function PtaRadioGroup({ name, options, value, onChange, hasError }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {options.map(opt => {
        const checked = value === opt.value
        return (
          <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
            <div style={{
              width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
              border: `2px solid ${checked ? C.gold : hasError ? C.error : C.border}`,
              background: checked ? 'transparent' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 150ms',
            }}
              onClick={() => onChange(opt.value)}
            >
              {checked && (
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.gold }} />
              )}
            </div>
            <input
              type="radio" name={name} value={opt.value}
              checked={checked} onChange={() => onChange(opt.value)}
              style={{ display: 'none' }}
            />
            <span style={{ fontSize: 14, color: checked ? C.text : C.textMuted, fontFamily: 'var(--font-dm-sans)' }}>
              {opt.label}
            </span>
          </label>
        )
      })}
    </div>
  )
}
