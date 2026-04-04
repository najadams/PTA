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
  variant?:  'pill'
}

export function PtaRadioGroup({ name, options, value, onChange, hasError, variant }: Props) {
  if (variant === 'pill') {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {options.map(opt => {
          const checked = value === opt.value
          return (
            <button key={opt.value} type="button" onClick={() => onChange(opt.value)} style={{
              padding: '7px 16px', borderRadius: 20, fontSize: 13, cursor: 'pointer',
              border: `1px solid ${checked ? C.gold : hasError ? C.error : C.border}`,
              background: checked ? 'rgba(201,168,76,0.12)' : 'transparent',
              color: checked ? C.gold : C.textMuted,
              fontFamily: 'var(--font-dm-sans)', transition: 'all 150ms',
            }}>{opt.label}</button>
          )
        })}
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {options.map(opt => {
        const checked = value === opt.value
        return (
          <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
            <div
              onClick={() => onChange(opt.value)}
              style={{
                width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                border: `2px solid ${checked ? C.gold : hasError ? C.error : C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 150ms',
              }}
            >
              {checked && <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.gold }} />}
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
