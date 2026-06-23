import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { OFFERS } from '@/lib/offers'

export default function OfferLadder() {
  return (
    <section style={{
      padding:      'clamp(64px, 8vw, 104px) clamp(24px, 5.6vw, 56px)',
      background:   'var(--color-base)',
      borderTop:    '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <AnimatedSection>
        <SectionLabel style={{ marginBottom: '24px' }}>CLIENT PATH</SectionLabel>
        <div className="pta-grid-2" style={{ gap: '40px', alignItems: 'end', marginBottom: '40px' }}>
          <h2 style={{
            fontFamily:    'var(--font-display)',
            fontWeight:    500,
            fontSize:      'clamp(32px, 4.5vw, 56px)',
            lineHeight:    1.08,
            letterSpacing: '-0.01em',
            color:         'var(--color-text-primary)',
          }}>
            From exposure check to ongoing{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>remittance protection</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '16px',
            color:      'var(--color-text-secondary)',
            lineHeight: 1.8,
          }}>
            PTA packages TTA/GIPC work so foreign-owned companies can start small, verify risk,
            and move into registration support or monitoring only when the exposure is clear.
          </p>
        </div>
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap:                 '1px',
          background:          'var(--color-border)',
          border:              '1px solid var(--color-border)',
          borderRadius:        '4px',
          overflow:            'hidden',
        }}>
          {OFFERS.map((offer) => (
            <article key={offer.title} style={{ padding: '32px', background: 'var(--color-surface)' }}>
              <span style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '11px',
                fontWeight:    600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:         'var(--color-text-gold)',
              }}>
                {offer.tier}
              </span>
              <h3 style={{
                fontFamily:   'var(--font-display)',
                fontSize:     '24px',
                fontWeight:   500,
                color:        'var(--color-text-primary)',
                lineHeight:   1.2,
                marginTop:    '14px',
                marginBottom: '12px',
              }}>
                {offer.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: '18px' }}>
                {offer.description}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-tertiary)', lineHeight: 1.7 }}>
                {offer.outcome}
              </p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
          <Link href="/contact?source=website&campaign=free-tta-audit" className="btn-primary">
            Get a Free TTA Compliance Audit
          </Link>
        </div>
      </AnimatedSection>
    </section>
  )
}
