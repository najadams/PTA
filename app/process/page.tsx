import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import ProcessStepRow from '@/components/process/ProcessStep'
import { steps } from '@/lib/process'

export const metadata: Metadata = {
  title: 'How It Works | Free TTA Compliance Check | PTA Ghana',
  description: 'Four steps from free compliance check to ongoing regulatory protection. Fixed fees. No surprises.',
}

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '76px' }}>
        {/* Hero */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)', borderBottom: '0.5px solid var(--border-faint)' }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '20px' }}>HOW IT WORKS</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(38px, 5vw, 68px)', lineHeight: 1.05,
              color: 'var(--text)', marginBottom: '20px',
            }}>
              From First Call to{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Full Compliance</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.85, maxWidth: '520px' }}>
              A clear, accountable process — with no surprises. Here is exactly how we work.
            </p>
          </AnimatedSection>
        </section>

        {/* Steps */}
        <div style={{ borderTop: '0.5px solid var(--border-faint)' }}>
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.08}>
              <ProcessStepRow step={step} key={step.num} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <section style={{
          padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)',
          textAlign: 'center', background: 'var(--surface)',
          borderTop: '0.5px solid var(--border-faint)',
        }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05, color: 'var(--text)', marginBottom: '16px' }}>
              Ready to{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Get Started?</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 300, color: 'var(--text2)', maxWidth: '400px', margin: '0 auto 32px', lineHeight: 1.85 }}>
              Start with step one. The compliance check is free. We will take care of the rest.
            </p>
            <Link href="/contact" className="btn-primary">Book a Free Compliance Check</Link>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  )
}

