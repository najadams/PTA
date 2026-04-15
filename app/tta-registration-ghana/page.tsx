import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'TTA Registration Ghana | Protocol & Transfer Advisory',
  description: 'Register your Technology Transfer Agreement in Ghana without rejection. PTA handles GIPC Act 865 and GIPA Act 2025 compliance end-to-end. Book a free audit.',
}

const requirements = [
  { item: 'Technology description', requirement: 'Specific, technical, and sufficient to assess IP value', failure: 'Generic commercial language' },
  { item: 'Royalty base', requirement: 'Net sales or defined royalty base — not gross turnover', failure: 'Gross turnover royalties' },
  { item: 'Fee justification', requirement: 'Management/technical fees tied to genuine service delivery', failure: 'Inflated fees without service scope' },
  { item: 'Grant-back clause', requirement: 'Non-exclusive only, or removed entirely', failure: 'Exclusive grant-back included' },
  { item: 'IP challenge clause', requirement: 'Ghanaian party retains right to challenge validity', failure: 'Clause waiving challenge rights' },
  { item: 'Sub-licensor restrictions', requirement: 'Compliant with Ghana competition policy', failure: 'Price-fixing or market allocation' },
  { item: 'Agreement term', requirement: 'Within GIPC maximum — typically 5 years, renewable', failure: 'Term exceeds maximum' },
  { item: 'Renewal mechanics', requirement: 'Requires formal re-registration, not automatic', failure: 'Auto-renewal without re-registration' },
  { item: 'Schedules', requirement: 'Technical assistance, training, and sub-licensing attached', failure: 'Schedules missing or incomplete' },
  { item: 'Entity match', requirement: 'Contracting party = GIPC-registered entity', failure: 'Subsidiary / nominee mismatch' },
]

const steps = [
  {
    num: '01',
    title: 'Compliance Intake',
    body: 'You share your existing agreement (or heads of terms if drafting from scratch). We scope the registration requirements against your technology type, royalty structure, and corporate entity configuration.',
  },
  {
    num: '02',
    title: 'AI-Assisted Drafting via LexAI',
    body: 'Our technology partner LexAI generates a compliance-aware first draft, cross-referenced against GIPC Act 865 and the GIPA draft framework. Every clause is benchmarked against current GIPC decision precedents.',
  },
  {
    num: '03',
    title: 'Expert Compliance Review',
    body: 'Our advisory team reviews the draft against the specific registration criteria your agreement will be assessed on. Problematic clauses are flagged, alternatives are prepared, and the agreement is structured for clean submission.',
  },
  {
    num: '04',
    title: 'GIPC Submission and Registration Support',
    body: 'We prepare and submit the registration package to the GIPC, manage correspondence during the review period, and deliver the registered agreement with full documentation.',
  },
]

