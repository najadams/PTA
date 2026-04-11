import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

export default function HomeCTA() {
  return (
    <section style={{
      position:   'relative',
      padding:    'clamp(80px, 10vw, 120px) clamp(24px, 4vw, 56px)',
      textAlign:  'center',
      borderTop:  '1px solid var(--color-border)',
      overflow:   'hidden',
    }}>
      {/* Accra background */}
      <Image
        src="/accra3.jpg"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
        sizes="100vw"
      />
      {/* Dark overlay — heavier so text is always legible */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(13,15,20,0.88), rgba(13,15,20,0.78))',
        zIndex: 1,
      }} />

      <AnimatedSection style={{ position: 'relative', zIndex: 2 }}>
        <SectionLabel style={{ justifyContent: 'center', marginBottom: '28px' }}>GET STARTED</SectionLabel>

        <h2 style={{
          fontFamily:   'var(--font-display)',
          fontWeight:   300,
          fontSize:     'clamp(28px, 4vw, 56px)',
          lineHeight:   1.05,
          color:        '#F0EDE8',
          marginBottom: '24px',
        }}>
          Find Out Exactly Where Your Ghana{' '}
          <em style={{ fontStyle: 'italic', color: '#E2C47A' }}>
            TTA Compliance Stands
          </em>
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '16px',
          fontWeight: 400,
          color:      '#9A9488',
          maxWidth:   '560px',
          margin:     '0 auto 16px',
          lineHeight: 1.85,
        }}>
          Most foreign companies operating in Ghana do not know whether their Technology
          Transfer Agreements are correctly registered — or whether their current registrations
          will survive the GIPA Act 2025 transition.
        </p>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '13px',
          fontWeight: 400,
          color:      '#5C5850',
          maxWidth:   '480px',
          margin:     '0 auto 40px',
          lineHeight: 1.85,
        }}>
          PTA&apos;s free TTA Compliance Audit covers your registration status, remittance
          protection, and GIPA readiness in one working day. No cost. No obligation.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary">Get a Free TTA Compliance Audit</Link>
          <a
            href="https://wa.me/233555547984"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              justifyContent: 'center',
              background:     'transparent',
              border:         '1px solid rgba(255,255,255,0.25)',
              color:          '#9A9488',
              fontFamily:     'var(--font-body)',
              fontSize:       '12px',
              letterSpacing:  '0.1em',
              fontWeight:     400,
              padding:        '14px 32px',
              borderRadius:   '2px',
              textTransform:  'uppercase',
              transition:     'border-color 0.2s ease, color 0.2s ease',
              whiteSpace:     'nowrap',
            }}
          >
            WhatsApp: +233 555 547 984
          </a>
        </div>
      </AnimatedSection>
    </section>
  )
}
