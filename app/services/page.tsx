import type { Metadata } from 'next'
import Image from 'next/image'
import { FileText, ShieldCheck, Building2, RefreshCw } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionLabel from '@/components/shared/SectionLabel'
import Button from '@/components/shared/Button'
import Divider from '@/components/shared/Divider'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore PTA\'s specialist TTA and GIPC compliance advisory services: contract drafting, compliance review, investment structure advisory, and ongoing retainer.',
  keywords: [
    'technology transfer agreement drafting Ghana',
    'GIPC Act 865 compliance',
    'foreign investment Ghana',
    'GIPC registration support',
  ],
}

const services = [
  {
    id:    'tta-drafting',
    icon:  FileText,
    title: 'TTA Contract Drafting',
    who:   'Foreign investors, multinationals, and Ghanaian technology licensors/licensees',
    description:
      'We prepare Technology Transfer Agreements that meet the mandatory requirements of the GIPC Act 865. Every agreement is drafted with precision — specifying duration, royalty structures, technology scope, sublicensing provisions, and confidentiality clauses aligned with Ghanaian regulatory standards.',
    includes: [
      'Full agreement preparation from scope to execution',
      'GIPC Act 865 mandatory clause compliance',
      'Royalty rate structuring guidance',
      'Technology scope and IP definition',
      'Review of counterparty-supplied draft agreements',
    ],
  },
  {
    id:    'gipc-compliance',
    icon:  ShieldCheck,
    title: 'GIPC Compliance Review',
    who:   'Businesses with existing TTAs or contracts requiring GIPC registration',
    description:
      'We cross-reference your existing or proposed agreements against the current GIPC Act 865 requirements in real time, powered by our LexAI platform. Our compliance review identifies gaps, flags non-compliant clauses, and provides clear remediation guidance before you submit to GIPC.',
    includes: [
      'Clause-by-clause compliance analysis',
      'Gap identification and remediation report',
      'Regulatory risk assessment',
      'Pre-submission checklist review',
      'Post-review advisory session',
    ],
  },
  {
    id:    'investment-advisory',
    icon:  Building2,
    title: 'Investment Structure Advisory',
    who:   'Foreign investors entering Ghana for the first time',
    description:
      'We guide foreign investors through the entity structure and registration considerations that affect their TTA obligations. The structure of your Ghana investment — branch office, subsidiary, joint venture — directly impacts your TTA registration requirements. We help you understand those implications before you commit.',
    includes: [
      'Entity structure analysis for TTA implications',
      'GIPC minimum capital requirement guidance',
      'Registration pathway mapping',
      'Coordination with corporate registration process',
      'Introductory briefing on Ghana investment framework',
    ],
  },
  {
    id:    'compliance-retainer',
    icon:  RefreshCw,
    title: 'Ongoing Compliance Retainer',
    who:   'Businesses with active TTAs and ongoing Ghana operations',
    description:
      'Ghana\'s regulatory environment evolves. Our quarterly retainer keeps you current — reviewing your active agreements against any regulatory changes, flagging renewal requirements, and advising on amendments as your technology relationships mature.',
    includes: [
      'Quarterly agreement review',
      'Regulatory change monitoring and alerts',
      'TTA renewal and amendment advisory',
      'Annual compliance health report',
      'Priority response for urgent compliance queries',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header — split layout with contract image */}
        <section className="bg-[var(--color-base)] border-b border-[var(--color-border)] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              {/* Text */}
              <div className="py-24 flex flex-col justify-center">
                <AnimatedSection>
                  <SectionLabel className="mb-4 block">Our Services</SectionLabel>
                  <h1
                    className="font-[family-name:var(--font-cormorant)] font-semibold italic text-[var(--color-text-primary)] leading-[1.05] mb-4"
                    style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
                  >
                    Specialist TTA Advisory,
                    <br />End to End
                  </h1>
                  <p className="text-[var(--color-text-secondary)] text-lg max-w-lg">
                    Every service PTA offers is designed around one outcome: your Technology
                    Transfer Agreement reaching GIPC registration with full compliance confidence.
                  </p>
                </AnimatedSection>
              </div>

              {/* Contract image */}
              <AnimatedSection delay={0.15} className="hidden lg:block relative min-h-[340px]">
                <div className="absolute inset-0">
                  <Image
                    src="/contract image.jpg"
                    alt="TTA contract drafting — pen on agreement document"
                    fill
                    className="object-cover object-center"
                    sizes="50vw"
                    priority
                  />
                  {/* Left-edge fade */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-base)] via-[var(--color-base)]/30 to-transparent pointer-events-none" />
                  {/* Dark tint */}
                  <div className="absolute inset-0 bg-[var(--color-base)] opacity-25 pointer-events-none" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="py-20 bg-[var(--color-base)]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <AnimatedSection key={service.id} delay={i * 0.05}>
                  <article
                    id={service.id}
                    className="p-10 md:p-12 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)]"
                  >
                    <div className="flex items-start gap-5 mb-6">
                      <div className="p-3 rounded-[2px] bg-[var(--color-gold-surface)] border border-[var(--color-border)] shrink-0">
                        <Icon size={20} className="text-[var(--color-text-gold)]" />
                      </div>
                      <div>
                        <h2
                          className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] leading-[1.2] mb-1"
                          style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
                        >
                          {service.title}
                        </h2>
                        <p className="text-[var(--color-text-tertiary)] text-xs uppercase tracking-[0.1em]">
                          For: {service.who}
                        </p>
                      </div>
                    </div>

                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <Divider className="mb-6" />

                    <div>
                      <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-text-secondary)] mb-4">
                        What&apos;s Included
                      </p>
                      <ul className="space-y-2">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </AnimatedSection>
              )
            })}
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
                Not Sure Which Service You Need?
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Start with a free 30-minute consultation. We&apos;ll assess your situation and
                recommend the right approach.
              </p>
              <Button href="/contact" size="lg">Book a Free Consultation</Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
