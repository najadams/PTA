import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionLabel from '@/components/shared/SectionLabel'
import Button from '@/components/shared/Button'
import Divider from '@/components/shared/Divider'
import { PTA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description:
    "Learn about Protocol & Transfer Advisory, founder Najm Adams Lambon, and PTA's mission to bring precision and expertise to Ghana's TTA landscape.",
  keywords: [
    'legal advisory firm Accra Ghana',
    'Ghana investment compliance specialist',
    'GIPC advisory Ghana',
    'Najm Adams Lambon',
  ],
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header */}
        <section className="py-24 bg-[var(--color-base)] border-b border-[var(--color-border)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection>
              <SectionLabel className="mb-4 block">About PTA</SectionLabel>
              <h1
                className="font-[family-name:var(--font-cormorant)] font-semibold italic text-[var(--color-text-primary)] leading-[1.05] mb-4"
                style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
              >
                Precision. Protocol. Transfer.
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
                PTA was founded on a straightforward observation: Ghana&apos;s Technology Transfer
                Agreement requirements are complex, consequential, and chronically underserved.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission — text left, Accra image right */}
        <section className="py-20 bg-[var(--color-base)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <SectionLabel className="mb-4 block">Our Mission</SectionLabel>
                <h2
                  className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] leading-[1.1] mb-6"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}
                >
                  Making Ghana&apos;s Investment Landscape Navigable
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  <p>
                    Foreign investors entering Ghana face a regulatory environment that
                    demands precision. The GIPC Act 865 governs Technology Transfer Agreements
                    with specific requirements that, if unmet, can delay or invalidate your
                    registration.
                  </p>
                  <p>
                    PTA exists to remove that uncertainty. We combine deep knowledge of
                    Ghana&apos;s regulatory framework with the analytical power of LexAI&apos;s
                    AI platform to deliver advisory services that are both expert and efficient.
                  </p>
                  <p>
                    Our advisory services are not legal advice. We provide compliance guidance,
                    document preparation, and regulatory navigation. For legal representation,
                    we always recommend engaging a qualified Ghanaian attorney.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Why Ghana',
                      body:  "Ghana's stable democracy and growing economy make it one of West Africa's most attractive investment destinations. Yet its TTA regulatory framework is often misunderstood by incoming investors.",
                    },
                    {
                      title: 'Why Now',
                      body:  "GIPC enforcement of TTA compliance has intensified. Businesses operating without properly registered agreements face real regulatory risk. The time to comply is before issues arise.",
                    },
                    {
                      title: 'Why TTA',
                      body:  'Technology transfer is at the heart of modern foreign investment. Every licensing agreement, franchise arrangement, and technical services contract potentially triggers TTA obligations under the GIPC Act.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="p-5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)]">
                      <h3
                        className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] mb-1.5"
                        style={{ fontSize: '18px' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Accra image */}
              <AnimatedSection delay={0.15}>
                <div className="relative h-[520px] rounded-[4px] overflow-hidden">
                  <Image
                    src="/accra.jpg"
                    alt="Accra, Ghana — Independence Arch"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-[var(--color-base)] opacity-20" />
                  {/* Gold corner accents */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[var(--color-gold)] opacity-60" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[var(--color-gold)] opacity-60" />
                  {/* Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.15em] text-white/80">
                      Accra, Ghana · Independence Arch
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-20 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <SectionLabel className="mb-8 block">The Founder</SectionLabel>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* CEO photo */}
              <AnimatedSection delay={0.05}>
                <div className="relative">
                  <div className="relative h-[440px] rounded-[4px] overflow-hidden border border-[var(--color-border)]">
                    <Image
                      src="/CEO.jpg"
                      alt={`${PTA.founder} — Founder, Protocol & Transfer Advisory`}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                    {/* Bottom gradient for name overlay */}
                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-5">
                      <p className="font-[family-name:var(--font-cormorant)] font-semibold text-white text-xl leading-tight">
                        {PTA.founder}
                      </p>
                      <p className="font-[family-name:var(--font-dm-sans)] text-[11px] uppercase tracking-[0.12em] text-white/70 mt-0.5">
                        Founder & Principal Advisor
                      </p>
                    </div>
                  </div>
                  {/* Gold accent line below photo */}
                  <div className="mt-4 h-px bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-gold-muted)] to-transparent" />
                </div>
              </AnimatedSection>

              {/* Bio — spans 2 cols */}
              <AnimatedSection delay={0.1} className="lg:col-span-2">
                <h2
                  className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] leading-[1.1] mb-6"
                  style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}
                >
                  {PTA.founder}
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  <p>
                    {PTA.founder} founded Protocol & Transfer Advisory to bridge a gap he
                    observed directly: foreign investors and multinationals entering Ghana
                    often lacked specialist guidance on their TTA obligations, resulting in
                    compliance risks that could have been avoided.
                  </p>
                  <p>
                    PTA operates at the intersection of regulatory expertise and practical
                    advisory — drawing on a thorough understanding of Ghana&apos;s investment
                    framework and leveraging LexAI&apos;s AI-powered legal platform to deliver
                    precision at scale.
                  </p>
                  <p>
                    PTA provides advisory services, not legal advice. For legal representation
                    in Ghana, we recommend consulting a qualified Ghanaian attorney.
                  </p>
                </div>

                <Divider className="mb-6" />

                {/* Focus areas */}
                <div className="mb-8">
                  <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-text-secondary)] mb-4">
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'GIPC Act 865 Compliance',
                      'TTA Contract Advisory',
                      'Foreign Investment Guidance',
                      'Regulatory Risk Assessment',
                      'LexAI AI Platform',
                    ].map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-[var(--color-text-secondary)] bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-[2px]"
                      >
                        <span className="h-1 w-2 bg-[var(--color-gold)] shrink-0" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact links */}
                <div className="flex items-center gap-4">
                  <a
                    href={`tel:${PTA.phoneIntl}`}
                    className="font-[family-name:var(--font-dm-sans)] text-[13px] font-medium tracking-[0.06em] text-[var(--color-text-gold)] hover:text-[var(--color-gold-bright)] transition-colors"
                  >
                    {PTA.phone}
                  </a>
                  <span className="text-[var(--color-border-light)]">·</span>
                  <a
                    href={`mailto:${PTA.email}`}
                    className="font-[family-name:var(--font-dm-sans)] text-[13px] font-medium tracking-[0.06em] text-[var(--color-text-gold)] hover:text-[var(--color-gold-bright)] transition-colors"
                  >
                    {PTA.email}
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* LexAI */}
        <section className="py-20 bg-[var(--color-base)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="p-10 md:p-12 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)]">
                <SectionLabel className="mb-4 block">Technology Partner</SectionLabel>
                <h2
                  className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] leading-[1.1] mb-4"
                  style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
                >
                  Powered by {PTA.poweredBy}
                </h2>
                <Divider className="mb-6" />
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                  LexAI is Ghana&apos;s AI legal platform — a specialised system trained on
                  Ghana&apos;s legal corpus, including the GIPC Act 865 and its implementing
                  regulations. PTA integrates LexAI into our advisory workflow to enhance
                  accuracy and efficiency, while our human advisory layer ensures every
                  output is contextually sound and practically actionable.
                </p>
                <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                  LexAI is the technology; PTA is the advisory service. We use the platform
                  to power our work — not to replace the expert judgment our clients depend on.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2
                className="font-[family-name:var(--font-cormorant)] font-semibold italic text-[var(--color-text-primary)] leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
              >
                Work With PTA
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Start with a free consultation to discuss your TTA requirements.
              </p>
              <Button href="/contact" size="lg">Get in Touch</Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
