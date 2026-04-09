interface Props {
  children:  React.ReactNode
  className?: string
  style?:     React.CSSProperties
}

export default function SectionLabel({ children, className = '', style }: Props) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      style={style}
    >
      <span
        style={{
          width:      '24px',
          height:     '1px',
          background: 'var(--gold)',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily:     'var(--font-body)',
          fontSize:       '10px',
          fontWeight:     300,
          letterSpacing:  '0.25em',
          textTransform:  'uppercase',
          color:          'var(--gold)',
          whiteSpace:     'nowrap',
        }}
      >
        {children}
      </span>
    </div>
  )
}
