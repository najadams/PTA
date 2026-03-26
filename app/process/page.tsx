import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionLabel from '@/components/shared/SectionLabel'
import Button from '@/components/shared/Button'
import Divider from '@/components/shared/Divider'

export const metadata: Metadata = {
  title: 'Process',
  description:
    'Learn how PTA works: from free initial consultation through AI-assisted drafting, compliance review, GIPC submission support, and ongoing advisory.',
  keywords: [
    'how to register TTA Ghana',
    'GIPC registration process Ghana',
    'technology transfer agreement process',
  ],
}

const steps = [
  {
    number:   '01',
    title:    'Free Initial Consultation',
    duration: '30 minutes',
    body:
      'We begin with a no-obligation call to understand your technology transfer context: the nature of the technology, the parties involved, the territory, and your timeline. This allows us to scope the engagement accurately and confirm which GIPC requirements apply to your situation.',
    detail: [
      'Technology type and scope assessment',
      'Party structure and jurisdiction review',
      'Applicable GIPC requirements overview',
      'Engagement scope and timeline estimate',
    ],
  },
  {
    number:   '02',
    title:    'Document Intake & Scope Definition',
    duration: '1–2 days',
    body:
      'You provide any existing draft agreements, term sheets, or reference documents. We issue a formal scope document confirming the deliverables, timeline, and any specific compliance requirements unique to your transaction.',
    detail: [
      'Document collection and review',
      'Scope of work confirmation',
      'Compliance requirements identification',
      'Engagement agreement execution',
    ],
  },
  {
    number:   '03',
    title:    'AI-Assisted Drafting via LexAI',
    duration: '2–3 days',
    body:
      'Our LexAI platform generates a compliance-aware draft TTA, drawing from its corpus of Ghana legal materials and GIPC Act 865 requirements. This produces a robust starting point that already incorporates mandatory clauses — saving time and reducing compliance risk.',
    detail: [
      'LexAI-generated compliance-aware first draft',
      'Mandatory GIPC clause incorporation',
      'Technology-specific customisation',
      'Royalty and duration structuring',
    ],
  },
  {
    number:   '04',
    title:    'Human Expert Review',
    duration: '2–3 days',
    body:
      "Our advisory team reviews the AI-generated draft in detail — refining language, confirming regulatory alignment, and applying practical judgment that only comes from experience with Ghana's investment landscape. We identify any risks or ambiguities and resolve them before submission.",
    detail: [
      'Clause-by-clause expert review',
      'Regulatory alignment confirmation',
      'Risk identification and resolution',
      'Client review and revision cycle',
    ],
  },
  {
    number:   '05',
    title:    'GIPC Submission Support',
    duration: '1–2 days',
    body:
      'We prepare your GIPC submission package — organising the required documentation and guiding you through the registration process. While GIPC submission itself requires the parties to engage directly, we ensure you enter that process fully prepared.',
    detail: [
      'Submission package preparation',
      'Documentation checklist review',
      'GIPC process guidance',
      'Pre-submission final compliance check',
    ],
  },
  {
    number:   '06',
    title:    'Delivery & Ongoing Support',
    duration: 'Ongoing',
    body:
      'On completion, you receive your registered TTA and a compliance summary document. For clients on our ongoing retainer, we continue monitoring regulatory developments and advise on any changes that affect your registered agreement.',
    detail: [
      'Final registered agreement delivery',
      'Compliance summary documentation',
      'Ongoing retainer option (quarterly reviews)',
      'Renewal and amendment advisory',
    ],
  },
]

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header — split layout with GIPC towers image */}
        <section className="bg-[var(--color-base)] border-b border-[var(--color-border)] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              {/* Text */}
              <div className="py-24 flex flex-col justify-center">
                <AnimatedSection>
                  <SectionLabel className="mb-4 block">How It Works</SectionLabel>
                  <h1
                    className="font-[family-name:var(--font-cormorant)] font-semibold italic text-[var(--color-text-primary)] leading-[1.05] mb-4"
                    style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
                  >
                    From Consultation
                    <br />to Registration
                  </h1>
                  <p className="text-[var(--color-text-secondary)] text-lg max-w-lg">
                    A clear, six-step process that takes your TTA from initial scoping
                    through to GIPC registration — with no uncertainty at any stage.
                  </p>
                </AnimatedSection>
              </div>

              {/* GIPC towers image */}
              <AnimatedSection delay={0.15} className="hidden lg:block relative min-h-[360px]">
                <div className="absolute inset-0">
                  <Image
                    src="/gipc.jpg"
                    alt="Towering architecture — the path to GIPC registration"
                    fill
                    className="object-cover object-center"
                    sizes="50vw"
                    priority
                  />
                  {/* Left-edge fade into page background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-base)] via-[var(--color-base)]/30 to-transparent pointer-events-none" />
                  {/* Subtle tint */}
                  <div className="absolute inset-0 bg-[var(--color-base)] opacity-20 pointer-events-none" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-[var(--color-base)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-6">
              {steps.map((step, i) => (
                <AnimatedSection key={step.number} delay={i * 0.05}>
                  <article className="p-10 md:p-12 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <div className="flex items-start gap-6 mb-6">
                      <span className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--color-text-gold)] opacity-60 leading-none shrink-0 mt-1">
                        {step.number}
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h2
                            className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] leading-[1.2]"
                            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
                          >
                            {step.title}
                          </h2>
                          <span className="font-[family-name:var(--font-dm-sans)] text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] border border-[var(--color-border)] px-2.5 py-1 rounded-[2px]">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </div>

                    <Divider className="mb-6 ml-16" />

                    <ul className="ml-16 space-y-2">
                      {step.detail.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </AnimatedSection>
              ))}
            </div>
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
                Ready to Begin?
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Step one is a free 30-minute consultation. No commitment required.
              </p>
              <Button href="/contact" size="lg">Book Your Free Consultation</Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
