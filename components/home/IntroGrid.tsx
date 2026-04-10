import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const pillars = [
  {
    word: 'Precision',
    desc: 'Every filing reviewed against current GIPC standards before submission. Zero rejections is our operating standard.',
  },
  {
    word: 'Protocol',
    desc: "Ghana's regulatory language is complex and constantly evolving. We speak it fluently — so you never have to.",
  },
  {
    word: 'Transfer',
    desc: 'Protecting your right to move technology, fees, royalties, and dividends across borders — legally and without interruption.',
  },
]

export default function IntroGrid() {
  return (
    <div style={{
      display:      'grid',
      gridTemplateColumns: '1fr 1fr',
      borderTop:    '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      {/* Left */}
      <AnimatedSection style={{
        padding:     'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)',
        borderRight: '1px solid var(--color-border)',
      }}>
        <SectionLabel style={{ marginBottom: '28px' }}>WHO WE ARE</SectionLabel>

        <h2 style={{
          fontFamily:    'var(--font-display)',
          fontWeight:    500,
          fontSize:      'clamp(32px, 3.5vw, 52px)',
          lineHeight:    1.1,
          letterSpacing: '-0.01em',
          color:         'var(--color-text-primary)',
          marginBottom:  '20px',
        }}>
          Ghana&apos;s One-Stop<br />Investment Compliance Firm
        </h2>

        <p style={{
          fontFamily:   'var(--font-body)',
          fontSize:     '17px',
          fontWeight:   400,
          color:        'var(--color-text-secondary)',
          lineHeight:   1.85,
          marginBottom: '32px',
        }}>
          Protocol &amp; Transfer Advisory (PTA) began as Ghana&apos;s dedicated specialist in
          Technology Transfer Agreement compliance. Today we are a full-spectrum investment
          and regulatory advisory firm — the single point of accountability for every foreign
          investor operating in Ghana. One relationship. No gaps.
        </p>

        <Link href="/about" className="btn-outline" style={{ display: 'inline-flex' }}>
          Our Story
        </Link>

        {/* Pillars */}
        <div style={{ marginTop: '48px' }}>
          {pillars.map((p, i) => (
            <div key={p.word} style={{
              display:      'grid',
              gridTemplateColumns: '120px 1fr',
              gap:          '24px',
              padding:      '24px 0',
              borderTop:    i === 0 ? '1px solid var(--color-border)' : undefined,
              borderBottom: '1px solid var(--color-border)',
            }}>
              <span style={{
                fontFamily:  'var(--font-display)',
                fontSize:    '26px',
                fontWeight:  400,
                color:       'var(--color-text-gold)',
                alignSelf:   'start',
                paddingTop:  '3px',
              }}>
                {p.word}
              </span>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '13px',
                fontWeight: 400,
                color:      'var(--color-text-tertiary)',
                lineHeight: 1.75,
                paddingTop: '3px',
              }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Right */}
      <AnimatedSection delay={0.15} style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)',
      }}>
        {/* Alert box — GIPC building background */}
        <div style={{
          border:        '1px solid var(--color-gold)',
          padding:       '28px 32px',
          marginBottom:  '48px',
          borderRadius:  '2px',
          position:      'relative',
          overflow:      'hidden',
        }}>
          <Image
            src="/gipc.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(13,15,20,0.82)',
            zIndex: 1,
          }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
          <span style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '9px',
            fontWeight:    500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         'var(--color-text-gold)',
            marginBottom:  '12px',
            display:       'block',
          }}>
            URGENT — GIPC BILL 2025
          </span>
          <p style={{
            fontFamily:   'var(--font-body)',
            fontSize:     '14px',
            fontWeight:   400,
            color:        'var(--color-text-secondary)',
            lineHeight:   1.75,
            marginBottom: '20px',
          }}>
            Ghana&apos;s new GIPC Bill introduces significant changes to TTA registration
            obligations, minimum capital requirements, and expatriate quota rules. The
            compliance window is open now. Companies that act early will avoid the
            enforcement rush.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: '12px 24px', fontSize: '11px' }}>
            Get a Free Compliance Assessment
          </Link>
          </div>{/* /zIndex wrapper */}
        </div>

        {/* Pull quote */}
        <blockquote style={{
          fontFamily:   'var(--font-display)',
          fontWeight:   400,
          fontStyle:    'italic',
          fontSize:     'clamp(26px, 3.2vw, 42px)',
          lineHeight:   1.3,
          color:        'var(--color-text-primary)',
          marginBottom: '24px',
        }}>
          The cost of a rejected TTA is not the government fee. It is the{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>
            royalties frozen mid-transfer
          </em>
          , the technology exposed without protection, and the penalties compounding quietly
          in the background.
        </blockquote>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '14px',
          fontWeight: 400,
          color:      'var(--color-text-secondary)',
          lineHeight: 1.85,
        }}>
          Non-compliance with Ghana&apos;s GIPC Act 865 puts your entire remittance structure
          at risk — dividends, management fees, royalties, and technical service charges. The
          consequences are rarely reversible without significant legal intervention. PTA
          exists so that never happens to your business.
        </p>
      </AnimatedSection>
    </div>
  )
}