const faqs = [
  {
    q: 'What is a Technology Transfer Agreement under Ghana law?',
    a: 'A Technology Transfer Agreement (TTA) is a contract through which a foreign party licenses technology — including patents, software, know-how, trademarks, or technical assistance — to a Ghanaian entity. Under the GIPC Act 865 and the incoming GIPA Act 2025, any such arrangement must be registered with the GIPC before the parties can lawfully remit royalties or fees out of Ghana.',
  },
  {
    q: 'Who is required to register a TTA in Ghana?',
    a: 'Any foreign company that licenses technology to a Ghanaian entity — or to a Ghanaian subsidiary of a multinational — is required to register the agreement with the Ghana Investment Promotion Centre. This includes software licences, franchise agreements, technical assistance contracts, and management service agreements where the consideration involves royalties or fees remitted abroad.',
  },
  {
    q: 'How long does TTA registration take in Ghana?',
    a: 'A correctly drafted and complete TTA submission typically takes 10–15 business days to receive GIPC registration. Incomplete submissions, vague technology descriptions, or flagged clauses extend this significantly. Registration delays directly delay your legal right to remit royalties or management fees under that agreement.',
  },
  {
    q: 'What happens if a company operates in Ghana without a registered TTA?',
    a: "Operating without a registered TTA puts every royalty payment, management fee, and technical service charge made under that agreement at legal risk. Banks are required to verify GIPC registration before processing such remittances. In a regulatory audit, non-registration is treated as wilful non-compliance and can attract penalties, back-payment obligations, and reputational exposure with the GIPC.",
  },
  {
    q: 'What does the GIPA Act 2025 change about TTA registration in Ghana?',
    a: 'The GIPA Act 2025 replaces the GIPC Act 865 as the primary investment regulation framework in Ghana. It introduces updated minimum capital thresholds, revised TTA content requirements (particularly for digital and data-related technology), and a new registration authority. Companies with existing TTAs will need to assess whether their agreements meet the new standard.',
  },
  {
    q: 'Does PTA provide legal advice on Technology Transfer Agreements?',
    a: 'PTA provides compliance advisory and document preparation services — not legal advice. We prepare TTA documentation to GIPC registration standards, review agreements for compliance gaps, and manage the registration process. For legal representation, interpretation of contract rights, or dispute resolution, consult a qualified Ghanaian attorney.',
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

export default function TTARegistrationPage() {
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
            <SectionLabel style={{ marginBottom: '24px' }}>TTA REGISTRATION GHANA</SectionLabel>
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
              TTA Registration in Ghana —{' '}
              <em style={{ color: 'var(--color-gold-light)' }}>
                Structured to Protect Your Remittances
              </em>
            </h1>
            <p style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '18px',
              fontWeight:   400,
              color:        'var(--color-text-secondary)',
              lineHeight:   1.75,
              maxWidth:     '700px',
              marginBottom: '40px',
            }}>
              Protocol &amp; Transfer Advisory manages the full TTA registration process in Ghana —
              from drafting to GIPC submission — so your royalties, management fees, and technical
              service charges stay protected.
            </p>
            <Link href="/contact" className="btn-primary">Get a Free TTA Compliance Audit</Link>
          </AnimatedSection>
        </section>

        {/* Opening paragraph */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection style={{ maxWidth: '780px' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '18px',
              fontWeight: 400,
              color:      'var(--color-text-secondary)',
              lineHeight: 1.85,
            }}>
              Every foreign company operating in Ghana under a Technology Transfer Agreement is
              legally required to register that agreement with the GIPC — now also subject to the
              incoming GIPA Act 2025. A rejected or unregistered TTA does not simply delay your
              remittances. It exposes your entire fee structure — royalties, management fees,
              technical service charges — to freezing and potential penalties. PTA handles TTA
              registration in Ghana end-to-end: drafting, compliance review, submission, and
              transition to the new regulatory standard.
            </p>
          </AnimatedSection>
        </section>

        {/* What Ghana Law Requires */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-base)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>REQUIREMENTS</SectionLabel>
            <h2 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    500,
              fontSize:      'clamp(28px, 4vw, 48px)',
              lineHeight:    1.1,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '24px',
            }}>
              What Ghana Law Requires in a Registered TTA
            </h2>
            <p style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '16px',
              color:        'var(--color-text-secondary)',
              lineHeight:   1.85,
              maxWidth:     '760px',
              marginBottom: '40px',
            }}>
              Under the GIPC Act 865 and the incoming GIPA Act 2025, a Technology Transfer
              Agreement submitted for registration must meet specific content requirements. The
              GIPC reviews each agreement for:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: '4px', overflow: 'hidden' }}>
              {[
                { label: 'Technology description', detail: 'Sufficiently specific to the IP, software, process, or know-how being transferred' },
                { label: 'Royalty and fee structure', detail: 'Clearly stated, with foreign exchange implications assessed' },
                { label: 'Duration and renewal terms', detail: 'Compliant with maximum term restrictions under Ghanaian law' },
                { label: 'Sublicensing and exclusivity', detail: 'Reviewed against GIPC guidelines on anti-competitive provisions' },
                { label: 'Dispute resolution', detail: 'Must specify jurisdiction — GIPC prefers Ghanaian arbitration or UNCITRAL' },
              ].map((item) => (
                <div key={item.label} style={{ padding: '28px 32px', background: 'var(--color-surface)' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{item.label}</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-tertiary)', lineHeight: 1.7 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Why registrations fail */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-surface)',
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
              Why TTA Registrations Fail — and Why That&apos;s a Legal Problem for You
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {[
                { title: 'Vague or Generic Technology Description', body: 'An agreement describing the subject matter as "proprietary software" or "technical expertise" does not give the GIPC enough to assess whether a genuine technology transfer is taking place. The GIPC expects specificity: the nature of the technology, the form of transfer, the technical field, and the applicable IP rights.' },
                { title: 'Royalty Structures That Violate GIPC Guidelines', body: 'Royalties calculated on gross turnover — rather than net sales or a defined royalty base — are flagged. So are structures where the royalty rate escalates without a corresponding performance justification, and arrangements that require the Ghanaian party to pay beyond the useful life of the technology.' },
                { title: 'Anti-Competitive Clauses', body: 'Exclusive grant-back clauses, restrictions on the Ghanaian party\'s ability to challenge the licensed IP, price-fixing obligations on sub-licensees, and field-of-use restrictions that effectively lock the Ghanaian entity out of adjacent markets are all flagged during GIPC review.' },
                { title: 'Missing or Incomplete Schedules', body: 'The GIPC expects supporting schedules for technical assistance obligations, training commitments, and sub-licensing arrangements. Agreements submitted without these are returned as incomplete — adding weeks to the registration timeline.' },
              ].map((item) => (
                <AnimatedSection key={item.title}>
                  <div style={{ padding: '32px', background: 'var(--color-surface-raised)', border: '1px solid var(--color-border)', borderRadius: '4px', height: '100%' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '12px', lineHeight: 1.2 }}>{item.title}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-tertiary)', lineHeight: 1.75 }}>{item.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Checklist table */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-base)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>PRE-SUBMISSION CHECKLIST</SectionLabel>
            <h2 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    500,
              fontSize:      'clamp(28px, 4vw, 48px)',
              lineHeight:    1.1,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '12px',
            }}>
              TTA Rejection Checklist — Ghana GIPC Submission Standards
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)', marginBottom: '40px', lineHeight: 1.7 }}>
              Use this before any TTA is submitted for registration in Ghana.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: '14px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    {['Item', 'Requirement', 'Common Failure Mode'].map((h) => (
                      <th key={h} style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--color-text-gold)', fontWeight: 500, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {requirements.map((row, i) => (
                    <tr key={row.item} style={{ borderBottom: '1px solid var(--color-border)', background: i % 2 === 0 ? 'var(--color-surface)' : 'transparent' }}>
                      <td style={{ padding: '14px 16px', color: 'var(--color-text-primary)', fontWeight: 500, whiteSpace: 'nowrap' }}>{row.item}</td>
                      <td style={{ padding: '14px 16px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{row.requirement}</td>
                      <td style={{ padding: '14px 16px', color: 'var(--color-error)', lineHeight: 1.6 }}>{row.failure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </section>

        {/* GIPA Act 2025 */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>GIPA ACT 2025</SectionLabel>
            <h2 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    500,
              fontSize:      'clamp(28px, 4vw, 48px)',
              lineHeight:    1.1,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '24px',
            }}>
              The GIPA Act 2025: What Changes for Your Existing TTA
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '900px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, color: 'var(--color-text-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>What is changing</div>
                {[
                  'Registration authority transitions from GIPC to the newly constituted GIPA',
                  'Minimum capital thresholds and sector-specific conditions are being revised',
                  'TTA content requirements are expected to tighten for digital technology, AI tools, and data processing agreements',
                  'Compliance windows for re-registration are being defined',
                ].map((point) => (
                  <div key={point} style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                    <span style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }}>—</span>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{point}</p>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, color: 'var(--color-text-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>What PTA&apos;s clients are doing now</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                  Auditing existing TTAs against the draft GIPA framework, identifying clauses that will not survive re-registration, and restructuring where necessary — before enforcement begins.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.85, marginTop: '16px' }}>
                  Waiting is a choice. It is not a neutral one.
                </p>
                <Link href="/gipa-act-2025" style={{ display: 'inline-block', marginTop: '24px', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, color: 'var(--color-text-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--color-gold-muted)', paddingBottom: '2px' }}>
                  GIPA Act 2025 — full breakdown →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* How PTA works */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-base)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>OUR PROCESS</SectionLabel>
            <h2 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    500,
              fontSize:      'clamp(28px, 4vw, 48px)',
              lineHeight:    1.1,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '48px',
            }}>
              How PTA Handles Your TTA Registration
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: '4px', overflow: 'hidden' }}>
              {steps.map((step) => (
                <div key={step.num} style={{ padding: '40px 32px', background: 'var(--color-surface)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: 300, color: 'var(--color-text-gold)', opacity: 0.4, display: 'block', lineHeight: 1, marginBottom: '20px' }}>{step.num}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '12px', lineHeight: 1.2 }}>{step.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>{step.body}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-tertiary)', marginTop: '24px', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--color-text-secondary)' }}>Timeline:</strong> Most registrations complete within 10–15 business days for straightforward agreements. Complex multi-party or sector-specific TTAs are scoped individually. Fixed fees — no hourly billing. Government fees passed through at cost.
            </p>
          </AnimatedSection>
        </section>

        {/* FAQ */}
        <section style={{
          padding:      'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-surface)',
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
              Common Questions About TTA Registration in Ghana
            </h2>
            <div style={{ display: 'grid', gap: '0' }}>
              {faqs.map((faq, i) => (
                <div key={faq.q} style={{ padding: '32px 0', borderTop: i === 0 ? '1px solid var(--color-border)' : undefined, borderBottom: '1px solid var(--color-border)' }}>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px', lineHeight: 1.4 }}>{faq.q}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: '820px' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* CTA */}
        <section style={{
          padding:    'clamp(80px, 10vw, 120px) clamp(24px, 5.6vw, 56px)',
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
              Get a Free TTA Compliance Audit
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '560px', margin: '0 auto 16px', lineHeight: 1.85 }}>
              PTA&apos;s free TTA Compliance Audit reviews your current agreement (or planned structure) across
              drafting integrity, registration status, remittance protection, and GIPA transition readiness.
              One working day. No cost.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
              <Link href="/contact" className="btn-primary">Book the Audit</Link>
              <a
                href="https://wa.me/233555547984?text=Hi%20%E2%80%94%20I%27d%20like%20a%20free%20TTA%20compliance%20audit."
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
