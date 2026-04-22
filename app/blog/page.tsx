import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import BlogCard from '@/components/blog/BlogCard'

export const metadata: Metadata = {
  title: 'Ghana Investment & Compliance Insights | PTA',
  description: 'Practical guidance on TTA registration, GIPC compliance, GIPA Act 2025, and Ghana investment regulations — from Protocol & Transfer Advisory.',
  alternates: { canonical: 'https://ptadvisory.co/blog' },
}

const posts = [
  {
    slug:    'why-tta-registrations-get-rejected-in-ghana',
    title:   'Why TTA Registrations Get Rejected in Ghana — and How to Prevent It',
    excerpt: 'Most TTA registration rejections in Ghana result from specific, identifiable drafting errors — not complex legal disputes. Here are the six failure modes that GIPC reviewers flag most consistently.',
    date:    'April 2026',
    tag:     'TTA Registration',
  },
]

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '76px' }}>

        {/* Header */}
        <section style={{
          padding:      'clamp(80px, 10vw, 120px) clamp(24px, 5.6vw, 56px)',
          background:   'var(--color-base)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <AnimatedSection>
            <SectionLabel style={{ marginBottom: '24px' }}>INSIGHTS</SectionLabel>
            <h1 style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    500,
              fontSize:      'clamp(36px, 5vw, 64px)',
              lineHeight:    1.05,
              letterSpacing: '-0.01em',
              color:         'var(--color-text-primary)',
              marginBottom:  '16px',
            }}>
              Ghana Investment &amp; Compliance Insights
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: '600px' }}>
              Practical guidance on TTA registration, GIPC compliance, GIPA Act 2025, and Ghana&apos;s
              investment regulatory framework — written for finance and compliance professionals.
            </p>
          </AnimatedSection>
        </section>

        {/* Posts */}
        <section style={{
          padding:    'clamp(60px, 8vw, 100px) clamp(24px, 5.6vw, 56px)',
          background: 'var(--color-base)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
            {posts.map((post) => (
              <AnimatedSection key={post.slug}>
                <BlogCard {...post} />
              </AnimatedSection>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
