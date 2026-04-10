import Image from 'next/image'
import AnimatedSection from '@/components/shared/AnimatedSection'
import Button from '@/components/shared/Button'

export default function CTA() {
  return (
    <section className="py-28 bg-[var(--color-base)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-[4px] border border-[var(--color-gold-muted)] overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/caligraph.jpg"
                alt="Precision document drafting"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 1152px, 100vw"
              />
              <div className="absolute inset-0 bg-[var(--color-base)] opacity-[0.88]" />
            </div>

            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--color-gold)] opacity-50 z-10" />
            <span className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[var(--color-gold)] opacity-50 z-10" />
            <span className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[var(--color-gold)] opacity-50 z-10" />
            <span className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--color-gold)] opacity-50 z-10" />

            {/* Content */}
            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2
                className="font-[family-name:var(--font-cormorant)] font-semibold italic text-[var(--color-text-primary)] leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', letterSpacing: '-0.01em' }}
              >
                Ready to Protect Your Investment?
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto mb-8">
                Start with a free 30-minute consultation. We&apos;ll assess your TTA requirements
                and outline the path to GIPC compliance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" size="lg">Book a Free Consultation</Button>
                <Button href="/process" variant="secondary" size="lg">Learn the Process</Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
