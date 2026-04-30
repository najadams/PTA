'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

interface Tile {
  num:     string
  title:   string
  badge?:  string
  desc:    string
  href:    string
  span?:   boolean
  svgBody: React.ReactNode
}

const tiles: Tile[] = [
  {
    num: '01/06', title: 'TTA & GIPC Advisory', badge: 'FLAGSHIP',
    desc: "Our flagship. Technology Transfer Agreement registration, structuring, compliance, and renewal under Ghana's GIPC Act 865.",
    href: '/services?panel=tta',
    svgBody: <><rect x="4" y="4" width="28" height="28" strokeWidth="1"/><path d="M10 18h16M18 10v16" strokeWidth="1"/></>,
  },
  {
    num: '02/06', title: 'Corporate Immigration',
    desc: 'Work permits, residency, citizenship advisory, specialised sector authorisations, and annual immigration returns.',
    href: '/services?panel=immigration',
    svgBody: <><rect x="6" y="8" width="24" height="20" strokeWidth="1"/><path d="M6 14h24" strokeWidth="1"/><circle cx="12" cy="21" r="2" strokeWidth="1"/></>,
  },
  {
    num: '03/06', title: 'Corporate & Business',
    desc: 'Incorporation, secretarial compliance, tax registrations, intellectual property, and cross-border transactions.',
    href: '/services?panel=corporate',
    svgBody: <><rect x="4" y="10" width="28" height="20" strokeWidth="1"/><path d="M12 10V6h12v4" strokeWidth="1"/><path d="M4 20h28" strokeWidth="1"/></>,
  },
  {
    num: '04/06', title: 'Regulatory Compliance',
    desc: 'FDA, EPA, Free Zones, Petroleum Commission, Bank of Ghana, Minerals Commission — full sector licensing.',
    href: '/services?panel=regulatory',
    svgBody: <><circle cx="18" cy="18" r="12" strokeWidth="1"/><path d="M18 6v4M18 26v4M6 18h4M26 18h4" strokeWidth="1"/></>,
  },
  {
    num: '05/06', title: 'Market Research',
    desc: 'Sector intelligence, feasibility studies, customer surveys, brand health tracking, and field data collection.',
    href: '/services?panel=market',
    svgBody: <><path d="M6 28L12 18L18 22L24 12L30 16" strokeWidth="1"/><circle cx="12" cy="18" r="2" fill="#C9A84C"/><circle cx="18" cy="22" r="2" fill="#C9A84C"/><circle cx="24" cy="12" r="2" fill="#C9A84C"/></>,
  },
  {
    num: '06/06', title: 'Trade Development & Market Entry', span: true,
    desc: 'Partner identification, trade mission coordination, export market development, feasibility studies, and in-market strategy — for companies entering or expanding across Ghana and West Africa.',
    href: '/services?panel=trade',
    svgBody: <><circle cx="10" cy="10" r="4" strokeWidth="1"/><circle cx="26" cy="10" r="4" strokeWidth="1"/><circle cx="18" cy="26" r="4" strokeWidth="1"/><path d="M14 10h8M12 14l4 8M22 14l-4 8" strokeWidth="0.8"/></>,
  },
]

function Tile({ tile }: { tile: Tile }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={tile.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={tile.span ? 'pta-tile-span-3' : undefined}
      style={{
        display:        'block',
        background:     hovered ? 'var(--color-surface-raised)' : 'var(--color-surface)',
        padding:        '44px 36px',
        position:       'relative',
        overflow:       'hidden',
        cursor:         'pointer',
        textDecoration: 'none',
        // gridColumn handled by className below
        transition:     'background 0.2s ease',
      }}
    >
      {/* Top bar */}
      <div style={{
        position:        'absolute',
        top:             0, left: 0, right: 0,
        height:          '2px',
        background:      'var(--color-gold)',
        transform:       hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition:      'transform 0.35s ease',
      }} />

      {/* Number */}
      <div style={{
        fontFamily:    'var(--font-body)',
        fontSize:      '10px',
        fontWeight:    400,
        color:         'var(--color-text-tertiary)',
        marginBottom:  '24px',
        letterSpacing: '0.1em',
      }}>
        {tile.num}
      </div>

      {/* Icon */}
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        style={{
          width:        '32px',
          height:       '32px',
          marginBottom: '18px',
          color:        hovered ? 'var(--color-gold)' : 'var(--color-text-tertiary)',
          opacity:      hovered ? 1 : 0.6,
          transition:   'color 0.25s ease, opacity 0.25s ease',
        }}
      >
        {tile.svgBody}
      </svg>

      {/* Badge */}
      {tile.badge && (
        <div style={{
          display:       'inline-block',
          fontSize:      '9px',
          fontWeight:    500,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color:         'var(--color-text-gold)',
          border:        '1px solid var(--color-gold-muted)',
          padding:       '3px 8px',
          marginBottom:  '8px',
          borderRadius:  '2px',
        }}>
          {tile.badge}
        </div>
      )}

      {/* Title */}
      <h3 style={{
        fontFamily:   'var(--font-display)',
        fontSize:     '22px',
        fontWeight:   300,
        color:        hovered ? 'var(--color-gold-light)' : 'var(--color-text-primary)',
        marginBottom: '10px',
        lineHeight:   1.2,
        transition:   'color 0.25s ease',
      }}>
        {tile.title}
      </h3>

      {/* Desc */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize:   '13px',
        fontWeight: 400,
        color:      'var(--color-text-tertiary)',
        lineHeight: 1.7,
      }}>
        {tile.desc}
      </p>

      {/* Arrow */}
      <div style={{
        position:   'absolute',
        bottom:     '36px',
        right:      '36px',
        fontSize:   '16px',
        color:      'var(--color-gold)',
        opacity:    hovered ? 1 : 0,
        transform:  hovered ? 'translateX(0)' : 'translateX(-8px)',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
      }}>
        →
      </div>
    </Link>
  )
}

export default function ServiceTiles() {
  return (
    <section style={{ padding: 'clamp(64px, 8vw, 112px) clamp(24px, 4vw, 56px)' }}>
      <AnimatedSection>
        <div className="pta-tiles-header">
          <div>
            <SectionLabel style={{ marginBottom: '16px' }}>WHAT WE DO</SectionLabel>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize:   'clamp(30px, 4vw, 52px)',
              lineHeight: 1.05,
              color:      'var(--color-text-primary)',
            }}>
              Full-Spectrum{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Advisory Services</em>
            </h2>
          </div>
          <Link href="/services" className="btn-outline" style={{ flexShrink: 0 }}>All Services</Link>
        </div>
      </AnimatedSection>

      {/* Grid */}
      <div className="pta-grid-3" style={{
        gap:          '1px',
        background:   'var(--color-border)',
        border:       '1px solid var(--color-border)',
        borderRadius: '4px',
        overflow:     'hidden',
      }}>
        {tiles.map((tile) => (
          <Tile key={tile.num} tile={tile} />
        ))}
      </div>
    </section>
  )
}
