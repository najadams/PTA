'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { PTA, NAV_LINKS } from '@/lib/constants'
import Button from '@/components/shared/Button'
import { ThemeToggle } from '@/components/shared/ThemeToggle'

export default function Navbar() {
  const pathname  = usePathname()
  const [open,    setOpen]    = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--color-base)]/95 backdrop-blur border-b border-[var(--color-border)]' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="P&amp;T Advisory — home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width={148} height={37} aria-hidden="true">
            <circle cx="40" cy="40" r="30" fill="none" stroke="#C9A84C" strokeWidth="0.8"/>
            <circle cx="40" cy="40" r="21" fill="none" stroke="#C9A84C" strokeWidth="0.4" opacity="0.5"/>
            <circle cx="40" cy="40" r="12" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.35"/>
            <circle cx="40" cy="40" r="2.5" fill="#C9A84C"/>
            <line x1="40" y1="10" x2="40" y2="18" stroke="#C9A84C" strokeWidth="1.2"/>
            <line x1="40" y1="62" x2="40" y2="70" stroke="#C9A84C" strokeWidth="0.6" opacity="0.5"/>
            <line x1="10" y1="40" x2="18" y2="40" stroke="#C9A84C" strokeWidth="0.6" opacity="0.5"/>
            <line x1="62" y1="40" x2="70" y2="40" stroke="#C9A84C" strokeWidth="0.6" opacity="0.5"/>
            <line x1="18.8" y1="18.8" x2="24.1" y2="24.1" stroke="#C9A84C" strokeWidth="0.4" opacity="0.35"/>
            <line x1="55.9" y1="55.9" x2="61.2" y2="61.2" stroke="#C9A84C" strokeWidth="0.4" opacity="0.35"/>
            <line x1="61.2" y1="18.8" x2="55.9" y2="24.1" stroke="#C9A84C" strokeWidth="0.4" opacity="0.35"/>
            <line x1="18.8" y1="61.2" x2="24.1" y2="55.9" stroke="#C9A84C" strokeWidth="0.4" opacity="0.35"/>
            <polygon points="40,13 36.5,33 40,39 43.5,33" fill="#C9A84C"/>
            <polygon points="40,67 36.5,47 40,41 43.5,47" fill="#C9A84C" opacity="0.2"/>
            <line x1="82" y1="16" x2="82" y2="64" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5"/>
            <text x="96" y="36" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="26" fontWeight="300" fill="#EDE8DF" letterSpacing="0.5">P<tspan fill="#C9A84C">&amp;</tspan>T Advisory</text>
            <text x="97" y="55" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="300" fill="#8A6E2F" letterSpacing="3.5">PROTOCOL &amp; TRANSFER</text>
          </svg>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-[family-name:var(--font-dm-sans)] text-[14px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-[var(--color-text-gold)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button href="/contact" size="sm">Get Started</Button>
        </div>

        {/* Mobile: theme toggle + menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-dm-sans)] text-[14px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-[var(--color-text-gold)]'
                  : 'text-[var(--color-text-secondary)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" size="sm" className="self-start mt-2">Get Started</Button>
        </div>
      )}
    </header>
  )
}
