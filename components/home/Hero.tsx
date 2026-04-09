'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left lg:pl-10"
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
                Accra, Ghana — Investment &amp; Compliance Advisory
              </span>
              <span className="h-px w-12 bg-[var(--color-gold)] hidden lg:block" />
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={child}
              className="text-[var(--color-text-primary)] leading-[1.05] mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize:   'clamp(44px, 5.5vw, 76px)',
                fontWeight: 300,
              }}
            >
              The Firm{' '}
              <em
                className="block italic text-[var(--color-gold-light)]"
                style={{ paddingLeft: 'clamp(16px, 4vw, 64px)' }}
              >
                Foreign Investors
              </em>
              Trust in Ghana
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={child}
              className="text-[var(--color-text-secondary)] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              style={{ fontSize: '17px', fontWeight: 300 }}
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
