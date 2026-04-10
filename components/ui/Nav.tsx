'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { useTheme } from '@/components/shared/ThemeProvider'
import { PTA } from '@/lib/constants'

export default function Nav() {
  const pathname  = usePathname()
  const { theme } = useTheme()
  const isDark    = theme === 'dark'
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header
        style={{
          position:           'fixed',
          top:                0,
          left:               0,
          right:              0,
          height:             '72px',
          zIndex:             500,
          display:            'flex',
          alignItems:         'center',
          padding:            '0 clamp(24px, 4vw, 56px)',
          transition:         'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          background:         scrolled
            ? isDark ? 'rgba(13,15,20,0.92)' : 'rgba(250,248,244,0.92)'
            : 'transparent',
          borderBottom:         scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          backdropFilter:       scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} aria-label="P&amp;T Advisory — home">
          {isDark ? (
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
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width={148} height={37} aria-hidden="true">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#8A6E2F" strokeWidth="0.8"/>
              <circle cx="40" cy="40" r="21" fill="none" stroke="#8A6E2F" strokeWidth="0.4" opacity="0.5"/>
              <circle cx="40" cy="40" r="12" fill="none" stroke="#8A6E2F" strokeWidth="0.3" opacity="0.35"/>
              <circle cx="40" cy="40" r="2.5" fill="#8A6E2F"/>
              <line x1="40" y1="10" x2="40" y2="18" stroke="#8A6E2F" strokeWidth="1.2"/>
              <line x1="40" y1="62" x2="40" y2="70" stroke="#8A6E2F" strokeWidth="0.6" opacity="0.5"/>
              <line x1="10" y1="40" x2="18" y2="40" stroke="#8A6E2F" strokeWidth="0.6" opacity="0.5"/>
              <line x1="62" y1="40" x2="70" y2="40" stroke="#8A6E2F" strokeWidth="0.6" opacity="0.5"/>
              <line x1="18.8" y1="18.8" x2="24.1" y2="24.1" stroke="#8A6E2F" strokeWidth="0.4" opacity="0.35"/>
              <line x1="55.9" y1="55.9" x2="61.2" y2="61.2" stroke="#8A6E2F" strokeWidth="0.4" opacity="0.35"/>
              <line x1="61.2" y1="18.8" x2="55.9" y2="24.1" stroke="#8A6E2F" strokeWidth="0.4" opacity="0.35"/>
              <line x1="18.8" y1="61.2" x2="24.1" y2="55.9" stroke="#8A6E2F" strokeWidth="0.4" opacity="0.35"/>
              <polygon points="40,13 36.5,33 40,39 43.5,33" fill="#8A6E2F"/>
              <polygon points="40,67 36.5,47 40,41 43.5,47" fill="#8A6E2F" opacity="0.2"/>
              <line x1="82" y1="16" x2="82" y2="64" stroke="#8A6E2F" strokeWidth="0.5" opacity="0.5"/>
              <text x="96" y="36" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="26" fontWeight="300" fill="#0A0C10" letterSpacing="0.5">P<tspan fill="#8A6E2F">&amp;</tspan>T Advisory</text>
              <text x="97" y="55" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="300" fill="#8A6E2F" letterSpacing="3.5">PROTOCOL &amp; TRANSFER</text>
            </svg>
          )}
        </Link>

        {/* Center nav */}
        <nav
          className="hidden lg:flex"
          style={{
            position:   'absolute',
            left:       '50%',
            transform:  'translateX(-50%)',
            alignItems: 'center',
            gap:        '40px',
          }}
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '13px',
                  fontWeight:    500,
                  letterSpacing: '0.06em',
                  color:         active ? 'var(--color-text-gold)' : 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  position:       'relative',
                  paddingBottom:  '4px',
                  transition:     'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-primary)'
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)'
                }}
              >
                {link.label}
                {active && (
                  <span style={{
                    position:   'absolute',
                    bottom:     0,
                    left:       0,
                    right:      0,
                    height:     '1px',
                    background: 'var(--color-gold)',
                  }} />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right: theme toggle + CTA */}
        <div className="hidden lg:flex" style={{ marginLeft: 'auto', alignItems: 'center', gap: '20px' }}>
          <ThemeToggle />
          <Link href="/contact" className="btn-outline" style={{ padding: '11px 24px', fontSize: '12px' }}>
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          style={{
            marginLeft: 'auto',
            background: 'none',
            border:     'none',
            color:      'var(--color-text-tertiary)',
            padding:    '4px',
          }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position:       'fixed',
              inset:          0,
              background:     isDark ? 'var(--color-surface)' : 'var(--color-base)',
              zIndex:         600,
              display:        'flex',
              flexDirection:  'column',
              justifyContent: 'center',
              padding:        '0 40px',
            }}
          >
            <button
              style={{
                position:   'absolute',
                top:        '24px',
                right:      '24px',
                background: 'none',
                border:     'none',
                color:      'var(--color-text-tertiary)',
                cursor:     'pointer',
              }}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '28px',
                    fontWeight:    300,
                    color:         pathname === link.href ? 'var(--color-text-gold)' : 'var(--color-text-secondary)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                Free Consultation
              </Link>
              <a
                href="https://wa.me/233555547998"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ textAlign: 'center' }}
              >
                WhatsApp Us
              </a>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
