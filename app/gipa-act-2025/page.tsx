import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'GIPA Transition Ghana — What Foreign Investors Must Know',
  description: 'Ghana is transitioning from the GIPC framework toward the Ghana Investment Promotion Authority framework. Find out what your company should review now.',
  alternates: { canonical: 'https://ptadvisory.co/gipa-act-2025' },
}

const faqs = [
  {
    q: 'What is the GIPA transition and how does it affect foreign companies in Ghana?',
    a: 'Ghana is moving from the GIPC Act 865 framework toward a Ghana Investment Promotion Authority framework. Public GIPC materials indicate Parliament has passed the GIPA Bill, while Parliament records still identify related bill records. Until commencement details and implementing regulations are confirmed, foreign-owned companies should treat this as an active transition period and assess existing GIPC registrations, Technology Transfer Agreements, and expatriate quota positions against the emerging framework.',
  },
  {
    q: 'Do we need to re-register our TTA under the GIPA framework?',
    a: "Not automatically, but an assessment is necessary. Technology Transfer Agreements registered under GIPC Act 865 should be reviewed against the emerging GIPA framework before any formal re-registration window or regulator guidance creates a deadline.",
  },
  {
    q: 'What happens to our outward remittances during the GIPA transition?',
    a: 'Royalties, management fees, and technical service charges remain tied to the status of the underlying TTA. The transition to GIPA does not by itself mean every existing registration has failed. The risk arises if an agreement is unregistered, lapses, requires renewal, or is later assessed against updated content expectations during the transition period.',
  },
  {
    q: 'Will the GIPA framework change minimum capital requirements for foreign investors in Ghana?',
    a: 'The GIPA framework is expected to revise capital and sector conditions for foreign-owned businesses. Companies approaching a new investment cycle, entity restructure, or renewal should verify their capital position against the latest official GIPC/GIPA guidance before proceeding.',
  },
  {
    q: 'Does the GIPA transition change expatriate quota planning for foreign companies?',
    a: 'The quota framework is expected to remain relevant, but transition guidance may affect ratio requirements, exemptions, and renewal planning in certain sectors. Companies in technical or specialist sectors that rely on quota exemptions should review their current approvals before the next work permit cycle.',
  },
  {
    q: 'When will the GIPA framework come into full effect in Ghana?',
    a: "Official public materials should be checked before relying on any single date. GIPC has publicly discussed the passage of the GIPA Bill, while Parliament-facing bill records use different bill labels and statuses. PTA treats this as a live transition and recommends reviewing exposure now, before commencement notices, regulations, or re-registration windows create a compressed timeline.",
  },
  {
    q: 'Should we wait for final GIPA implementing regulations before acting?',
    a: "Waiting for final regulations before beginning a compliance review is risky. Companies can review their current TTA registration status, renewal dates, upstream fee flows, and corporate records now without making unsupported legal assumptions about the final framework.",
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
              Ghana GIPA Transition —{' '}
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
              Ghana&apos;s investment framework is moving from the GIPC Act 865 regime toward the
              Ghana Investment Promotion Authority framework. For foreign-owned companies, the
              practical question is not whether to panic. It is whether your TTA registrations,
              upstream fee flows, quota approvals, and corporate records are ready for the transition.
            </p>
            <Link href="/contact?source=gipa-page&campaign=free-tta-audit" className="btn-primary">Get a Free TTA Compliance Audit</Link>
          </AnimatedSection>
        </section>

        {/* Intro context */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <div className="pta-grid-2" style={{ gap: '60px', alignItems: 'start' }}>
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
                  The GIPC Act 865 has governed foreign investment in Ghana since 2013. Public
                  GIPC materials now point to a Ghana Investment Promotion Authority transition,
                  while Parliament-facing records should still be checked for commencement and
                  implementing details before any hard legal conclusion is made.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                  For companies with existing TTA registrations, GIPC investor certificates, or
                  expatriate quota approvals issued under the current framework, the transition is
                  not a reason to wait. Each position should be assessed so updates can be made
                  before any formal transition deadline creates a backlog.
                </p>
              </div>
              <div>
                {[
                  { label: 'TTA Readiness', detail: 'Existing TTAs registered under GIPC Act 865 should be assessed against emerging GIPA content expectations, especially for digital technology, data processing, software, and AI-related agreements.' },
                  { label: 'Capital Position', detail: 'Foreign-owned businesses approaching a new investment cycle should verify minimum capital assumptions against the latest official GIPC/GIPA guidance.' },
                  { label: 'Quota Planning', detail: 'Sector-specific expatriate quota exemptions, particularly for technical roles in telecom, mining, and financial services, should be checked before the next renewal cycle.' },
                  { label: 'Transition Timing', detail: 'Companies that begin their compliance review now will be positioned to meet any formal deadline without filing in a backlog.' },
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
              GIPA Transition — Common Questions from Finance and Compliance Teams
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
              Find Out Where You Stand Before the Transition Tightens
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '540px', margin: '0 auto 32px', lineHeight: 1.85 }}>
              PTA&apos;s free TTA Compliance Audit covers your TTA registration status, capital
              position, quota compliance, and transition readiness — in one working day, at no cost.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact?source=gipa-page-cta&campaign=free-tta-audit" className="btn-primary">Get a Free TTA Compliance Audit</Link>
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
