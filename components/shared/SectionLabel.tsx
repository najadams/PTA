interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-block font-[family-name:var(--font-dm-sans)] text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--color-text-gold)] ${className}`}
    >
      {children}
    </span>
  )
}
