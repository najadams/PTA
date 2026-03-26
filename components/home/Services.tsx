import Link from 'next/link'
import { FileText, ShieldCheck, Building2, RefreshCw, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionLabel from '@/components/shared/SectionLabel'
import { SERVICES } from '@/lib/constants'

const icons = [FileText, ShieldCheck, Building2, RefreshCw]

export default function Services() {
  return (
    <section className="py-28 bg-[var(--color-base)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel className="mb-4 block">What We Do</SectionLabel>
          <h2
            className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] leading-[1.1]"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            End-to-End TTA Advisory Services
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            From initial drafting through GIPC registration, we handle every stage of your
            Technology Transfer Agreement with expert precision.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = icons[i]
            return (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <Link
                  href={`/services#${service.id}`}
                  className="group block h-full p-10 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-light)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-[2px] bg-[var(--color-gold-surface)] border border-[var(--color-border)]">
                      <Icon size={20} className="text-[var(--color-text-gold)]" />
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-gold)] group-hover:translate-x-1 transition-all duration-200 mt-1"
                    />
                  </div>
                  <h3
                    className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] mb-3 leading-[1.2]"
                    style={{ fontSize: '28px' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
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
