'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const sectors = [
  {
    name:   'Telecommunications',
    detail: 'TTA registration, GIPC compliance, expatriate quotas, spectrum licensing advisory',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 32, height: 32 }}>
        <rect x="4" y="8" width="24" height="18" stroke="#C9A84C" strokeWidth="1"/>
        <path d="M10 8V6h12v2M16 12v8M12 16h8" stroke="#C9A84C" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    name:   'FMCG & Consumer Goods',
    detail: 'FDA product registration, trade development, distribution partner identification',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 32, height: 32 }}>
        <rect x="6" y="10" width="20" height="16" stroke="#C9A84C" strokeWidth="1"/>
        <path d="M10 10V7h12v3M10 18h12" stroke="#C9A84C" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    name:   'Banking & Finance',
    detail: 'Bank of Ghana licensing, TTA & fintech compliance, employment law',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 32, height: 32 }}>
        <rect x="4" y="6" width="24" height="20" stroke="#C9A84C" strokeWidth="1"/>
        <path d="M4 14h24M12 6v20M20 6v20" stroke="#C9A84C" strokeWidth="0.8"/>
      </svg>
    ),
  },
  {
    name:   'Mining & Resources',
    detail: 'Minerals Commission licensing, environmental permits, rotator permit authorisations',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 32, height: 32 }}>
        <path d="M16 4L28 12v16H4V12L16 4z" stroke="#C9A84C" strokeWidth="1"/>
        <rect x="12" y="18" width="8" height="10" stroke="#C9A84C" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    name:   'Technology & Software',
    detail: 'TTA structuring, IP registration, work permits, market entry strategy',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 32, height: 32 }}>
        <circle cx="16" cy="16" r="10" stroke="#C9A84C" strokeWidth="1"/>
        <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="#C9A84C" strokeWidth="0.8"/>
      </svg>
    ),
  },
  {
    name:   'Logistics & Mobility',
    detail: 'GIPC investor registration, corporate immigration, local content advisory',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 32, height: 32 }}>
        <path d="M4 24L12 14l6 6 4-8 6 4" stroke="#C9A84C" strokeWidth="1"/>
        <circle cx="12" cy="14" r="2" fill="#C9A84C" opacity="0.6"/>
      </svg>
    ),
  },
]

function SectorCard({ sector }: { sector: typeof sectors[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:  hovered ? 'var(--surface)' : 'var(--bg)',
        padding:     '36px 32px',
        cursor:      'default',
        transition:  'background 0.2s ease',
      }}
    >
      <div style={{ opacity: hovered ? 1 : 0.5, transition: 'opacity 0.3s ease', marginBottom: '16px' }}>
        {sector.icon}
      </div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 300,
        color: 'var(--text)', marginBottom: '8px',
      }}>
        {sector.name}
      </div>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7 }}>
        {sector.detail}
      </p>
    </div>
  )
}

export default function SectorsGrid() {
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)', borderBottom: '0.5px solid var(--border-faint)' }}>
      <AnimatedSection>
        <SectionLabel style={{ marginBottom: '20px' }}>WHO WE SERVE</SectionLabel>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, color: 'var(--text)', marginBottom: '16px',
        }}>
          Foreign Investors Across{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Every Major Sector</em>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.85, maxWidth: '640px' }}>
          PTA serves multinationals, regional holding companies, and foreign-owned businesses
          operating or expanding in Ghana — wherever Ghana&apos;s regulatory framework applies
          to your business, we apply our expertise.
        </p>
      </AnimatedSection>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px', background: 'var(--border-faint)',
        border: '0.5px solid var(--border-faint)', marginTop: '56px',
      }}>
        {sectors.map((s) => (
          <SectorCard key={s.name} sector={s} />
        ))}
      </div>
    </section>
  )
}
