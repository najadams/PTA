import type { Metadata } from 'next'
import Image from 'next/image'
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

        {/* Page hero */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)', borderBottom: '1px solid var(--color-border)' }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '20px' }}>ABOUT PTA</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(38px, 5vw, 68px)', lineHeight: 1.05,
              color: 'var(--color-text-primary)', marginBottom: '20px',
            }}>
              From TTA Specialist to{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Full-Spectrum Firm</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 400, color: 'var(--color-text-secondary)', lineHeight: 1.85, maxWidth: '600px' }}>
              Protocol & Transfer Advisory began as Ghana&apos;s dedicated specialist in
              Technology Transfer Agreement compliance. The mandate has grown — but the
              standard has not changed.
            </p>
          </AnimatedSection>
        </section>

        {/* Founder section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--color-border)' }}>
          {/* Left — portrait */}
          <div style={{ position: 'relative', minHeight: '480px', overflow: 'hidden' }}>
            <Image
              src="/CEO.jpg"
              alt="Najm Adams Lambon — Founder, Protocol & Transfer Advisory"
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            {/* Subtle right-edge fade into page */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 60%, var(--color-base))',
              pointerEvents: 'none',
            }} />
            {/* Name plate */}
            <div style={{
              position: 'absolute', bottom: '32px', left: '32px',
              background: 'rgba(13,15,20,0.75)', backdropFilter: 'blur(8px)',
              padding: '12px 20px', borderLeft: '2px solid var(--color-gold)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 400, color: '#F0EDE8', letterSpacing: '0.04em' }}>
                Najm Adams Lambon
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', marginTop: '4px' }}>
                Founder &amp; Managing Partner
              </div>
            </div>
          </div>

          {/* Right — founder bio */}
          <AnimatedSection delay={0.15} style={{
            padding: 'clamp(48px, 6vw, 80px) clamp(24px, 4vw, 56px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <SectionLabel style={{ marginBottom: '24px' }}>THE FOUNDER</SectionLabel>
            <blockquote style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(20px, 2.5vw, 32px)', lineHeight: 1.4,
              color: 'var(--color-text-primary)', marginBottom: '28px',
            }}>
              We built PTA on a simple belief:{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>
                foreign investors deserve a firm that treats their compliance as seriously as
                they do.
              </em>
            </blockquote>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 400, color: 'var(--color-text-secondary)', lineHeight: 1.85, marginBottom: '16px' }}>
              Najm Adams Lambon founded Protocol & Transfer Advisory after identifying a persistent gap in Ghana&apos;s advisory landscape: companies entering the market faced fragmented, generalist counsel that routinely missed the precise technical requirements of GIPC compliance.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 400, color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
              PTA was built to fill that gap — with specialist depth, professional accountability, and a partner network that covers every dimension of Ghana&apos;s regulatory environment.
            </p>
          </AnimatedSection>
        </div>

        {/* Story + office image / Values */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--color-border)' }}>
          {/* Left — story with office image */}
          <AnimatedSection style={{
            borderRight: '1px solid var(--color-border)',
            overflow:    'hidden',
          }}>
            {/* Office images — two-image split */}
            <div style={{ height: '280px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px' }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="/office.jpg"
                  alt="PTA advisory office"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, var(--color-base))', pointerEvents: 'none' }} />
              </div>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="/office2.jpg"
                  alt="PTA advisory workspace"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, var(--color-base))', pointerEvents: 'none' }} />
              </div>
            </div>
            <div style={{ padding: 'clamp(36px, 5vw, 56px) clamp(24px, 4vw, 56px)' }}>
              <SectionLabel style={{ marginBottom: '20px' }}>OUR STORY</SectionLabel>
              {[
                'When multinational companies enter Ghana, the regulatory burden is significant — and the consequences of getting it wrong are severe. Technology Transfer Agreements, GIPC registration, immigration quotas, sector licensing — each domain has its own framework, its own deadlines, and its own penalties for non-compliance.',
                'PTA was created to be the single firm that handles all of it. Not a generalist. Not a government-liaison service. A precision advisory firm with deep technical knowledge of Ghana\'s investment regulatory environment and a network of the country\'s leading specialists for every domain beyond our core.',
                'Our partnership structure — with a practising lawyer holding equity — means every legal position we take is backed by professional accountability.',
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 400, color: 'var(--color-text-secondary)', lineHeight: 1.85, marginBottom: '16px' }}>
                  {p}
                </p>
              ))}
              <Link href="/network" className="btn-outline" style={{ marginTop: '8px', display: 'inline-flex' }}>
                Meet Our Network
              </Link>
            </div>
          </AnimatedSection>

          {/* Right — values */}
          <AnimatedSection delay={0.15} style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 4vw, 56px)' }}>
            <SectionLabel style={{ marginBottom: '28px' }}>OUR VALUES</SectionLabel>
            {values.map((v, i) => (
              <div key={v.name} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: '24px',
                padding: '20px 0',
                borderTop:    i === 0 ? '1px solid var(--color-border)' : undefined,
                borderBottom: '1px solid var(--color-border)',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 300, color: 'var(--color-text-gold)', paddingTop: '3px' }}>
                  {v.name}
                </span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 400, color: 'var(--color-text-tertiary)', lineHeight: 1.75, paddingTop: '3px' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>

        {/* Accra photo strip */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden', borderBottom: '1px solid var(--color-border)' }}>
          <Image
            src="/Accra3.jpg"
            alt="Accra cityscape"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(13,15,20,0.72) 0%, rgba(13,15,20,0.35) 50%, rgba(13,15,20,0.72) 100%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* CTA — Accra background */}
        <section style={{ position: 'relative', padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)', textAlign: 'center', overflow: 'hidden' }}>
          <Image
            src="/accra.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,15,20,0.85)', zIndex: 1 }} />
          <AnimatedSection style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05, color: '#F0EDE8', marginBottom: '20px' }}>
              Ready to work with PTA?
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 400, color: '#9A9488', maxWidth: '420px', margin: '0 auto 32px', lineHeight: 1.85 }}>
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
