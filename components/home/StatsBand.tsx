import AnimatedSection from '@/components/ui/AnimatedSection'

const stats = [
  { value: 'TTA',  label: "Ghana's Specialist Firm for Technology Transfer" },
  { value: 'GIPC', label: 'Full Registration, Renewal & Compliance Management' },
  { value: '2025', label: 'GIPC Bill — Critical Compliance Window Now Open' },
  { value: '0',    label: 'Tolerance for Rejected or Incomplete Submissions' },
]

export default function StatsBand() {
  return (
    <AnimatedSection>
      <div className="pta-stats-band">
        {stats.map((s, i) => (
          <div key={i}>
            <div style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '52px',
              fontWeight:    300,
              color:         'var(--color-gold)',
              lineHeight:    1,
              letterSpacing: '-0.02em',
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '12px',
              fontWeight:   400,
              color:        'var(--color-text-tertiary)',
              letterSpacing: '0.04em',
              marginTop:    '10px',
              lineHeight:   1.5,
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
