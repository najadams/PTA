import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionLabel from '@/components/shared/SectionLabel'

const steps = [
  {
    number: '01',
    title:  'Intake & Scope',
    body:   'You share your agreement details, counterparty information, and technology type. We define scope and confirm the GIPC requirements that apply.',
  },
  {
    number: '02',
    title:  'AI-Assisted Drafting',
    body:   'Our LexAI platform generates a compliance-aware first draft aligned with GIPC Act 865, tailored to your specific technology transfer context.',
  },
  {
    number: '03',
    title:  'Compliance Review',
    body:   'Our advisory team reviews every clause against current GIPC requirements, identifies gaps, and prepares the agreement for submission.',
  },
  {
    number: '04',
    title:  'Registration & Delivery',
    body:   'We support your GIPC submission process and deliver the final registered agreement with documentation for your records.',
  },
]

export default function Process() {
  return (
    <section className="py-28 bg-[var(--color-base)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel className="mb-4 block">How It Works</SectionLabel>
          <h2
            className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] leading-[1.1]"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            From Intake to Registration
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto">
            A clear, structured process designed to move your TTA from draft to GIPC approval
            without uncertainty.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="relative p-8 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] h-full">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-[var(--color-text-gold)] opacity-40 block mb-4 leading-none">
                  {step.number}
                </span>
                <h3
                  className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] mb-3 leading-[1.2]"
                  style={{ fontSize: '22px' }}
                >
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
