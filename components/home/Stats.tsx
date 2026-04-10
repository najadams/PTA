import AnimatedSection from '@/components/shared/AnimatedSection'
import Divider from '@/components/shared/Divider'

const stats = [
  {
    value:   '500+',
    label:   'Laws in LexAI Corpus',
    caption: 'Ghana legal database',
  },
  {
    value:   '10',
    label:   'Days Avg. Turnaround',
    caption: 'From intake to delivery',
  },
  {
    value:   '99%',
    label:   'Compliance Accuracy',
    caption: 'GIPC Act 865 alignment',
  },
]

export default function Stats() {
  return (
    <section className="py-20 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div style={{ padding: '0 clamp(24px, 5.6vw, 56px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center py-8 md:px-10">
                <p
                  className="font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-text-gold)] leading-none mb-2"
                  style={{ fontSize: 'clamp(48px, 5.5vw, 68px)' }}
                >
                  {stat.value}
                </p>
                <Divider accent className="mx-auto mb-3" />
                <p className="font-[family-name:var(--font-dm-sans)] font-medium text-[var(--color-text-primary)] uppercase tracking-[0.1em] mb-1" style={{ fontSize: '13px' }}>
                  {stat.label}
                </p>
                <p className="text-[var(--color-text-tertiary)] text-xs">
                  {stat.caption}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
