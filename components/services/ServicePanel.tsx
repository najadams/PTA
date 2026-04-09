import type { ServicePanelData } from '@/lib/services'

export default function ServicePanel({ data }: { data: ServicePanelData }) {
  const mid = Math.ceil(data.items.length / 2)
  const col1 = data.items.slice(0, mid)
  const col2 = data.items.slice(mid)

  return (
    <div style={{ padding: '64px 56px' }}>
      {/* Header */}
      <div style={{ borderBottom: '0.5px solid var(--border-faint)', marginBottom: '56px', paddingBottom: '40px' }}>
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 300,
          letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px',
        }}>
          {data.eyebrow}
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, color: 'var(--text)', marginBottom: '16px',
        }}>
          {data.title}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>{data.titleItalic}</em>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 300, color: 'var(--text2)', maxWidth: '560px', lineHeight: 1.85 }}>
          {data.description}
        </p>
      </div>

      {/* Items — two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 48px' }}>
        {[col1, col2].map((col, ci) => (
          <div key={ci}>
            {col.map((item, ii) => {
              const isLast = ii === col.length - 1
              return (
                <div key={item} style={{
                  display: 'flex', gap: '16px', alignItems: 'flex-start',
                  padding: '20px 0',
                  borderBottom: isLast ? 'none' : '0.5px solid var(--border-faint)',
                }}>
                  <span style={{
                    width: '5px', height: '5px', background: 'var(--gold)',
                    borderRadius: 0, flexShrink: 0, marginTop: '8px',
                  }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.7 }}>
                    {item}
                  </span>
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Note box */}
      {data.note && (
        <div style={{
          border: '0.5px solid var(--border)', background: 'var(--gold-glow)',
          padding: '24px 28px', marginTop: '40px',
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>
            {data.note.label}
          </span>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.7 }}>
            {data.note.body}
          </p>
        </div>
      )}
    </div>
  )
}
