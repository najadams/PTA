import Link from 'next/link'
import { PTA, NAV_LINKS } from '@/lib/constants'
import Divider from '@/components/shared/Divider'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--color-text-primary)] tracking-wider">
                {PTA.shortName}
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-secondary)] mt-0.5">
                {PTA.tagline}
              </p>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Specialist TTA contract and GIPC compliance advisory for foreign investors in Ghana.
            </p>
            <p className="text-[var(--color-text-tertiary)] text-xs">
              Powered by{' '}
              <a
                href={PTA.poweredByUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-gold)] transition-colors"
              >
                {PTA.poweredBy}
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-secondary)] mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-secondary)] mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li>
                <a
                  href={`tel:${PTA.phoneIntl}`}
                  className="hover:text-[var(--color-text-primary)] transition-colors duration-200"
                >
                  {PTA.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PTA.email}`}
                  className="hover:text-[var(--color-text-primary)] transition-colors duration-200"
                >
                  {PTA.email}
                </a>
              </li>
              <li>{PTA.location}</li>
            </ul>
          </div>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-[var(--color-text-tertiary)]">
          <p>
            &copy; {new Date().getFullYear()} {PTA.name}. All rights reserved.
          </p>
          <p>
            Advisory services only. Not legal advice.{' '}
            <Link href="/contact" className="hover:text-[var(--color-text-secondary)] transition-colors">
              Consult a qualified Ghanaian attorney for legal representation.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
