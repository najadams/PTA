'use client'

import Link from 'next/link'
import Image from 'next/image'
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
        <Link
          href="/"
          className="flex items-center gap-3 text-[var(--color-text-primary)] hover:text-[var(--color-gold)] transition-colors duration-200"
        >
          <Image src="/logo.svg" alt="PTA logomark" width={22} height={22} priority />
          <span className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-wider">
            {PTA.shortName}
          </span>
          <span className="hidden sm:block h-4 w-px bg-[var(--color-border)]" />
          <span className="hidden sm:block font-[family-name:var(--font-dm-sans)] text-[12px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
            Advisory
          </span>
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
