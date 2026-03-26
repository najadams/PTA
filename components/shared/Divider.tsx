interface DividerProps {
  accent?: boolean
  className?: string
}

export default function Divider({ accent = false, className = '' }: DividerProps) {
  return (
    <hr
      className={`border-0 ${
        accent
          ? 'h-[2px] bg-[var(--color-gold)] w-12'
          : 'h-px bg-[var(--color-border)]'
      } ${className}`}
    />
  )
}
