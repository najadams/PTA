'use client'
import { C } from './portal'

interface Props {
  currentStep: number
  totalSteps:  number
}

export function WizardProgress({ currentStep, totalSteps }: Props) {
  const pct = ((currentStep - 1) / (totalSteps - 1)) * 100

  return (
    <div style={{ marginBottom: 28 }}>
      {/* Bar */}
      <div style={{ height: 2, background: C.border, borderRadius: 1, marginBottom: 12 }}>
        <div style={{
          height: '100%', borderRadius: 1,
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${C.goldDim}, ${C.gold})`,
          transition: 'width 350ms ease',
        }} />
      </div>

      {/* Step counter + dots */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12, color: C.textMuted, fontFamily: 'var(--font-dm-sans)' }}>
          Step {currentStep} of {totalSteps}
        </span>
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          {Array.from({ length: totalSteps }, (_, i) => {
            const step   = i + 1
            const active = step === currentStep
            const done   = step < currentStep
            return (
              <div key={i} style={{
                height: 6,
                width:  active ? 22 : 6,
                borderRadius: 3,
                background: done   ? C.goldDim :
                            active ? C.gold    : 'transparent',
                border: `1px solid ${done || active ? C.gold : C.border}`,
                opacity: done ? 0.6 : 1,
                transition: 'all 250ms ease',
              }} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
