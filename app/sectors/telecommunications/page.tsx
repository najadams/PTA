import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'TTA Compliance for Telecoms in Ghana | PTA',
  description: 'Telecoms in Ghana face TTA registration, NCA licensing, and GIPA Act 2025 changes. PTA manages full compliance for country teams — free audit available.',
}

const obligations = [
  {
    label: 'NCA Operator Licensing',
    detail: 'Network facility, service, and application service licences issued and renewed by the National Communications Authority. Equipment connected to the public network requires NCA type approval before deployment.',
  },
  {
    label: 'GIPC / GIPA Investor Registration',
    detail: 'Foreign-owned telecom operations must be registered with the GIPC/GIPA as foreign investors — governing minimum capital obligations, expatriate quota entitlements, and the TTA assessment framework.',
  },
  {
    label: 'TTA Registration — All Upstream Agreements',
    detail: 'Network management service agreements, OSS/BSS software licensing, brand and trademark royalties, technical training agreements, and hardware maintenance contracts with a technology transfer component — each requires individual GIPC registration.',
  },
  {
    label: 'Expatriate Quota Compliance',
    detail: 'The GIPC framework sets limits on the ratio of expatriate to Ghanaian employees, with a formal exemption process for technical roles. Operating outside approved quota limits creates compliance exposure.',
  },
  {
    label: 'GIPA Act 2025 Transition',
    detail: 'Existing TTAs registered under GIPC Act 865 will need to be assessed against the new GIPA standard — particularly for digital technology and data-related agreements that face new content requirements.',
  },
]

const failures = [
  {
    title: 'Paying Technical Service Fees Without a Registered TTA',
    body:  "The single most common and most costly compliance failure in the telecom sector. Regional headquarters charge Ghana entities for network management, platform support, and technical advisory — fees that are commercially standard within the group. Without a registered TTA, banks are not required to process those remittances, and GRA audits routinely challenge the deductibility of unregistered technology fees.",
  },
  {
    title: 'Software Licensing Agreements Not Treated as TTAs',
    body:  "Country teams often assume a software licence from a parent entity is a procurement transaction, not a technology transfer. Under Ghana's GIPC framework, it is both. Billing platform licences, network operations tools, customer management systems, and cybersecurity software licenced from a parent or affiliate are Technology Transfer Agreements and must be registered individually.",
  },
  {
    title: 'Expatriate Quota Overstays',
    body:  'Telecom operations in Ghana consistently request quota exemptions for technical specialists — and the exemption process works. Where it fails is in the renewal. Quota approvals are not indefinite. When an approved expatriate\'s permit lapses and the renewal application is not filed in advance, the individual moves into non-compliance status, which reflects on the company\'s overall GIPC standing.',
  },
  {
    title: 'Registered TTA Terms Not Updated After Commercial Renegotiation',
    body:  'An agreement registered at a 3% royalty rate that is subsequently renegotiated to 4.5% — without a corresponding update to the registered TTA — means every payment above the registered rate is made without legal coverage. This is an extremely common finding in compliance audits of companies that have been operating in Ghana for more than three years.',
  },
  {
    title: 'NCA Renewal Complicated by GIPC Non-Compliance',
    body:  "The NCA and GIPC operate independently, but both assess whether a company is in good regulatory standing in Ghana. GIPC non-compliance does not automatically block NCA renewal — but it creates friction, scrutiny, and in some cases, conditions attached to renewal. Country Directors who treat NCA and GIPC compliance as separate tracks discover this at the worst possible time: licence renewal.",
  },
]

const services = [
  {
    title: 'TTA Portfolio Review and Registration',
    body:  'For telecoms with multiple upstream agreements — software licences, management service agreements, brand royalties, technical service contracts — PTA conducts a full mapping of fee flows between the Ghana entity and parent/affiliate companies, identifies which agreements require TTA registration, and manages the registration process for each.',
  },
  {
    title: 'GIPA Act 2025 Transition Assessment',
    body:  'PTA reviews existing registered TTAs against the draft GIPA framework to identify which agreements will require amendment before re-registration becomes compulsory. For telecom clients, particular attention is paid to digital services agreements and data-related technology transfers.',
  },
  {
    title: 'Expatriate Quota Management',
    body:  'PTA handles the GIPC application process for expatriate quota approval and renewal — including technical exemption applications for specialist roles. For country teams managing recurring permit cycles across multiple expatriate staff, PTA coordinates the timeline to prevent lapses.',
  },
  {
    title: 'New Market Entry Compliance Setup',
    body:  'For telecoms entering Ghana or establishing a new entity structure, PTA coordinates full GIPC investor registration, TTA drafting for all upstream agreements, and expatriate quota applications — structured from the outset rather than corrected after operations begin.',
  },
  {
    title: 'Ongoing Compliance Retainer',
    body:  'For established telecom operations, PTA provides a quarterly compliance retainer covering TTA registration status, quota compliance, GIPA transition monitoring, and annual GIPC reporting obligations. Changes to upstream fee arrangements are captured and registered before they create exposure.',
  },
]

