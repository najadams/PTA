import type { Metadata } from 'next'
import { Suspense } from 'react'
import Image from 'next/image'
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
        {/* Hero — building image background */}
        <section style={{ position: 'relative', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 4vw, 56px)', borderBottom: '1px solid var(--color-border)', overflow: 'hidden' }}>
          <Image
            src="/building.jpg"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
            priority
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,15,20,0.80)', zIndex: 1 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-end', position: 'relative', zIndex: 2 }}>
            <AnimatedSection>
              <SectionLabel style={{ marginBottom: '20px' }}>OUR SERVICES</SectionLabel>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 300,
                fontSize: 'clamp(38px, 5vw, 68px)', lineHeight: 1.05, color: '#F0EDE8',
              }}>
                Everything You Need to Operate in{' '}
                <em style={{ fontStyle: 'italic', color: '#E2C47A' }}>Ghana</em>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 400, color: '#9A9488', lineHeight: 1.85 }}>
                From your first TTA registration to ongoing compliance, immigration, legal
                counsel, and market intelligence — PTA is your single point of accountability.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Sidebar + panel layout */}
        <Suspense fallback={<div style={{ minHeight: '70vh', background: 'var(--color-base)' }} />}>
          <ServicesContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
