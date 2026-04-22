import type { ReactNode } from 'react'
import type { Metadata }  from 'next'

export const metadata: Metadata = {
  title:  'Client Intake Portal | Protocol & Transfer Advisory',
  robots: { index: false, follow: false },
}

export default function IntakeLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-base)' }}>
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'var(--color-surface)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
        padding: '0 32px',
        height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{
          fontFamily: 'var(--font-cormorant)', fontSize: 19,
          color: 'var(--color-gold)', opacity: 0.9, letterSpacing: '0.02em',
        }}>
          Protocol &amp; Transfer Advisory
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#4A7C59',
            boxShadow: '0 0 6px rgba(74,124,89,0.6)',
          }} />
          <span style={{
            fontFamily: 'var(--font-dm-sans)', fontSize: 11,
            color: 'var(--color-text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Secure Portal
          </span>
        </div>
      </header>

      <main>{children}</main>
    </div>
  )
}
