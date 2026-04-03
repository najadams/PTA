'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { PTA } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-base)]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <span className="h-px w-12 bg-[var(--color-gold)]" />
              <span className="font-[family-name:var(--font-dm-sans)] text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-gold)]">
                Ghana&apos;s Specialist TTA Advisory
              </span>
              <span className="h-px w-12 bg-[var(--color-gold)] hidden lg:block" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="font-[family-name:var(--font-cormorant)] font-semibold italic text-[var(--color-text-primary)] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
            >
              Get Your TTA Approved by GIPC &mdash;
              <br />
              Without Delays or{' '}
              <span className="text-[var(--color-text-gold)]">Rejection</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              We draft and prepare Technology Transfer Agreements that meet Ghana Investment
              Promotion Centre requirements &mdash; so your registration process moves forward
              without costly setbacks.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button href="/contact" size="lg">Get a Free TTA Compliance Audit</Button>
              <Button href="/contact" variant="secondary" size="lg">Book a 30-minute consultation</Button>
            </motion.div>

            {/* Trust note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="mt-10 text-[var(--color-text-tertiary)] text-xs uppercase tracking-[0.12em]"
            >
              Trusted by foreign investors · Accra, Ghana
            </motion.p>
          </div>

          {/* Right — building image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="relative hidden lg:block h-[600px] rounded-[4px] overflow-hidden"
          >
            <Image
              src="/building.jpg"
              alt="Modern corporate architecture"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, 0vw"
            />
            {/* Left-edge fade into page background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-base)] via-[var(--color-base)]/20 to-transparent pointer-events-none" />
            {/* Subtle dark tint for contrast */}
            <div className="absolute inset-0 bg-[var(--color-base)] opacity-30 pointer-events-none" />
            {/* Gold border accent */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--color-gold)] opacity-50" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--color-gold)] opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
