import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionLabel from '@/components/shared/SectionLabel'
import ContactForm from '@/components/contact/ContactForm'
import { PTA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Protocol & Transfer Advisory. Book a free 30-minute consultation or send us a message about your TTA and GIPC compliance requirements.',
  keywords: [
    'contact TTA advisor Ghana',
    'GIPC consultant Accra',
    'TTA consultation Ghana',
  ],
}

const contactDetails = [
  {
    icon:  Phone,
    label: 'Phone',
    value: PTA.phone,
    href:  `tel:${PTA.phoneIntl}`,
  },
  {
    icon:  Mail,
    label: 'Email',
    value: PTA.email,
    href:  `mailto:${PTA.email}`,
  },
  {
    icon:  MapPin,
    label: 'Location',
    value: PTA.location,
    href:  undefined,
  },
  {
    icon:  Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href:  undefined,
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header */}
        <section className="py-24 bg-[var(--color-base)] border-b border-[var(--color-border)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection>
              <SectionLabel className="mb-4 block">Get in Touch</SectionLabel>
              <h1
                className="font-[family-name:var(--font-cormorant)] font-semibold italic text-[var(--color-text-primary)] leading-[1.05] mb-4"
                style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
              >
                Start Your TTA Journey
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto">
                Book a free 30-minute consultation or send us a message. We respond within
                24 hours.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-[var(--color-base)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Left sidebar — office image + contact details */}
              <AnimatedSection className="lg:col-span-2">
                <div className="space-y-5">

                  {/* Office image */}
                  <div className="relative h-56 rounded-[4px] overflow-hidden border border-[var(--color-border)]">
                    <Image
                      src="/office.jpg"
                      alt="PTA advisory office — Accra, Ghana"
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-[var(--color-base)] opacity-15" />
                    {/* Bottom caption */}
                    <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="font-[family-name:var(--font-dm-sans)] text-[10px] uppercase tracking-[0.15em] text-white/75">
                        Protocol & Transfer Advisory · Accra
                      </p>
                    </div>
                  </div>

                  {/* Heading + description */}
                  <div>
                    <h2
                      className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] leading-[1.1] mb-2"
                      style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
                    >
                      Contact Details
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      We&apos;re based in Accra, Ghana, and serve clients across Ghana and
                      internationally. Reach us directly or use the form.
                    </p>
                  </div>

                  {/* Contact items */}
                  <div className="space-y-3">
                    {contactDetails.map((item) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={item.label}
                          className="flex items-start gap-4 p-4 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)]"
                        >
                          <div className="p-2.5 rounded-[2px] bg-[var(--color-gold-surface)] border border-[var(--color-border)] shrink-0">
                            <Icon size={16} className="text-[var(--color-text-gold)]" />
                          </div>
                          <div>
                            <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-1">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-text-gold)] transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-sm text-[var(--color-text-primary)]">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Free consultation callout */}
                  <div className="p-5 rounded-[4px] bg-[var(--color-gold-surface)] border border-[var(--color-gold-muted)]">
                    <p className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-gold)] text-xl mb-2">
                      Free Consultation
                    </p>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      Not sure where to start? Book a free 30-minute call. We&apos;ll assess
                      your TTA requirements and outline the path forward — no commitment
                      required.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Form */}
              <AnimatedSection delay={0.1} className="lg:col-span-3">
                <div className="p-8 md:p-10 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)]">
                  <h2
                    className="font-[family-name:var(--font-cormorant)] font-medium text-[var(--color-text-primary)] leading-[1.1] mb-6"
                    style={{ fontSize: '28px' }}
                  >
                    Send a Message
                  </h2>
                  <ContactForm />
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
