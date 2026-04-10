import Link from 'next/link'
import {
  FileText,
  Scale,
  Plane,
  Building2,
  ShieldCheck,
  BarChart2,
  Globe,
  ArrowRight,
} from 'lucide-react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionLabel from '@/components/shared/SectionLabel'
import { SERVICES } from '@/lib/constants'

import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  'tta-advisory':          FileText,
  'legal-services':        Scale,
  'corporate-immigration': Plane,
  'corporate-business':    Building2,
  'regulatory-compliance': ShieldCheck,
  'market-research':       BarChart2,
  'trade-development':     Globe,
}

export default function Services() {
  return (
    <section className="py-28 bg-[var(--color-base)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel className="mb-4 block">What We Do</SectionLabel>
          <h2
            className="font-[family-name:var(--font-cormorant)] font-[500] text-[var(--color-text-primary)] leading-[1.1]"
            style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', letterSpacing: '-0.01em' }}
          >
            Full-Spectrum Advisory Services
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            From TTA registration to immigration, legal counsel, regulatory licensing, and
            market intelligence — one firm, complete coverage.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.id]
            return (
              <AnimatedSection key={service.id} delay={i * 0.07}>
                <Link
                  href={`/services#${service.id}`}
                  className="group block h-full p-8 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-light)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-[2px] bg-[var(--color-gold-surface)] border border-[var(--color-border)]">
                      <Icon size={18} className="text-[var(--color-text-gold)]" />
                    </div>
                    <ArrowRight
                      size={15}
                      className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-gold)] group-hover:translate-x-1 transition-all duration-200 mt-1"
                    />
                  </div>
                  <h3
                    className="font-[family-name:var(--font-cormorant)] font-[500] text-[var(--color-text-primary)] mb-2 leading-[1.2]"
                    style={{ fontSize: '26px' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed" style={{ fontSize: '15px' }}>
                    {service.short}
                  </p>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
