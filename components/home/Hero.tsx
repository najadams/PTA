'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'

const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const child: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section
      style={{
        minHeight:  'calc(100vh - 76px)',
        marginTop:  '76px',
        padding:    '0 56px',
        position:   'relative',
        overflow:   'hidden',
        display:    'flex',
        alignItems: 'center',
      }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: [
          'radial-gradient(ellipse 55% 60% at 75% 45%, rgba(201,168,76,0.07) 0%, transparent 65%)',
          'radial-gradient(ellipse 35% 40% at 5% 90%, rgba(201,168,76,0.04) 0%, transparent 55%)',
          'var(--bg)',
        ].join(', '),
        pointerEvents: 'none',
      }} />

      {/* Vertical rule */}
      <div style={{
        position: 'absolute', left: '56px', top: 0, bottom: 0, width: '0.5px',
        background: 'linear-gradient(180deg, transparent, var(--border) 20%, var(--border) 80%, transparent)',
        pointerEvents: 'none',
      }} />

      {/* Geometric SVG */}
      <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
        position: 'absolute', right: '-5%', top: '-10%', width: '65%', opacity: 0.045, pointerEvents: 'none',
      }}>
        <circle cx="300" cy="300" r="280" stroke="#C9A84C" strokeWidth="0.5"/>
        <circle cx="300" cy="300" r="200" stroke="#C9A84C" strokeWidth="0.5"/>
        <circle cx="300" cy="300" r="120" stroke="#C9A84C" strokeWidth="0.5"/>
        <circle cx="300" cy="300" r="40"  stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="4 8"/>
        <line x1="20"  y1="300" x2="580" y2="300" stroke="#C9A84C" strokeWidth="0.5"/>
        <line x1="300" y1="20"  x2="300" y2="580" stroke="#C9A84C" strokeWidth="0.5"/>
        <line x1="102" y1="102" x2="498" y2="498" stroke="#C9A84C" strokeWidth="0.3"/>
        <line x1="498" y1="102" x2="102" y2="498" stroke="#C9A84C" strokeWidth="0.3"/>
        <circle cx="300" cy="300" r="4" fill="#C9A84C" opacity="0.4"/>
      </svg>

      {/* Content */}
      <motion.div variants={container} initial="hidden" animate="visible"
        style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}
      >
        {/* Eyebrow */}
        <motion.div variants={child} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <span style={{ width: '36px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            ACCRA, GHANA — INVESTMENT & COMPLIANCE ADVISORY
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1 variants={child} style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(54px, 7.5vw, 108px)',
          fontWeight: 300, lineHeight: 0.96, color: 'var(--text)', marginBottom: '32px',
        }}>
          The Firm
          <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--gold-light)', paddingLeft: 'clamp(24px, 5vw, 80px)' }}>
            Foreign Investors
          </em>
          Trust in Ghana
        </motion.h1>

        {/* Body */}
        <motion.p variants={child} style={{
          fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 300,
          color: 'var(--text2)', lineHeight: 1.85, maxWidth: '560px', marginBottom: '36px',
        }}>
          Protocol & Transfer Advisory (PTA) is Ghana&apos;s full-spectrum investment and
          regulatory advisory firm. From Technology Transfer Agreement registration and GIPC
          compliance to immigration, legal counsel, market research, and trade development —
          we handle every dimension of your Ghana regulatory footprint.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={child} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <Link href="/contact" className="btn-primary">Free 30-Min Consultation</Link>
          <Link href="/services" className="btn-outline">Explore Our Services</Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div variants={child} className="hidden lg:block" style={{ paddingTop: '28px', borderTop: '0.5px solid var(--border-faint)' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '9px', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '10px' }}>
            TRUSTED BY CLIENTS ACROSS
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {['Telecom', 'FMCG', 'Banking', 'Mining', 'Technology', 'Logistics'].map((s, i) => (
              <span key={s} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {i > 0 && <span style={{ width: '3px', height: '3px', background: 'var(--gold-dim)', borderRadius: '50%' }} />}
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 300, color: 'var(--text2)' }}>{s}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Metrics panel */}
      <div className="hidden xl:flex" style={{
        position: 'absolute', right: '56px', top: '50%', transform: 'translateY(-50%)',
        borderLeft: '0.5px solid var(--border)', flexDirection: 'column', zIndex: 2,
      }}>
        {[
          { value: 'TTA',  label: 'FLAGSHIP EXPERTISE' },
          { value: '7',    label: 'SERVICE AREAS' },
          { value: '360°', label: 'REGULATORY COVERAGE' },
        ].map((m, i) => (
          <div key={i} style={{ padding: '24px 32px', borderBottom: i < 2 ? '0.5px solid var(--border-faint)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>
              {m.value}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '4px' }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex" style={{
        position: 'absolute', bottom: '40px', right: '56px',
        flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 2,
      }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '9px', fontWeight: 300, letterSpacing: '0.2em', color: 'var(--muted)', writingMode: 'vertical-lr' }}>
          SCROLL
        </span>
        <motion.div
          style={{ width: '1px', height: '56px', background: 'linear-gradient(180deg, var(--gold-dim), transparent)' }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
        />
      </div>
    </section>
  )
}
