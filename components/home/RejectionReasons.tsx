import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionLabel from '@/components/shared/SectionLabel'

const REASONS = [
  'Missing mandatory clauses under the Ghana Investment Promotion Centre Act 865',
  'Incorrect or non-compliant royalty structures',
  'Undefined or insufficiently scoped technology description',
  'Non-compliant agreement duration terms',
  'Improper party identification and signatory structure',
]

export default function RejectionReasons() {
  return (
    <section className="bg-[var(--color-base)] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel>Risk Factors</SectionLabel>
          <h2
            className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] mt-4 mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1 }}
          >
            Why Technology Transfer Agreements Get Rejected
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-2xl mb-12">
            GIPC rejection delays your business. These are the most common reasons &mdash; and why they&apos;re avoidable.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ul className="space-y-4 mb-10">
            {REASONS.map((reason, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[4px]"
              >
                <span
                  className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-[2px] bg-[var(--color-gold-surface)] border border-[var(--color-gold-muted)] font-[family-name:var(--font-dm-sans)] text-[12px] font-semibold text-[var(--color-text-gold)]"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed pt-0.5">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-[family-name:var(--font-dm-sans)] text-[13px] font-medium uppercase tracking-[0.1em] text-[var(--color-text-gold)]">
            We eliminate these risks before submission.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
