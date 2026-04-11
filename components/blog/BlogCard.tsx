'use client'

import Link from 'next/link'

interface BlogCardProps {
  slug:    string
  title:   string
  excerpt: string
  date:    string
  tag:     string
}

export default function BlogCard({ slug, title, excerpt, date, tag }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article
        style={{
          padding:      '40px',
          background:   'var(--color-surface)',
          border:       '1px solid var(--color-border)',
          borderRadius: '4px',
          transition:   'border-color 0.2s ease, transform 0.2s ease',
          cursor:       'pointer',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-light)'
          ;(e.currentTarget as HTMLElement).style.transform  = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
          ;(e.currentTarget as HTMLElement).style.transform  = 'translateY(0)'
        }}
      >
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-text-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
          {tag} · {date}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.2, marginBottom: '16px' }}>
          {title}
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
          {excerpt}
        </p>
        <div style={{ marginTop: '24px', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, color: 'var(--color-text-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Read article →
        </div>
      </article>
    </Link>
  )
}