const faqs = [
  {
    q: 'Do technical service agreements between a telecom and its parent company need to be registered as TTAs in Ghana?',
    a: 'Yes. Any agreement through which a foreign parent company provides technology, software, or technical services to a Ghana telecom entity — and receives fees remitted out of Ghana — is a Technology Transfer Agreement under the GIPC Act 865. This includes network management services, OSS/BSS software licences, technical support contracts, and training agreements. Each requires individual GIPC registration before the associated remittances are legally protected.',
  },
  {
    q: 'What happens to our management fee and royalty payments if our TTA is not registered with the GIPC?',
    a: "Without a registered TTA, there is no legal instrument authorising the outward remittance of those fees from Ghana. Ghanaian banks are required to verify TTA registration before processing royalties and management fees abroad. Payments may clear for some time — but they become immediately contestable in a Ghana Revenue Authority audit, and the unregistered fees may be treated as non-deductible, creating a tax liability in addition to the compliance exposure.",
  },
  {
    q: 'How does the GIPA Act 2025 affect our existing TTA registrations as a telecom operator in Ghana?',
    a: 'TTAs currently registered under the GIPC Act 865 remain valid through the transition period. The GIPA Act 2025 introduces updated content requirements — particularly relevant for telecoms given the focus on digital technology and data agreements. Existing TTAs covering OSS/BSS platforms, data processing, and cloud services are likely to face the most significant scrutiny under the new standard.',
  },
  {
    q: 'What is the expatriate quota limit for telecom companies in Ghana, and how are technical exemptions obtained?',
    a: 'The GIPC framework sets a general ratio limit on expatriate employees relative to total headcount, with a formal exemption process for technical and specialist roles. Telecoms regularly obtain exemptions for RF engineers, network architects, and cybersecurity specialists. Exemptions require a formal application to the GIPC, demonstration that the role requires specialist skills, and evidence of a local succession plan. Approvals are time-limited and must be renewed.',
  },
]

