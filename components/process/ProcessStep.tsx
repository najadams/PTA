'use client'

import type { ProcessStep } from '@/lib/process'

export default function ProcessStepRow({ step }: { step: ProcessStep }) {
  return (
    <div
      className="pta-process-step"
      style={{
        padding: 'clamp(40px, 6vw, 64px) clamp(24px, 4vw, 56px)',
        borderBottom: '0.5px solid var(--color-border-faint)',
        transition: 'background 0.3s ease', cursor: 'default',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--color-surface)' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
    >
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 300,
        color: 'rgba(201,168,76,0.12)', lineHeight: 1, alignSelf: 'start',
      }}>
        {step.num}
      </div>

      <div>
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 300,
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px',
        }}>
          {step.label}
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(24px, 3vw, 32px)',
          color: 'var(--text)', lineHeight: 1.2,
        }}>
          {step.title}
        </h2>
      </div>

      <div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 300, color: 'var(--color-text-tertiary)', lineHeight: 1.85, marginBottom: '20px' }}>
          {step.description}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {step.includes.map((item) => (
            <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ width: '3px', height: '3px', background: 'var(--color-gold-muted)', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 300, color: 'var(--color-text-tertiary)', lineHeight: 1.7 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
