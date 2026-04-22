import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import ProcessStepRow from '@/components/process/ProcessStep'
import { steps } from '@/lib/process'

const processLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Register a Technology Transfer Agreement in Ghana',
  description: 'Four steps from free TTA compliance check to GIPC registration — managed end-to-end by Protocol & Transfer Advisory.',
  url: 'https://ptadvisory.co/process',
  provider: { '@id': 'https://ptadvisory.co/#organization' },
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Free Compliance Check', text: 'Submit your existing agreement or heads of terms. We assess it against current GIPC and GIPA requirements at no cost.', url: 'https://ptadvisory.co/process#step-1' },
    { '@type': 'HowToStep', position: 2, name: 'AI-Assisted Drafting', text: 'LexAI generates a compliance-aware draft cross-referenced against GIPC Act 865 and the GIPA framework.', url: 'https://ptadvisory.co/process#step-2' },
    { '@type': 'HowToStep', position: 3, name: 'Expert Compliance Review', text: 'Our advisory team reviews every clause against current GIPC registration criteria before submission.', url: 'https://ptadvisory.co/process#step-3' },
    { '@type': 'HowToStep', position: 4, name: 'GIPC Submission & Registration', text: 'We submit and manage correspondence with GIPC, delivering the registered agreement with full documentation.', url: 'https://ptadvisory.co/process#step-4' },
  ],
}

export const metadata: Metadata = {
  title: 'How It Works | Free TTA Compliance Check | PTA Ghana',
  description: 'Four steps from free compliance check to ongoing regulatory protection. Fixed fees. No surprises.',
  alternates: { canonical: 'https://ptadvisory.co/process' },
}

export default function ProcessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(processLd) }} />
      <Nav />
      <main style={{ paddingTop: '76px' }}>
        {/* Hero — contract document background */}
        <section style={{ position: 'relative', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 4vw, 56px)', borderBottom: '1px solid var(--color-border)', overflow: 'hidden' }}>
          <Image
            src="/contract image.jpg"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
            priority
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,15,20,0.82)', zIndex: 1 }} />
          <AnimatedSection style={{ position: 'relative', zIndex: 2 }}>
            <SectionLabel style={{ marginBottom: '20px' }}>HOW IT WORKS</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(38px, 5vw, 68px)', lineHeight: 1.05,
              color: '#F0EDE8', marginBottom: '20px',
            }}>
              From First Call to{' '}
              <em style={{ fontStyle: 'italic', color: '#E2C47A' }}>Full Compliance</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 400, color: '#9A9488', lineHeight: 1.85, maxWidth: '520px' }}>
              A clear, accountable process — with no surprises. Here is exactly how we work.
            </p>
          </AnimatedSection>
        </section>

        {/* Steps */}
        <div style={{ borderTop: '0.5px solid var(--color-border-faint)' }}>
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.08}>
              <ProcessStepRow step={step} key={step.num} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <section style={{
          padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px)',
          textAlign: 'center', background: 'var(--color-surface)',
          borderTop: '0.5px solid var(--color-border-faint)',
        }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05, color: 'var(--color-text-primary)', marginBottom: '16px' }}>
              Ready to{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Get Started?</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 300, color: 'var(--color-text-secondary)', maxWidth: '400px', margin: '0 auto 32px', lineHeight: 1.85 }}>
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