export default function TelecomSectorPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '76px' }}>

        {/* Hero */}
        <section style={{
          padding:      'clamp(80px, 10vw, 120px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-base)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>SECTOR · TELECOMMUNICATIONS</SectionLabel>
            <h1 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    600,
              fontStyle:     'italic',
              fontSize:      'clamp(40px, 5.5vw, 72px)',
              lineHeight:    1.05,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '24px',
              maxWidth:      '900px',
            }}>
              TTA Compliance for{' '}
              <em style={{ color: 'var(--color-gold-light)' }}>
                Telecommunications Companies
              </em>{' '}
              Operating in Ghana
            </h1>
            <p style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '18px',
              fontWeight:   400,
              color:        'var(--color-text-secondary)',
              lineHeight:   1.75,
              maxWidth:     '720px',
              marginBottom: '40px',
            }}>
              Telecommunications companies operating in Ghana sit at the intersection of two
              regulatory frameworks that most country teams underestimate. The National Communications
              Authority governs your licence to operate. The GIPC — transitioning to the GIPA framework
              under the GIPA Act 2025 — governs the legal basis on which your parent company can charge
              your Ghana entity for the technology that underpins your entire network. Every technical
              service agreement, software licence, and network management fee paid upstream requires a
              registered Technology Transfer Agreement in Ghana.
            </p>
            <Link href="/contact" className="btn-primary">Get a Free Telecom Compliance Audit</Link>
          </AnimatedSection>
        </section>

        {/* Obligations */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>COMPLIANCE OBLIGATIONS</SectionLabel>
            <h2 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    500,
              fontSize:      'clamp(28px, 4vw, 48px)',
              lineHeight:    1.1,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '48px',
            }}>
              What Telecommunications Companies in Ghana Must Comply With
            </h2>
            <div style={{ display: 'grid', gap: '0', border: '1px solid var(--color-border)', borderRadius: '4px', overflow: 'hidden' }}>
              {obligations.map((item, i) => (
                <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '0', borderBottom: i < obligations.length - 1 ? '1px solid var(--color-border)' : undefined }}>
                  <div style={{ padding: '28px 32px', background: 'var(--color-surface-raised)', borderRight: '1px solid var(--color-border)', fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {item.label}
                  </div>
                  <div style={{ padding: '28px 32px', background: 'var(--color-surface)' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Where companies get caught */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-base)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>COMMON FAILURES</SectionLabel>
            <h2 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    500,
              fontSize:      'clamp(28px, 4vw, 48px)',
              lineHeight:    1.1,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '48px',
            }}>
              Where Telecommunications Companies in Ghana Typically Get Caught
            </h2>
            <div style={{ display: 'grid', gap: '24px' }}>
              {failures.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.07}>
                  <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '24px', padding: '32px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '4px', alignItems: 'start' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 300, color: 'var(--color-text-gold)', opacity: 0.4, lineHeight: 1 }}>0{i + 1}</span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '10px' }}>{item.title}</h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-tertiary)', lineHeight: 1.75 }}>{item.body}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* How PTA serves telecom clients */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>OUR SERVICES</SectionLabel>
            <h2 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    500,
              fontSize:      'clamp(28px, 4vw, 48px)',
              lineHeight:    1.1,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '48px',
            }}>
              How PTA Serves Telecommunications Clients in Ghana
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: '4px', overflow: 'hidden' }}>
              {services.map((svc) => (
                <div key={svc.title} style={{ padding: '32px', background: 'var(--color-surface-raised)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '12px', lineHeight: 1.2 }}>{svc.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>{svc.body}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-tertiary)', marginTop: '20px', lineHeight: 1.7, fontStyle: 'italic' }}>
              Note: NCA licence applications and spectrum advisory may require engagement with a specialist NCA consultant or licensed Ghanaian attorney in addition to PTA&apos;s advisory role. PTA advises on the compliance framework and coordinates with relevant specialists where required.
            </p>
          </AnimatedSection>
        </section>

        {/* FAQ */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-base)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>FAQ</SectionLabel>
            <h2 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    500,
              fontSize:      'clamp(28px, 4vw, 48px)',
              lineHeight:    1.1,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '48px',
            }}>
              Telecom TTA Compliance — Common Questions
            </h2>
            {faqs.map((faq, i) => (
              <div key={faq.q} style={{ padding: '32px 0', borderTop: i === 0 ? '1px solid var(--color-border)' : undefined, borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px', lineHeight: 1.4 }}>{faq.q}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: '820px' }}>{faq.a}</p>
              </div>
            ))}
          </AnimatedSection>
        </section>

        {/* CTA */}
        <section style={{
          padding:   'clamp(80px, 10vw, 120px) clamp(24px, 5.6vw, 56px)',
          background: 'var(--color-gold-surface)',
          borderTop:  '1px solid var(--color-gold-muted)',
          textAlign:  'center',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ justifyContent: 'center', marginBottom: '24px' }}>FREE AUDIT</SectionLabel>
            <h2 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    500,
              fontStyle:     'italic',
              fontSize:      'clamp(28px, 4vw, 52px)',
              lineHeight:    1.1,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '20px',
            }}>
              Start With a Free Telecom Compliance Audit
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.85 }}>
              Before the GIPA Act 2025 transition window closes, know exactly where your Ghana TTA
              portfolio stands. PTA&apos;s free Telecom Compliance Audit covers your TTA registration
              status, upstream fee structures, expatriate quota position, and GIPA transition readiness
              — in one working day, at no cost.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Book the Audit</Link>
              <a
                href="https://wa.me/233555547984?text=Hi%20%E2%80%94%20I%27d%20like%20a%20telecom%20TTA%20compliance%20audit."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp Us
              </a>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-tertiary)', marginTop: '40px', maxWidth: '640px', margin: '40px auto 0', lineHeight: 1.7 }}>
              Protocol &amp; Transfer Advisory provides compliance advisory and document preparation services.
              This page does not constitute legal advice. For legal representation, consult a qualified Ghanaian attorney.
            </p>
          </AnimatedSection>
        </section>

      </main>
      <Footer />
    </>
  )
}
