'use client'

import Link from 'next/link'
import Image from 'next/image'
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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image src="/logo.svg" alt="PTA logomark" width={20} height={20} priority style={{ flexShrink: 0 }} />
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <span style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '19px',
              fontWeight:    600,
              letterSpacing: '0.08em',
              color:         'var(--color-text-gold)',
              lineHeight:    1,
            }}>
              P&amp;T ADVISORY
            </span>
            <span style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '10px',
              fontWeight:    400,
              letterSpacing: '0.2em',
              color:         'var(--color-text-tertiary)',
              lineHeight:    1,
            }}>
              {PTA.tagline}
            </span>
          </span>
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
