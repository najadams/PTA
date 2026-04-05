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
  variant?:  'pill' | 'stacked'
}

export function PtaRadioGroup({ name, options, value, onChange, hasError, variant }: Props) {
  // Intelligent auto-routing: if variant is not provided, use pill for <= 4 short options, else stacked.
  const isPill = variant
    ? variant === 'pill'
    : options.length <= 4 && options.every(opt => opt.label.length <= 20)

  if (isPill) {
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

  return (
    <div className="pta-radio-stacked-group">
      {options.map(opt => {
        const checked = value === opt.value
        return (
          <label key={opt.value} className={`pta-radio-stacked-label ${hasError ? 'has-error' : ''}`}>
            <input
              type="radio" 
              name={name} 
              value={opt.value}
              checked={checked} 
              onChange={() => onChange(opt.value)}
            />
            <div className="pta-radio-circle" />
            <span className="pta-radio-stacked-text">{opt.label}</span>
          </label>
        )
      })}
    </div>
  )
}
