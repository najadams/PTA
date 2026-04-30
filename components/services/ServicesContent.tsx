'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { panels } from '@/lib/services'
import ServicePanel from './ServicePanel'

const navItems = [
  { id: 'tta',         label: 'TTA & GIPC Advisory', num: '01' },
  { id: 'immigration', label: 'Corporate Immigration', num: '02' },
  { id: 'corporate',   label: 'Corporate & Business',  num: '03' },
  { id: 'regulatory',  label: 'Regulatory Compliance', num: '04' },
  { id: 'market',      label: 'Market Research',       num: '05' },
  { id: 'trade',       label: 'Trade Development',     num: '06' },
]

export default function ServicesContent() {
  const searchParams = useSearchParams()
  const router       = useRouter()
  const active       = searchParams.get('panel') ?? 'tta'
  const panel        = panels.find((p) => p.id === active) ?? panels[0]

  const setPanel = (id: string) => {
    router.replace(`/services?panel=${id}`, { scroll: false })
  }

  return (
    <div className="pta-services-layout">
      {/* Sidebar */}
      <div className="pta-services-sidebar">
        {navItems.map((item) => {
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => setPanel(item.id)}
              data-active={isActive ? 'true' : 'false'}
              style={{
                display:        'flex',
                justifyContent: 'space-between',
                alignItems:     'center',
                width:          '100%',
                padding:        '18px 40px',
                background:     isActive ? 'rgba(201,168,76,0.05)' : 'transparent',
                border:         'none',
                borderLeft:     isActive ? '2px solid var(--color-gold)' : '2px solid transparent',
                cursor:         'pointer',
                textAlign:      'left',
                transition:     'all 0.2s ease',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 300,
                color: isActive ? 'var(--color-gold)' : 'var(--color-text-tertiary)',
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease',
              }}>
                {item.label}
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 400, color: 'var(--color-gold-muted)' }}>
                {item.num}
              </span>
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div>
        <ServicePanel data={panel} />
      </div>
    </div>
  )
}
