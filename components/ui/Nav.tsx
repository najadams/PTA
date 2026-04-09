'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Nav() {
  const pathname  = usePathname()
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
          position:     'fixed',
          top:          0,
          left:         0,
          right:        0,
          height:       '76px',
          zIndex:       500,
          display:      'flex',
          alignItems:   'center',
          padding:      '0 56px',
          transition:   'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          background:   scrolled ? 'rgba(10,12,16,0.88)' : 'transparent',
          borderBottom: scrolled ? '0.5px solid var(--border)' : '0.5px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', gap: '2px', textDecoration: 'none' }}>
          <span style={{
            fontFamily:    'var(--font-display)',
            fontSize:      '17px',
            fontWeight:    500,
            letterSpacing: '0.12em',
            color:         'var(--gold)',
            lineHeight:    1,
          }}>
            PROTOCOL & TRANSFER ADVISORY
          </span>
          <span style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '9px',
            fontWeight:    300,
            letterSpacing: '0.22em',
            color:         'var(--muted)',
            lineHeight:    1,
          }}>
            PRECISION · PROTOCOL · TRANSFER
          </span>
        </Link>

        {/* Center nav — absolutely positioned */}
        <nav
          className="hidden lg:flex"
          style={{
            position:   'absolute',
            left:       '50%',
            transform:  'translateX(-50%)',
            display:    'flex',
            alignItems: 'center',
            gap:        '36px',
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
                  fontSize:      '12px',
                  fontWeight:    300,
                  letterSpacing: '0.1em',
                  color:         active ? 'var(--gold)' : 'var(--muted)',
                  textDecoration: 'none',
                  position:      'relative',
                  paddingBottom: '4px',
                  transition:    'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--text2)'
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--muted)'
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
                    background: 'var(--gold)',
                  }} />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right: phone + CTA */}
        <div className="hidden lg:flex" style={{ marginLeft: 'auto', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 300, color: 'var(--muted)', letterSpacing: '0.05em' }}>
            +233 555 547 998
          </span>
          <Link href="/contact" className="btn-outline" style={{ padding: '10px 22px', fontSize: '11px' }}>
            Free Consultation
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="lg:hidden"
          style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--muted)', padding: '4px' }}
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position:   'fixed',
              inset:      0,
              background: 'var(--bg2)',
              zIndex:     600,
              display:    'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding:    '0 40px',
            }}
          >
            <button
              style={{
                position:   'absolute',
                top:        '24px',
                right:      '24px',
                background: 'none',
                border:     'none',
                color:      'var(--muted)',
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
                    color:         pathname === link.href ? 'var(--gold)' : 'var(--text2)',
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
