import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const differentiators = [
  {
    num:   '01',
    title: 'TTA Registration Is All We Do in Ghana — and Everything That Connects to It',
    desc:  'Most advisory firms in Ghana offer TTA registration as one line item in a broad service menu. At PTA, it is the practice around which every other service is built. Our TTA compliance work is powered by LexAI — Ghana\'s AI legal platform — which cross-references every agreement against current GIPC registration standards before a single document is filed.',
  },
  {
    num:   '02',
    title: 'Lawyer-Backed, Not Just Advisory',
    desc:  'PTA\'s partnership structure includes a practising Ghanaian lawyer holding equity in the firm. Every legal position we take on your TTA, your entity structure, or your GIPA transition carries professional accountability behind it — not just advisory opinion. That distinction matters when a regulator pushes back or an audit begins.',
  },
  {
    num:   '03',
    title: 'One Engagement Covers Your Entire Ghana Regulatory Footprint',
    desc:  'TTA registration. GIPC investor registration. Corporate immigration and expatriate quota management. Regulatory licensing. Market research. Trade development. Most foreign investors in Ghana manage these through separate advisors, with no one accountable for the gaps between them. PTA coordinates all of it — one relationship, one point of accountability, no compliance falling through the cracks.',
  },
]

export default function WhyPTA() {
  return (
    <section style={{
      background:   'var(--color-surface)',
      borderTop:    '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div className="pta-grid-2">
        <AnimatedSection style={{
          padding:     'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)',
          borderRight: '1px solid var(--color-border)',
        }}>
          <SectionLabel style={{ marginBottom: '28px' }}>WHY CHOOSE PTA</SectionLabel>
          <h2 style={{
            fontFamily:    'var(--font-display)',
            fontWeight:    500,
            fontSize:      'clamp(36px, 4vw, 56px)',
            lineHeight:    1.05,
            letterSpacing: '-0.01em',
            color:         'var(--color-text-primary)',
            marginBottom:  '20px',
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
            <div key={d.num} className={`pta-diff-row${i === 0 ? ' is-first' : ''}`}>
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
                  fontSize:      '15px',
                  fontWeight:    600,
                  color:         'var(--color-text-primary)',
                  letterSpacing: '0.01em',
                  marginBottom:  '8px',
                }}>
                  {d.title}
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '15px',
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
