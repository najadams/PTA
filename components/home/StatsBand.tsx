import AnimatedSection from '@/components/ui/AnimatedSection'

const stats = [
  { value: 'TTA',  label: "GHANA'S SPECIALIST FIRM FOR TECHNOLOGY TRANSFER" },
  { value: 'GIPC', label: 'FULL REGISTRATION, RENEWAL & COMPLIANCE MANAGEMENT' },
  { value: '2025', label: 'GIPC BILL — CRITICAL COMPLIANCE WINDOW NOW OPEN' },
  { value: '0',    label: 'TOLERANCE FOR REJECTED OR INCOMPLETE SUBMISSIONS' },
]

export default function StatsBand() {
  return (
    <AnimatedSection>
      <div style={{
        display:      'flex',
        background:   'var(--surface)',
        borderTop:    '0.5px solid var(--border)',
        borderBottom: '0.5px solid var(--border)',
        flexWrap:     'wrap',
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            flex:         '1 0 25%',
            padding:      '52px 40px',
            borderRight:  i < stats.length - 1 ? '0.5px solid var(--border-faint)' : 'none',
          }}>
            <div style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '58px',
              fontWeight:    300,
              color:         'var(--gold)',
              lineHeight:    1,
              letterSpacing: '-0.02em',
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '12px',
              fontWeight:    300,
              color:         'var(--muted)',
              letterSpacing: '0.06em',
              marginTop:     '8px',
              lineHeight:    1.5,
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
