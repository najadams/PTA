'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { PTA } from '@/lib/constants'

const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const child: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-base)]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Geometric SVG — compass rose */}
      <div
        className="absolute pointer-events-none"
        style={{ right: '-5%', top: '-10%', width: '65%', opacity: 0.045, zIndex: 0 }}
      >
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </div>

      <div
        className="relative w-full"
        style={{
          paddingLeft:   'clamp(24px, 5.6vw, 56px)',
          paddingRight:  'clamp(24px, 5.6vw, 56px)',
          paddingTop:    'clamp(120px, 14vw, 160px)',
          paddingBottom: 'clamp(80px, 10vw, 128px)',
          zIndex: 2,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.div
              variants={child}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <span className="h-px w-12 bg-[var(--color-gold)]" />
              <span
                className="text-[var(--color-text-gold)]"
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '11px',
                  fontWeight:    500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                {PTA.tagline}
              </span>
              <span className="h-px w-12 bg-[var(--color-gold)] hidden lg:block" />
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={child}
              className="text-[var(--color-text-primary)] leading-[1.05] mb-6"
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(56px, 6.5vw, 88px)',
                fontWeight:    600,
                fontStyle:     'italic',
                letterSpacing: '-0.01em',
              }}
            >
              The Firm{' '}
              <em
                className="block text-[var(--color-gold-light)] whitespace-nowrap"
              >
                Foreign Investors
              </em>
              Trust in Ghana
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={child}
              className="text-[var(--color-text-secondary)] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              style={{ fontSize: '18px', fontWeight: 400 }}
            >
              Protocol &amp; Transfer Advisory (PTA) is Ghana&apos;s full-spectrum investment and
              regulatory advisory firm. From Technology Transfer Agreement registration and GIPC
              compliance to immigration, legal counsel, market research, and trade development —
              we handle every dimension of your Ghana regulatory footprint.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={child}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link href="/contact" className="btn-primary">Free 30-Min Consultation</Link>
              <Link href="/services" className="btn-outline">Explore Our Services</Link>
            </motion.div>

          </motion.div>

          {/* Right — building image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="relative hidden lg:block h-[620px] rounded-[4px] overflow-hidden"
          >
            <Image
              src="/building.jpg"
              alt="Modern corporate architecture in Accra"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, 0vw"
            />
            {/* Left-edge fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-base)] via-[var(--color-base)]/20 to-transparent pointer-events-none" />
            {/* Dark tint */}
            <div className="absolute inset-0 bg-[var(--color-base)] opacity-20 pointer-events-none" />
            {/* Gold corner accents */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--color-gold)] opacity-50" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--color-gold)] opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
