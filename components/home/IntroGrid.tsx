import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const pillars = [
  { word: 'Precision', desc: 'Every filing reviewed against current GIPC standards before submission. Zero rejections is our operating standard.' },
  { word: 'Protocol',  desc: "Ghana's regulatory language is complex and constantly evolving. We speak it fluently — so you never have to." },
  { word: 'Transfer',  desc: 'Protecting your right to move technology, fees, royalties, and dividends across borders — legally and without interruption.' },
]

export default function IntroGrid() {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      borderTop: '0.5px solid var(--border-faint)', borderBottom: '0.5px solid var(--border-faint)',
    }}>
      {/* Left */}
      <AnimatedSection style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)',
        borderRight: '0.5px solid var(--border-faint)',
      }}>
        <SectionLabel style={{ marginBottom: '28px' }}>WHO WE ARE</SectionLabel>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.1,
          color: 'var(--text)', marginBottom: '20px',
        }}>
          Ghana&apos;s One-Stop<br />Investment Compliance Firm
        </h2>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.85, marginBottom: '32px' }}>
          Protocol & Transfer Advisory (PTA) began as Ghana&apos;s dedicated specialist in
          Technology Transfer Agreement compliance. Today we are a full-spectrum investment
          and regulatory advisory firm — the single point of accountability for every foreign
          investor operating in Ghana. One relationship. No gaps.
        </p>

        <Link href="/about" className="btn-outline" style={{ marginBottom: '48px', display: 'inline-flex' }}>
          Our Story
        </Link>

        {/* Pillars */}
        <div style={{ marginTop: '40px' }}>
          {pillars.map((p, i) => (
            <div key={p.word} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px',
              padding: '28px 0',
              borderTop: i === 0 ? '0.5px solid var(--border-faint)' : undefined,
              borderBottom: '0.5px solid var(--border-faint)',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 300, color: 'var(--gold)', alignSelf: 'start', paddingTop: '4px' }}>
                {p.word}
              </span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, paddingTop: '4px' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Right */}
      <AnimatedSection delay={0.15} style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)' }}>
        {/* Alert box */}
        <div style={{
          border: '0.5px solid var(--gold)', background: 'var(--gold-glow)', padding: '28px 32px', marginBottom: '48px',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '9px', fontWeight: 300,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)',
            marginBottom: '12px', display: 'block',
          }}>
            URGENT — GIPC BILL 2025
          </span>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.75, marginBottom: '20px' }}>
            Ghana&apos;s new GIPC Bill introduces significant changes to TTA registration
            obligations, minimum capital requirements, and expatriate quota rules. The
            compliance window is open now. Companies that act early will avoid the
            enforcement rush.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: '12px 24px', fontSize: '11px' }}>
            Get a Free Compliance Assessment
          </Link>
        </div>

        {/* Pull quote */}
        <blockquote style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.3,
          color: 'var(--text)', marginBottom: '24px',
        }}>
          The cost of a rejected TTA is not the government fee. It is the{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
            royalties frozen mid-transfer
          </em>
          , the technology exposed without protection, and the penalties compounding quietly
          in the background.
        </blockquote>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.85 }}>
          Non-compliance with Ghana&apos;s GIPC Act 865 puts your entire remittance structure
          at risk — dividends, management fees, royalties, and technical service charges. The
          consequences are rarely reversible without significant legal intervention. PTA
          exists so that never happens to your business.
        </p>
      </AnimatedSection>
    </div>
  )
}
