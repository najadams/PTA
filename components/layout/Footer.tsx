import Link from 'next/link'
import { PTA, NAV_LINKS } from '@/lib/constants'
import Divider from '@/components/shared/Divider'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div style={{ padding: '64px clamp(24px, 5.6vw, 56px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <p className="font-[family-name:var(--font-cormorant)] font-semibold text-[var(--color-text-primary)] tracking-wider" style={{ fontSize: '26px' }}>
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
              <li className="pt-1">
                <a
                  href="https://wa.me/233555547984?text=Hi%20%E2%80%94%20I%27d%20like%20to%20discuss%20TTA%20compliance%20support%20for%20my%20company."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-border)] rounded-[2px] text-[var(--color-text-secondary)] hover:border-[var(--color-border-light)] hover:text-[var(--color-text-primary)] transition-colors duration-200 font-[family-name:var(--font-dm-sans)] text-[12px] font-medium uppercase tracking-[0.08em]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="#25D366"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.862a.5.5 0 00.609.61l6.102-1.459A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.954 0-3.784-.538-5.348-1.473l-.383-.228-3.972.95.98-3.88-.25-.398A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Chat with us on WhatsApp
                </a>
              </li>
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
