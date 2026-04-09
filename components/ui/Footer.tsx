'use client'

import Link from 'next/link'

const serviceLinks = [
  { label: 'TTA & GIPC Advisory',     href: '/services?panel=tta' },
  { label: 'Legal Services',           href: '/services?panel=legal' },
  { label: 'Corporate Immigration',    href: '/services?panel=immigration' },
  { label: 'Corporate & Business',     href: '/services?panel=corporate' },
  { label: 'Regulatory Compliance',    href: '/services?panel=regulatory' },
  { label: 'Market Research',          href: '/services?panel=market' },
  { label: 'Trade Development',        href: '/services?panel=trade' },
]

const firmLinks = [
  { label: 'About PTA',    href: '/about' },
  { label: 'Our Network',  href: '/network' },
  { label: 'How It Works', href: '/process' },
  { label: 'Contact Us',   href: '/contact' },
]

const colLabel = {
  fontFamily:    'var(--font-body)' as const,
  fontSize:      '10px',
  fontWeight:    300,
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  color:         'var(--gold)',
  marginBottom:  '20px',
  display:       'block',
}

const colLink = {
  fontFamily:    'var(--font-body)' as const,
  fontSize:      '13px',
  fontWeight:    300,
  color:         'var(--muted)',
  display:       'block',
  marginBottom:  '10px',
  transition:    'color 0.2s ease',
  textDecoration: 'none' as const,
}

export default function Footer() {
  return (
    <footer
      style={{
        background:   'var(--bg2)',
        borderTop:    '0.5px solid var(--border-faint)',
        padding:      '64px 56px 40px',
      }}
    >
      {/* Top grid */}
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap:                 '40px',
          marginBottom:        '48px',
        }}
        className="grid-cols-2 md:grid-cols-4"
      >
        {/* Col 1 — Brand */}
        <div>
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '18px',
              fontWeight:    400,
              letterSpacing: '0.1em',
              color:         'var(--gold)',
              marginBottom:  '4px',
            }}>
              PROTOCOL & TRANSFER ADVISORY
            </div>
            <div style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '9px',
              fontWeight:    300,
              letterSpacing: '0.2em',
              color:         'var(--muted)',
            }}>
              PRECISION · PROTOCOL · TRANSFER
            </div>
          </div>
          <p style={{
            fontFamily:  'var(--font-body)',
            fontSize:    '12px',
            fontWeight:  300,
            color:       'var(--muted)',
            lineHeight:  1.8,
          }}>
            Ghana&apos;s full-spectrum investment and compliance advisory firm. From TTA
            registration to market entry — one firm, complete coverage.
          </p>
        </div>

        {/* Col 2 — Services */}
        <div>
          <span style={colLabel}>Services</span>
          {serviceLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={colLink}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text2)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Col 3 — Firm */}
        <div>
          <span style={colLabel}>Firm</span>
          {firmLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={colLink}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text2)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Col 4 — Contact */}
        <div>
          <span style={colLabel}>Contact</span>
          <a href="tel:+233555547998" style={colLink}>+233 555 547 998</a>
          <a href="mailto:najm@protocolandtransfer.com" style={{ ...colLink, color: 'var(--gold)', wordBreak: 'break-word' }}>
            najm@protocolandtransfer.com
          </a>
          <span style={{ ...colLink, cursor: 'default' }}>Accra, Ghana</span>
          <a
            href="https://wa.me/233555547998"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...colLink, color: 'var(--gold)' }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop:     '0.5px solid var(--border-faint)',
        paddingTop:    '24px',
        display:       'flex',
        justifyContent: 'space-between',
        alignItems:    'center',
        flexWrap:      'wrap',
        gap:           '12px',
      }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--muted)', fontWeight: 300 }}>
          &copy; 2025 Protocol & Transfer Advisory (PTA). All rights reserved.
        </span>
        <span style={{
          fontFamily:  'var(--font-display)',
          fontSize:    '14px',
          fontStyle:   'italic',
          color:       'var(--gold-dim)',
        }}>
          Precision. Protocol. Transfer.
        </span>
      </div>
    </footer>
  )
}
