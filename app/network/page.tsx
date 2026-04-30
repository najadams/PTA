import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { partners } from '@/lib/network'

export const metadata: Metadata = {
  title: 'Our Network | Firmus Advisory & GT Legal Africa | PTA',
  description: 'PTA works with Firmus Advisory and Globetrotters Legal Africa to give clients seamless coverage across every regulatory domain in Ghana.',
}

export default function NetworkPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '76px' }}>
        {/* Hero */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)', borderBottom: '0.5px solid var(--color-border-faint)' }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '20px' }}>OUR NETWORK</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(38px, 5vw, 68px)', lineHeight: 1.05,
              color: 'var(--color-text-primary)', marginBottom: '20px',
            }}>
              Backed by Ghana&apos;s{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Best in Class</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 300, color: 'var(--color-text-secondary)', lineHeight: 1.85, maxWidth: '640px' }}>
              PTA maintains formal working relationships with two of Ghana&apos;s leading
              advisory firms. For every matter beyond our core TTA and GIPC mandate, our
              clients receive seamless introductions to specialists who meet our exacting
              standards.
            </p>
          </AnimatedSection>
        </section>

        {/* Partner cards */}
        <div className="pta-grid-2" style={{ borderTop: '0.5px solid var(--color-border-faint)' }}>
          {partners.map((partner, pi) => (
            <AnimatedSection
              key={partner.name}
              delay={pi * 0.15}
              style={{
                padding:  'clamp(48px, 6vw, 64px) clamp(24px, 4vw, 56px)',
                borderRight: pi === 0 ? '0.5px solid var(--color-border-faint)' : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Badge */}
              <div style={{
                display: 'inline-block', border: '0.5px solid var(--color-border)',
                fontSize: '9px', fontWeight: 300, fontFamily: 'var(--font-body)',
                letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)',
                padding: '5px 12px', marginBottom: '28px',
              }}>
                {partner.badge}
              </div>

              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '36px',
                color: 'var(--color-text-primary)', marginBottom: '6px',
              }}>
                {partner.name}
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 300, color: 'var(--color-text-tertiary)', letterSpacing: '0.04em', marginBottom: '40px' }}>
                {partner.tagline}
              </p>

              {partner.sections.map((section) => (
                <div key={section.label} style={{ marginBottom: '28px' }}>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 300,
                    letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold-muted)',
                    marginBottom: '16px',
                  }}>
                    {section.label}
                  </div>
                  {section.items.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ width: '4px', height: '4px', background: 'var(--color-gold-muted)', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 300, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* Radial glow */}
              <div style={{
                position: 'absolute', bottom: '-60px', right: '-60px',
                width: '200px', height: '200px',
                background: 'radial-gradient(circle, rgba(201,168,76,0.05), transparent 70%)',
                pointerEvents: 'none',
              }} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <section style={{
          background: 'var(--color-surface)', borderTop: '0.5px solid var(--color-border-faint)',
          padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)', textAlign: 'center',
        }}>
          <AnimatedSection>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(24px, 4vw, 48px)', lineHeight: 1.1,
              color: 'var(--color-text-primary)', marginBottom: '20px',
            }}>
              Your entire Ghana regulatory footprint,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>coordinated by PTA</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 300, color: 'var(--color-text-secondary)', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.85 }}>
              When you engage PTA, you engage our full network. We coordinate across
              disciplines so nothing falls through the cracks and you deal with one firm.
            </p>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  )
}
