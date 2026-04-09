import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: "About PTA | Ghana's Full-Spectrum Investment Advisory Firm",
  description: 'From TTA specialist to full-spectrum investment and compliance advisory firm — the story and values behind Protocol & Transfer Advisory.',
}

const values = [
  { name: 'Precision',      desc: 'Every filing reviewed against current standards before submission. We do not guess. We do not retry. We get it right the first time.' },
  { name: 'Protocol',       desc: "Ghana's regulatory language is complex and constantly evolving. We track every change — GIPC Bill 2025 included — so our clients are never caught off guard." },
  { name: 'Transfer',       desc: "We exist to protect our clients' right to transfer value — technology fees, royalties, dividends — across borders. Legally, sustainably, and without interruption." },
  { name: 'Accountability', desc: 'We are a firm with professional partners, not a service provider. When we take on a mandate, we own the outcome.' },
  { name: 'Discretion',     desc: 'Our clients are sophisticated institutions. We treat their affairs with the same confidence they expect from any senior legal or financial partner.' },
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '76px' }}>
        {/* Hero */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)', borderBottom: '0.5px solid var(--border-faint)' }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '20px' }}>ABOUT PTA</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(38px, 5vw, 68px)', lineHeight: 1.05,
              color: 'var(--text)', marginBottom: '20px',
            }}>
              From TTA Specialist to{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Full-Spectrum Firm</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.85, maxWidth: '600px' }}>
              Protocol & Transfer Advisory began as Ghana&apos;s dedicated specialist in
              Technology Transfer Agreement compliance. The mandate has grown — but the
              standard has not changed.
            </p>
          </AnimatedSection>
        </section>

        {/* Two-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '0.5px solid var(--border-faint)' }}>
          {/* Left */}
          <AnimatedSection style={{
            padding: 'clamp(60px, 8vw, 80px) clamp(24px, 4vw, 56px)',
            borderRight: '0.5px solid var(--border-faint)',
          }}>
            <blockquote style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(22px, 3vw, 38px)', lineHeight: 1.4,
              color: 'var(--text)', marginBottom: '32px',
            }}>
              We built PTA on a simple belief:{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
                foreign investors deserve a firm that treats their compliance as seriously as
                they do.
              </em>
            </blockquote>

            {[
              'When multinational companies enter Ghana, the regulatory burden is significant — and the consequences of getting it wrong are severe. Technology Transfer Agreements, GIPC registration, immigration quotas, sector licensing — each domain has its own framework, its own deadlines, and its own penalties for non-compliance.',
              'PTA was created to be the single firm that handles all of it. Not a generalist. Not a government-liaison service. A precision advisory firm with deep technical knowledge of Ghana\'s investment regulatory environment and a network of the country\'s leading specialists for every domain beyond our core.',
              'Our partnership structure — with a practising lawyer holding equity — means every legal position we take is backed by professional accountability. Our extended network — Firmus Advisory for compliance and research, Globetrotters Legal Africa for immigration and corporate law — means our clients never need to look elsewhere.',
            ].map((p, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.85, marginBottom: '20px' }}>
                {p}
              </p>
            ))}

            <Link href="/network" className="btn-outline" style={{ marginTop: '12px', display: 'inline-flex' }}>
              Meet Our Network
            </Link>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection delay={0.15} style={{ padding: 'clamp(60px, 8vw, 80px) clamp(24px, 4vw, 56px)' }}>
            <SectionLabel style={{ marginBottom: '28px' }}>OUR VALUES</SectionLabel>

            {values.map((v, i) => (
              <div key={v.name} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: '24px',
                padding: '24px 0',
                borderTop: i === 0 ? '0.5px solid var(--border-faint)' : undefined,
                borderBottom: '0.5px solid var(--border-faint)',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 300, color: 'var(--gold)', paddingTop: '4px' }}>
                  {v.name}
                </span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, paddingTop: '4px' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)', textAlign: 'center', background: 'var(--surface)', borderTop: '0.5px solid var(--border-faint)' }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05, color: 'var(--text)', marginBottom: '20px' }}>
              Ready to work with PTA?
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 300, color: 'var(--text2)', maxWidth: '420px', margin: '0 auto 32px', lineHeight: 1.85 }}>
              Start with a free compliance check. No obligation. We tell you exactly where you stand.
            </p>
            <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  )
}
