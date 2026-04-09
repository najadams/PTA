import type { Metadata } from 'next'
import { Suspense } from 'react'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import ServicesContent from '@/components/services/ServicesContent'

export const metadata: Metadata = {
  title: 'Services | TTA, GIPC, Legal, Immigration & More | PTA Ghana',
  description: 'Full-spectrum advisory: TTA & GIPC compliance, legal, immigration, incorporation, sector licensing, market research, trade development.',
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '76px' }}>
        {/* Hero */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 56px) 60px', borderBottom: '0.5px solid var(--border-faint)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-end' }}>
            <AnimatedSection>
              <SectionLabel style={{ marginBottom: '20px' }}>OUR SERVICES</SectionLabel>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 300,
                fontSize: 'clamp(38px, 5vw, 68px)', lineHeight: 1.05, color: 'var(--text)',
              }}>
                Everything You Need to Operate in{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Ghana</em>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.85 }}>
                From your first TTA registration to ongoing compliance, immigration, legal
                counsel, and market intelligence — PTA is your single point of accountability.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Sidebar + panel layout */}
        <Suspense fallback={<div style={{ minHeight: '70vh', background: 'var(--bg)' }} />}>
          <ServicesContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
