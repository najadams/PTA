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
        src="/accra.jpg"
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
          Start with a Free{' '}
          <em style={{ fontStyle: 'italic', color: '#E2C47A' }}>
            30-Minute Compliance Check
          </em>
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '16px',
          fontWeight: 400,
          color:      '#9A9488',
          maxWidth:   '480px',
          margin:     '0 auto 16px',
          lineHeight: 1.85,
        }}>
          We review your TTA and GIPC position, identify every gap, and tell you exactly
          what exposure you carry — at no charge, with no obligation to proceed.
        </p>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '13px',
          fontWeight: 400,
          color:      '#5C5850',
          maxWidth:   '440px',
          margin:     '0 auto 40px',
          lineHeight: 1.85,
        }}>
          Clients have used this call to discover unregistered TTAs, lapsed GIPC renewals,
          and immigration quotas that were never applied for. The call is free. The risk of
          not having it is not.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary">Book Free Consultation</Link>
          <a
            href="https://wa.me/233555547998"
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
            WhatsApp: +233 555 547 998
          </a>
        </div>
      </AnimatedSection>
    </section>
  )
}
