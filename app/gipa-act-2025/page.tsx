import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'GIPA Act 2025 Ghana — What Foreign Investors Must Know',
  description: 'The GIPA Act 2025 changes TTA registration, minimum capital rules, and expatriate quotas. Find out what your company needs to update — and when.',
}

const faqs = [
  {
    q: 'What is the GIPA Act 2025 and how does it affect foreign companies in Ghana?',
    a: 'The Ghana Investment Promotion Authority Act 2025 (GIPA Act) replaces the GIPC Act 865 as the primary legislation governing foreign investment in Ghana. For companies already operating under GIPC registration, it introduces revised minimum capital thresholds, updated sector conditions, and new Technology Transfer Agreement requirements. Existing registrations will need to be assessed — and in some cases updated — against the new framework.',
  },
  {
    q: 'Do we need to re-register our TTA under the GIPA Act 2025?',
    a: "Not immediately, but an assessment is necessary. Technology Transfer Agreements registered under GIPC Act 865 remain valid until re-registration is formally required. However, the GIPA Act introduces updated TTA content standards — particularly for digital technology and data agreements — and agreements that do not meet the new criteria will need revision before the re-registration window opens.",
  },
  {
    q: 'What happens to our outward remittances during the GIPA transition?',
    a: 'Royalties, management fees, and technical service charges remain processable provided the underlying TTA is currently registered and in good standing with the GIPC. The transition to GIPA does not automatically suspend existing registrations. The risk arises if an agreement lapses, is due for renewal, or fails a content review under the new framework during the transition period.',
  },
  {
    q: 'Has the GIPA Act 2025 changed minimum capital requirements for foreign investors in Ghana?',
    a: 'Yes. The GIPA Act revises the minimum capital thresholds that foreign-owned businesses must meet to operate in Ghana, and adjusts sector-specific conditions in areas including trading, services, and financial activity. The specific figures are confirmed in the implementing regulations. Companies approaching a new investment cycle or entity restructure should verify their capital position against the updated thresholds before proceeding.',
  },
  {
    q: 'Does the GIPA Act 2025 change the expatriate quota rules for foreign companies?',
    a: 'The GIPA Act retains the expatriate quota framework but is expected to revise the ratio requirements and the process for obtaining exemptions in certain sectors. Companies in technical or specialist sectors that currently rely on quota exemptions should monitor the implementing regulations closely. Any changes to quota allowances will affect work permit planning and corporate immigration timelines for the year ahead.',
  },
  {
    q: 'When will the GIPA Act 2025 come into full effect in Ghana?',
    a: "The GIPA Act 2025 has been passed into law. Full operationalisation — including the activation of the new Ghana Investment Promotion Authority and the publication of implementing regulations — is being phased. Some provisions are already in effect; others, including the formal re-registration requirement for existing TTA holders, are subject to transition timelines that the Authority has not yet fully published. Early compliance review is advisable precisely because deadlines are expected to be short.",
  },
  {
    q: 'Should we wait for the GIPA implementing regulations before acting?',
    a: "Waiting for the final implementing regulations before beginning a compliance review is the most common — and most avoidable — mistake foreign companies make in a transition like this. The core content requirements for Technology Transfer Agreements under GIPA are already visible in the Act. Companies that audit their existing TTAs and investment registrations now will be positioned to meet whatever transition deadline the Authority sets, rather than filing in a backlog.",
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function GIPAActPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Nav />
      <main style={{ paddingTop: '76px' }}>

        {/* Hero */}
        <section style={{
          padding:      'clamp(80px, 10vw, 120px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-base)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>GIPA ACT 2025</SectionLabel>
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
              GIPA Act 2025 Ghana —{' '}
              <em style={{ color: 'var(--color-gold-light)' }}>
                What Foreign Investors Must Know
              </em>
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
              The Ghana Investment Promotion Authority Act 2025 is the most significant overhaul
              of Ghana&apos;s foreign investment framework in over a decade. It changes how Technology
              Transfer Agreements are registered, what minimum capital thresholds apply, and how
              expatriate quota rules work — with a re-registration obligation that affects every
              foreign company currently operating in Ghana.
            </p>
            <Link href="/contact" className="btn-primary">Get a Free GIPA Compliance Assessment</Link>
          </AnimatedSection>
        </section>

        {/* Intro context */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
              <div>
                <h2 style={{
                  fontFamily:    'var(--font-display)',
                  fontWeight:    500,
                  fontSize:      'clamp(26px, 3.5vw, 42px)',
                  lineHeight:    1.1,
                  letterSpacing: '-0.01em',
                  color:         'var(--color-text-primary)',
                  marginBottom:  '20px',
                }}>
                  What Changed — and What It Means for Your Ghana Operations
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85, marginBottom: '16px' }}>
                  The GIPC Act 865, which has governed foreign investment in Ghana since 2013, is
                  being replaced by the GIPA Act 2025. The new Act establishes the Ghana Investment
                  Promotion Authority as the successor body to the GIPC, with updated powers,
                  revised registration requirements, and new enforcement mechanisms.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                  For companies with existing TTA registrations, GIPC investor certificates, or
                  expatriate quota approvals issued under the old framework, the transition is not
                  automatic. Each of these requires assessment — and in some cases, active updating
                  — before the formal transition deadline applies.
                </p>
              </div>
              <div>
                {[
                  { label: 'TTA Re-registration', detail: 'Existing TTAs registered under GIPC Act 865 must be assessed against GIPA content requirements. Agreements covering digital technology, data processing, and AI tools face the most significant new scrutiny.' },
                  { label: 'Minimum Capital Revision', detail: 'The GIPA Act revises the minimum capital thresholds for foreign-owned businesses. Companies approaching a new investment cycle should verify their capital position against the updated thresholds.' },
                  { label: 'Expatriate Quota Updates', detail: 'The quota framework is retained but revised. Sector-specific exemptions — particularly for technical roles in telecom, mining, and financial services — are subject to updated rules.' },
                  { label: 'Enforcement Timeline', detail: 'Transition deadlines are being published in phases. Companies that begin their compliance review now will be positioned to meet any deadline without filing in a backlog.' },
                ].map((item, i) => (
                  <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '16px', padding: '20px 0', borderTop: i === 0 ? '1px solid var(--color-border)' : undefined, borderBottom: '1px solid var(--color-border)', alignItems: 'start' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-gold-muted)', paddingTop: '2px' }}>0{i + 1}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '6px' }}>{item.label}</div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-tertiary)', lineHeight: 1.7 }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* FAQ */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-base)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>FREQUENTLY ASKED</SectionLabel>
            <h2 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    500,
              fontSize:      'clamp(28px, 4vw, 48px)',
              lineHeight:    1.1,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '48px',
            }}>
              GIPA Act 2025 — Common Questions from Finance and Compliance Teams
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
              Find Out Where You Stand Before the Deadline Hits
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '540px', margin: '0 auto 32px', lineHeight: 1.85 }}>
              PTA&apos;s free GIPA Compliance Assessment covers your TTA registration status, capital
              position, quota compliance, and transition readiness — in one working day, at no cost.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Get a Free Compliance Assessment</Link>
              <Link href="/tta-registration-ghana" className="btn-outline">TTA Registration Details</Link>
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
