import type { Metadata } from 'next'
import { Suspense } from 'react'
import Image from 'next/image'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import ServicesContent from '@/components/services/ServicesContent'

const servicesLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'PTA Advisory Services',
  description: 'Full-spectrum investment and compliance advisory services for foreign investors in Ghana',
  url: 'https://ptadvisory.co/services',
  numberOfItems: 6,
  itemListElement: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'TTA & GIPC Advisory', description: "Ghana's premier Technology Transfer Agreement registration, compliance, and renewal service — powered by deep GIPC Act 865 expertise.", provider: { '@id': 'https://ptadvisory.co/#organization' }, areaServed: { '@type': 'Country', name: 'Ghana' } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Corporate Immigration', description: 'End-to-end work permits, residency, citizenship advisory, and annual immigration compliance for multinational employers.', provider: { '@id': 'https://ptadvisory.co/#organization' }, areaServed: { '@type': 'Country', name: 'Ghana' } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Corporate & Business Services', description: 'Incorporation, secretarial compliance, tax registrations, and cross-border corporate transactions.', provider: { '@id': 'https://ptadvisory.co/#organization' }, areaServed: { '@type': 'Country', name: 'Ghana' } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'Regulatory Compliance', description: 'Sector-specific licensing across FDA, EPA, Free Zones, Bank of Ghana, and every major regulatory body in Ghana.', provider: { '@id': 'https://ptadvisory.co/#organization' }, areaServed: { '@type': 'Country', name: 'Ghana' } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'Market & Social Research', description: 'Market intelligence, feasibility studies, brand health tracking, and customer research for Ghana and West Africa.', provider: { '@id': 'https://ptadvisory.co/#organization' }, areaServed: { '@type': 'Country', name: 'Ghana' } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Service', name: 'Trade Development & Market Entry', description: 'Partner search, trade missions, export market development, and in-market strategy for companies entering Ghana and West Africa.', provider: { '@id': 'https://ptadvisory.co/#organization' }, areaServed: { '@type': 'Country', name: 'Ghana' } } },
  ],
}

export const metadata: Metadata = {
  title: 'TTA Registration & Advisory Services | PTA Ghana',
  description: 'From TTA registration to corporate immigration and regulatory licensing — PTA covers every compliance dimension for foreign investors in Ghana.',
  alternates: { canonical: 'https://ptadvisory.co/services' },
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />
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
