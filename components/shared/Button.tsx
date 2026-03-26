'use client'

import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?:  ButtonVariant
  size?:     ButtonSize
  href?:     string
  external?: boolean
  onClick?:  () => void
  type?:     'button' | 'submit' | 'reset'
  disabled?: boolean
  children:  React.ReactNode
  className?: string
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-6 py-2.5 text-xs',
  md: 'px-8 py-3.5 text-[13px]',
  lg: 'px-10 py-4 text-[13px]',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-gold)] text-[var(--color-base)] hover:bg-[var(--color-gold-light)] hover:scale-[1.02]',
  secondary:
    'bg-transparent border border-[var(--color-gold)] text-[var(--color-text-gold)] hover:bg-[var(--color-gold-surface)]',
  ghost:
    'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
}

export default function Button({
  variant  = 'primary',
  size     = 'md',
  href,
  external = false,
  onClick,
  type     = 'button',
  disabled = false,
  children,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium tracking-[0.08em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed'

  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
