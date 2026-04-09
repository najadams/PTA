import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { cormorant, dmSans, dmMono } from '@/lib/fonts'
import { PTA } from '@/lib/constants'
import CursorEffect from '@/components/ui/CursorEffect'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(PTA.domain),
  title: {
    default:  "Protocol & Transfer Advisory | Ghana's Premier Investment & Compliance Firm",
    template: '%s | Protocol & Transfer Advisory',
  },
  description:
    "PTA guides foreign investors through Ghana's full regulatory landscape — Technology Transfer Agreements, GIPC registration, immigration, legal advisory, and market entry.",
  keywords: [
    'TTA contract Ghana',
    'GIPC compliance Ghana',
    'technology transfer agreement Ghana',
    'foreign investment Ghana',
    'Ghana investment advisory',
    'GIPC Act 865',
    'legal advisory Accra',
    'corporate immigration Ghana',
  ],
  openGraph: {
    type:     'website',
    locale:   'en_GH',
    siteName: PTA.name,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: PTA.name }],
  },
  twitter: { card: 'summary_large_image' },
  robots:  { index: true, follow: true },
  authors: [{ name: PTA.founder }],
}

const jsonLd = {
  '@context':  'https://schema.org',
  '@type':     'ProfessionalService',
  name:        PTA.name,
  description: 'Full-spectrum investment and compliance advisory for foreign investors in Ghana',
  founder:     { '@type': 'Person', name: PTA.founder },
  areaServed:  { '@type': 'Country', name: 'Ghana' },
  telephone:   PTA.phoneIntl,
  address:     { '@type': 'PostalAddress', addressCountry: 'GH', addressLocality: 'Accra' },
  serviceType: ['TTA Advisory', 'GIPC Compliance', 'Corporate Immigration', 'Legal Services'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CursorEffect />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
