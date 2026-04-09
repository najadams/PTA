import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact PTA | Free 30-Min TTA & GIPC Consultation | Accra, Ghana',
  description: 'Book a free 30-minute TTA and GIPC compliance check. WhatsApp: +233 555 547 998.',
}

const contactDetails = [
  { label: 'WHATSAPP', value: '+233 555 547 998', href: 'https://wa.me/233555547998', gold: true },
  { label: 'PHONE',    value: '+233 555 547 998', href: 'tel:+233555547998',           gold: false },
  { label: 'EMAIL',    value: 'najm@protocolandtransfer.com', href: 'mailto:najm@protocolandtransfer.com', gold: true },
  { label: 'LOCATION', value: 'Accra, Ghana',     href: null,                          gold: false },
  { label: 'RESPONSE', value: 'Within 2 business hours', href: null,                   gold: false },
]

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '76px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          minHeight: 'calc(100vh - 76px)',
        }}>
          {/* Left — office image background */}
          <AnimatedSection style={{
            padding:     'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)',
            borderRight: '1px solid var(--color-border)',
            display:     'flex', flexDirection: 'column', justifyContent: 'space-between',
            position:    'relative', overflow: 'hidden',
          }}>
            <Image
              src="/office.jpg"
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,15,20,0.88)', zIndex: 1 }} />
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
              <SectionLabel style={{ marginBottom: '20px' }}>CONTACT US</SectionLabel>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 300,
                fontSize: 'clamp(38px, 5vw, 68px)', lineHeight: 1.05,
                color: 'var(--color-text-primary)', marginBottom: '20px',
              }}>
                Let&apos;s Talk{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Compliance</em>
              </h1>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 300,
                color: 'var(--color-text-secondary)', lineHeight: 1.85, maxWidth: '440px', marginBottom: '56px',
              }}>
                Start with a free 30-minute TTA and GIPC compliance check. We will tell you
                exactly where you stand — no obligation, no charge.
              </p>

              {/* Contact details grid */}
              <div style={{ borderTop: '0.5px solid var(--color-border-faint)' }}>
                {contactDetails.map((d) => (
                  <div key={d.label} style={{
                    display: 'grid', gridTemplateColumns: '120px 1fr',
                    padding: '24px 0', borderBottom: '0.5px solid var(--color-border-faint)',
                    alignItems: 'center',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 300,
                      letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)',
                    }}>
                      {d.label}
                    </span>
                    {d.href ? (
                      <a href={d.href} target={d.href.startsWith('http') ? '_blank' : undefined}
                        rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 300, color: d.gold ? 'var(--color-gold)' : 'var(--color-text-secondary)', wordBreak: 'break-word' }}>
                        {d.value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 300, color: 'var(--color-text-secondary)' }}>
                        {d.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pull quote */}
            <p style={{
              fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 300,
              fontStyle: 'italic', color: '#5C5850', marginTop: '48px',
            }}>
              &ldquo;We get it right the first time.&rdquo;
            </p>
            </div>{/* /zIndex wrapper */}
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={0.15} style={{
            padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)',
            background: 'var(--color-surface)',
          }}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  )
}
