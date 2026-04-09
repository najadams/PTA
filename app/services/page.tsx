import type { Metadata } from 'next'
import Image from 'next/image'
import {
  FileText,
  Scale,
  Plane,
  Building2,
  ShieldCheck,
  BarChart2,
  Globe,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionLabel from '@/components/shared/SectionLabel'
import Button from '@/components/shared/Button'
import Divider from '@/components/shared/Divider'

export const metadata: Metadata = {
  title: 'Services | TTA, GIPC, Legal, Immigration & More | PTA Ghana',
  description:
    'Full-spectrum advisory services for foreign investors and businesses in Ghana — TTA & GIPC compliance, legal counsel, corporate immigration, regulatory licensing, market research, and market entry.',
  keywords: [
    'technology transfer agreement Ghana',
    'GIPC compliance Ghana',
    'corporate immigration Ghana',
    'regulatory compliance Ghana',
    'foreign investment advisory Ghana',
  ],
}

const services = [
  {
    id:    'tta-advisory',
    icon:  FileText,
    title: 'TTA & GIPC Advisory',
    badge: 'FLAGSHIP SERVICE',
    who:   'Foreign investors, multinationals, and Ghanaian technology licensors/licensees',
    description:
      "Ghana's GIPC Act 865 requires all technology licensing arrangements between foreign and local entities to be registered as Technology Transfer Agreements. Non-compliance puts your entire remittance structure at risk. This is where PTA began, and where we are unmatched.",
    includes: [
      'Technology Transfer Agreement registration & compliance',
      'TTA drafting, review & structuring',
      'GIPC investor registration (new & renewal)',
      'GIPC compliance audits & gap analysis',
      'Automatic immigrant quota acquisition',
      'Duty exemption applications',
      'GIPC Bill 2025 readiness advisory',
      'Transfer pricing guidance',
      'Royalty & fee structuring advisory',
      'Re-registration & rectification of rejected TTAs',
      'Annual TTA renewal management',
      'Ongoing TTA compliance monitoring',
    ],
    note: 'New obligations under the GIPC Bill 2025 are imminent. Companies that have not reviewed their TTA registration status face significant exposure. Contact us for a free compliance check before the window closes.',
  },
  {
    id:    'legal-services',
    icon:  Scale,
    title: 'Legal Services',
    badge: 'LEGAL ADVISORY',
    who:   'Businesses operating in Ghana requiring legal counsel',
    description:
      'Comprehensive legal counsel for businesses operating in Ghana — from employment and commercial contracts to litigation, conveyancing, and regulatory advisory.',
    includes: [
      'Labour law advisory',
      'Employment contract drafting & review',
      'HR policy drafting',
      'Termination letter drafting & advice',
      'Contract negotiations',
      'SLA, MOU & commercial agreement drafting',
      'Commercial agreement review',
      'Corporate governance advisory',
      'Property due diligence',
      'Conveyancing — leases, tenancies, sale & purchase',
      'Legal opinions',
      'Company due diligence',
      'General legal counsel',
      'Civil & commercial litigation',
      'Regulatory change advisory',
      'Company secretarial services',
    ],
  },
  {
    id:    'corporate-immigration',
    icon:  Plane,
    title: 'Corporate Immigration',
    badge: 'IMMIGRATION',
    who:   'Multinational employers bringing expatriate staff into Ghana',
    description:
      'End-to-end immigration management for multinational employers in Ghana — from work permits and residence to citizenship advisory and annual compliance filings.',
    includes: [
      'Work & residence permit acquisition and renewals',
      'End-of-assignment departure formalities',
      'GIPC automatic quota & replacement',
      'Immigration compliance audits',
      'Specialised sector work authorisations (Rotator Permit)',
      'Entry visas & emergency visas on arrival',
      'Visa extensions & re-entry visas',
      'Citizenship law & dual citizenship advisory',
      'Citizenship by investment',
      'Permanent residency & right of abode',
      'Diaspora engagement advisory',
      'Annual immigration returns filing',
    ],
  },
  {
    id:    'corporate-business',
    icon:  Building2,
    title: 'Corporate & Business Services',
    badge: 'CORPORATE & BUSINESS',
    who:   'Businesses establishing or maintaining a legal presence in Ghana',
    description:
      'Incorporation, secretarial compliance, tax registrations, and corporate transactions — everything required to establish and maintain a legally sound business presence in Ghana.',
    includes: [
      'Business incorporation — all entity structures',
      'Company secretarial services (retainer)',
      'Annual returns filing (Registrar General)',
      'Registration with regulatory bodies',
      'VAT & income tax registrations',
      'Monthly & annual GRA filings',
      'Intellectual property registration',
      'Corporate & commercial transactions',
      'Cross-border transactions & expansions',
      'Pre-investment & acquisition due diligence',
      'Document procurement & legalisation',
      'Translation & certification of official documents',
    ],
  },
  {
    id:    'regulatory-compliance',
    icon:  ShieldCheck,
    title: 'Regulatory Compliance',
    badge: 'REGULATORY COMPLIANCE',
    who:   'Businesses requiring sector-specific licensing and statutory compliance in Ghana',
    description:
      "Sector-specific licensing and statutory compliance across every major regulatory body in Ghana — so your operations remain fully authorised at all times.",
    includes: [
      'Ghana Free Zones Authority registration & exemptions',
      'FDA product registration — food, pharma, cosmetics, medical devices',
      'EPA environmental permit applications',
      'Petroleum Commission registration & licensing',
      'Minerals Commission licensing',
      'Bank of Ghana licensing (fintech, remittance, non-banking)',
      'Gaming Commission licensing',
      'Ghana Standards Authority certification',
      'Collective bargaining agreements',
      'HR & employee outsourcing management',
      'Local content & labour localisation advisory',
      'Tax law & advisory services',
    ],
  },
  {
    id:    'market-research',
    icon:  BarChart2,
    title: 'Market & Social Research',
    badge: 'MARKET INTELLIGENCE',
    who:   'Businesses entering or expanding in Ghana and West Africa',
    description:
      'Evidence-based intelligence for businesses entering or expanding in Ghana and West Africa. We are your eyes on the ground — delivering the insights you need to make confident decisions.',
    includes: [
      'Market & sector insight reports',
      'Customer satisfaction surveys',
      'Brand health tracking & competitive analysis',
      'Data collection & field research',
      'Quantitative & qualitative market research',
      'Participant & event feedback surveys',
      'Feasibility studies',
      'Sector-specific intelligence briefings',
    ],
  },
  {
    id:    'trade-development',
    icon:  Globe,
    title: 'Trade Development & Market Entry',
    badge: 'TRADE & MARKET ENTRY',
    who:   'Companies entering Ghana and West Africa for the first time or scaling their presence',
    description:
      'Strategic market entry support for companies entering Ghana and West Africa — from partner identification and trade missions to feasibility studies and in-market representation.',
    includes: [
      'Export market development',
      'Distributor, agent & importer identification',
      'Business partner search & vetting',
      'Trade mission planning & coordination',
      'Business meeting & company visit organisation',
      'Networking events & business conferences',
      'In-market meeting setup & follow-up',
      'Market plans & feasibility studies',
      'Programme facilitation & evaluation',
      'Strategic briefing reports',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header */}
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
                    Everything You Need
                    <br />to Operate in Ghana
                  </h1>
                  <p className="text-[var(--color-text-secondary)] text-lg max-w-lg">
                    From your first TTA registration to ongoing compliance, immigration, legal
                    counsel, and market intelligence — PTA is your single point of accountability.
                  </p>
                </AnimatedSection>
              </div>

              {/* Contract image */}
              <AnimatedSection delay={0.15} className="hidden lg:block relative min-h-[340px]">
                <div className="absolute inset-0">
                  <Image
                    src="/contract image.jpg"
                    alt="Advisory services — pen on agreement document"
                    fill
                    className="object-cover object-center"
                    sizes="50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-base)] via-[var(--color-base)]/30 to-transparent pointer-events-none" />
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
                        <div className="flex items-center gap-3 mb-1">
                          <h2
                            className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] leading-[1.2]"
                            style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
                          >
                            {service.title}
                          </h2>
                          {service.badge === 'FLAGSHIP SERVICE' && (
                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-text-gold)] border border-[var(--color-gold)]/40 px-2 py-0.5 rounded-[2px] shrink-0">
                              {service.badge}
                            </span>
                          )}
                        </div>
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
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {'note' in service && service.note && (
                      <div className="mt-6 p-4 bg-[var(--color-gold-surface)] border border-[var(--color-border)] rounded-[2px]">
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-gold)] mb-1">
                          GIPC BILL 2025
                        </p>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {service.note}
                        </p>
                      </div>
                    )}
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
