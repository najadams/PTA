import { Zap, Users, Scale } from 'lucide-react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionLabel from '@/components/shared/SectionLabel'
import { PTA } from '@/lib/constants'

const differentiators = [
  {
    icon:  Zap,
    title: 'AI-Powered Precision',
    body:  `Backed by ${PTA.poweredBy}, Ghana's AI legal platform. We cross-reference every clause against GIPC Act 865 in real time — catching compliance gaps before submission.`,
  },
  {
    icon:  Users,
    title: 'Human Expert Review',
    body:  'Every agreement is reviewed by our advisory team. Technology accelerates the process; human expertise ensures accuracy, nuance, and local regulatory insight.',
  },
  {
    icon:  Scale,
    title: 'Specialist Focus',
    body:  'We do one thing and do it exceptionally: TTA advisory in Ghana. Our depth of knowledge in GIPC requirements is unmatched by generalist consultancies.',
  },
]

export default function WhyPTA() {
  return (
    <section className="py-28 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel className="mb-4 block">Why PTA</SectionLabel>
          <h2
            className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] leading-[1.1]"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            Built for Ghana&apos;s Investment Landscape
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, i) => {
            const Icon = item.icon
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-[2px] bg-[var(--color-gold-surface)] border border-[var(--color-border)] mb-6">
                    <Icon size={20} className="text-[var(--color-text-gold)]" />
                  </div>
                  <h3
                    className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] mb-3 leading-[1.2]"
                    style={{ fontSize: '24px' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
