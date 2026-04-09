import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const differentiators = [
  {
    num:   '01',
    title: 'Lawyer-Backed, Not Just Advisory',
    desc:  'Our partnership structure includes a practising lawyer holding equity. Every legal position we take carries professional accountability — not just advisory opinion.',
  },
  {
    num:   '02',
    title: 'The Only Firm You Need in Ghana',
    desc:  'TTA registration, GIPC compliance, immigration, legal counsel, market research, trade development — all coordinated through a single engagement. One relationship. No coordination gaps.',
  },
  {
    num:   '03',
    title: 'GIPC Bill 2025 — We Are Already Ready',
    desc:  "Ghana's incoming regulatory changes are significant. Our clients are being briefed and repositioned now — before enforcement begins. Most firms are still catching up.",
  },
  {
    num:   '04',
    title: 'Fixed Fees. No Hourly Billing Surprises',
    desc:  'Every mandate is scoped and priced upfront. You know the cost before we begin. Government fees are passed through at cost and disclosed in full — always.',
  },
]

export default function WhyPTA() {
  return (
    <section style={{
      background:   'var(--color-surface)',
      borderTop:    '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <AnimatedSection style={{
          padding:     'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)',
          borderRight: '1px solid var(--color-border)',
        }}>
          <SectionLabel style={{ marginBottom: '28px' }}>WHY CHOOSE PTA</SectionLabel>
          <h2 style={{
            fontFamily:   'var(--font-display)',
            fontWeight:   300,
            fontSize:     'clamp(28px, 3.5vw, 52px)',
            lineHeight:   1.05,
            color:        'var(--color-text-primary)',
            marginBottom: '20px',
          }}>
            What Sets Us{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Apart</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '15px',
            fontWeight: 400,
            color:      'var(--color-text-secondary)',
            lineHeight: 1.85,
          }}>
            Most advisory firms in Ghana handle one domain. PTA handles all of them — and
            coordinates between them — so your compliance never falls through the cracks
            between specialists.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} style={{
          padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)',
        }}>
          {differentiators.map((d, i) => (
            <div key={d.num} style={{
              display:             'grid',
              gridTemplateColumns: '48px 1fr',
              gap:                 '20px',
              padding:             '24px 0',
              borderTop:           i === 0 ? '1px solid var(--color-border)' : undefined,
              borderBottom:        '1px solid var(--color-border)',
              alignItems:          'start',
            }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '11px',
                fontWeight: 400,
                color:      'var(--color-gold-muted)',
                paddingTop: '2px',
              }}>
                {d.num}
              </span>
              <div>
                <div style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '14px',
                  fontWeight:    500,
                  color:         'var(--color-text-primary)',
                  letterSpacing: '0.01em',
                  marginBottom:  '8px',
                }}>
                  {d.title}
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '13px',
                  fontWeight: 400,
                  color:      'var(--color-text-tertiary)',
                  lineHeight: 1.75,
                }}>
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
