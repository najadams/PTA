import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

export default function HomeCTA() {
  return (
    <section style={{
      padding:    'clamp(80px, 10vw, 120px) clamp(24px, 4vw, 56px)',
      textAlign:  'center',
      background: 'var(--surface)',
      borderTop:  '0.5px solid var(--border-faint)',
    }}>
      <AnimatedSection>
        <SectionLabel style={{ justifyContent: 'center', marginBottom: '28px' }}>GET STARTED</SectionLabel>

        <h2 style={{
          fontFamily:  'var(--font-display)',
          fontWeight:  300,
          fontSize:    'clamp(28px, 4vw, 56px)',
          lineHeight:  1.05,
          color:       'var(--text)',
          marginBottom: '24px',
        }}>
          Start with a Free{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
            30-Minute Compliance Check
          </em>
        </h2>

        <p style={{
          fontFamily:  'var(--font-body)',
          fontSize:    '15px',
          fontWeight:  300,
          color:       'var(--text2)',
          maxWidth:    '480px',
          margin:      '0 auto 16px',
          lineHeight:  1.85,
        }}>
          We review your TTA and GIPC position, identify every gap, and tell you exactly
          what exposure you carry — at no charge, with no obligation to proceed.
        </p>

        <p style={{
          fontFamily:  'var(--font-body)',
          fontSize:    '13px',
          fontWeight:  300,
          color:       'var(--muted)',
          maxWidth:    '440px',
          margin:      '0 auto 40px',
          lineHeight:  1.85,
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
            className="btn-outline"
          >
            WhatsApp: +233 555 547 998
          </a>
        </div>
      </AnimatedSection>
    </section>
  )
}
