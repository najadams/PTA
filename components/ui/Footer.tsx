'use client'

import Link from 'next/link'

const serviceLinks = [
  { label: 'TTA & GIPC Advisory',     href: '/services?panel=tta' },
  { label: 'Corporate Immigration',    href: '/services?panel=immigration' },
  { label: 'Corporate & Business',     href: '/services?panel=corporate' },
  { label: 'Regulatory Compliance',    href: '/services?panel=regulatory' },
  { label: 'Market Research',          href: '/services?panel=market' },
  { label: 'Trade Development',        href: '/services?panel=trade' },
]

const firmLinks = [
  { label: 'About PTA',             href: '/about' },
  { label: 'How It Works',          href: '/process' },
  { label: 'Contact Us',            href: '/contact' },
  { label: 'Insights & Blog',       href: '/blog' },
  { label: 'TTA Registration',      href: '/tta-registration-ghana' },
  { label: 'GIPA Act 2025',         href: '/gipa-act-2025' },
  { label: 'Telecom Compliance',    href: '/sectors/telecommunications' },
]

const colLabelStyle: React.CSSProperties = {
  fontFamily:    'var(--font-body)',
  fontSize:      '10px',
  fontWeight:    500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color:         'var(--color-text-gold)',
  marginBottom:  '20px',
  display:       'block',
}

const colLinkStyle: React.CSSProperties = {
  fontFamily:     'var(--font-body)',
  fontSize:       '13px',
  fontWeight:     400,
  color:          'var(--color-text-tertiary)',
  display:        'block',
  marginBottom:   '10px',
  transition:     'color 0.2s ease',
  textDecoration: 'none',
}

export default function Footer() {
  return (
    <footer
      style={{
        background:  'var(--color-surface)',
        borderTop:   '1px solid var(--color-border)',
        padding:     'clamp(48px, 6vw, 64px) clamp(24px, 4vw, 56px) 40px',
      }}
    >
      {/* Top grid */}
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap:                 '40px',
          marginBottom:        '48px',
        }}
      >
        {/* Col 1 — Brand */}
        <div style={{ gridColumn: 'span 1' }}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '17px',
              fontWeight:    400,
              letterSpacing: '0.08em',
              color:         'var(--color-text-gold)',
              marginBottom:  '5px',
            }}>
              PROTOCOL &amp; TRANSFER ADVISORY
            </div>
            <div style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '9px',
              fontWeight:    400,
              letterSpacing: '0.2em',
              color:         'var(--color-text-tertiary)',
            }}>
              PRECISION · PROTOCOL · TRANSFER
            </div>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '13px',
            fontWeight: 400,
            color:      'var(--color-text-tertiary)',
            lineHeight: 1.8,
          }}>
            Ghana&apos;s full-spectrum investment and compliance advisory firm. From TTA
            registration to market entry — one firm, complete coverage.
          </p>
        </div>

        {/* Col 2 — Services */}
        <div>
          <span style={colLabelStyle}>Services</span>
          {serviceLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={colLinkStyle}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-tertiary)')}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Col 3 — Firm */}
        <div>
          <span style={colLabelStyle}>Firm</span>
          {firmLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={colLinkStyle}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-tertiary)')}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Col 4 — Contact */}
        <div>
          <span style={colLabelStyle}>Contact</span>
          <a href="tel:+233555547984" style={colLinkStyle}>+233 555 547 233555547984</a>
          <a
            href="mailto:contact@ptadvisory.co"
            style={{ ...colLinkStyle, color: 'var(--color-text-gold)', wordBreak: 'break-word' }}
          >
            contact@ptadvisory.co
          </a>
          <span style={{ ...colLinkStyle, cursor: 'default' }}>Accra, Ghana</span>
          <a
            href="https://wa.me/233555547984"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...colLinkStyle, color: 'var(--color-text-gold)' }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop:      '1px solid var(--color-border)',
        paddingTop:     '24px',
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        flexWrap:       'wrap',
        gap:            '12px',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '11px',
          color:      'var(--color-text-tertiary)',
          fontWeight: 400,
        }}>
          &copy; 2025 Protocol &amp; Transfer Advisory (PTA). All rights reserved.
        </span>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize:   '14px',
          fontStyle:  'italic',
          color:      'var(--color-gold-muted)',
        }}>
          Precision. Protocol. Transfer.
        </span>
      </div>
    </footer>
  )
}
