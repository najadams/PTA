const items = [
  'TECHNOLOGY TRANSFER AGREEMENTS',
  'GIPC REGISTRATION & COMPLIANCE',
  'CORPORATE IMMIGRATION',
  'INVESTMENT ADVISORY',
  'EMPLOYMENT LAW',
  'MARKET ENTRY STRATEGY',
  'REGULATORY COMPLIANCE',
  'COMPANY SECRETARIAL',
  'TRADE DEVELOPMENT',
]

export default function Marquee() {
  const track = [...items, ...items]

  return (
    <div
      style={{
        background:   'var(--surface)',
        borderTop:    '0.5px solid var(--border-faint)',
        borderBottom: '0.5px solid var(--border-faint)',
        padding:      '18px 0',
        overflow:     'hidden',
      }}
    >
      <div
        style={{
          display:         'flex',
          gap:             '64px',
          whiteSpace:      'nowrap',
          animation:       'marquee 30s linear infinite',
          alignItems:      'center',
        }}
      >
        {track.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '64px' }}>
            <span
              style={{
                display:        'inline-block',
                width:          '4px',
                height:         '4px',
                background:     'var(--gold-dim)',
                borderRadius:   '50%',
                flexShrink:     0,
              }}
            />
            <span
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '10px',
                fontWeight:    300,
                letterSpacing: '0.22em',
                color:         'var(--muted)',
              }}
            >
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
