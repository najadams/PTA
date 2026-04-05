'use client'


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
  variant?:  'pill' // Kept for backward compatibility, all radios will render as pills
}

export function PtaRadioGroup({ name, options, value, onChange, hasError }: Props) {
  return (
    <div className="pta-radio-group">
      {options.map(opt => {
        const checked = value === opt.value
        return (
          <label key={opt.value} className={`pta-radio-label ${hasError ? 'has-error' : ''}`}>
            <input
              type="radio" 
              name={name} 
              value={opt.value}
              checked={checked} 
              onChange={() => onChange(opt.value)}
            />
            <span className="pta-radio-pill">{opt.label}</span>
          </label>
        )
      })}
    </div>
  )
}
