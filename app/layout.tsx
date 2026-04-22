import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { cormorant, dmSans } from '@/lib/fonts'
import { PTA } from '@/lib/constants'
import CursorEffect from '@/components/ui/CursorEffect'
import RouteLoadingScreen from '@/components/ui/RouteLoadingScreen'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import './globals.css'

// Inline script that runs synchronously before first paint to apply the
// saved theme and prevent a light/dark flash on page load.
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('pta-theme');
    var theme = (t === 'light' || t === 'dark') ? t
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch(e){}
})();
`.trim()

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
    url:      'https://ptadvisory.co',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: PTA.name }],
  },
  twitter: { card: 'summary_large_image' },
  robots:  { index: true, follow: true },
  authors: [{ name: PTA.founder }],
  icons: {
    icon:     '/icon.svg',
    shortcut: '/icon.svg',
    apple:    '/icon.svg',
  },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'Organization'],
  '@id': 'https://ptadvisory.co/#organization',
  name: 'Protocol & Transfer Advisory',
  alternateName: 'PTA',
  url: 'https://ptadvisory.co',
  logo: {
    '@type': 'ImageObject',
    url: 'https://ptadvisory.co/pta-logo-light.svg',
    width: 200,
    height: 60,
  },
  description: 'Full-spectrum investment and compliance advisory for foreign investors in Ghana — TTA registration, GIPC compliance, corporate immigration, and regulatory licensing.',
  founder: { '@type': 'Person', name: 'Najm Adams Lambon', '@id': 'https://ptadvisory.co/#founder' },
  foundingDate: '2025',
  areaServed: { '@type': 'Country', name: 'Ghana' },
  address: { '@type': 'PostalAddress', addressCountry: 'GH', addressLocality: 'Accra', addressRegion: 'Greater Accra' },
  telephone: '+233555547984',
  email: 'contact@ptadvisory.co',
  priceRange: '$$',
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Advisory Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TTA & GIPC Advisory', url: 'https://ptadvisory.co/services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Immigration', url: 'https://ptadvisory.co/services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Regulatory Compliance', url: 'https://ptadvisory.co/services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate & Business Services', url: 'https://ptadvisory.co/services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Market & Social Research', url: 'https://ptadvisory.co/services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trade Development & Market Entry', url: 'https://ptadvisory.co/services' } },
    ],
  },
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://ptadvisory.co/#website',
  url: 'https://ptadvisory.co',
  name: 'Protocol & Transfer Advisory',
  publisher: { '@id': 'https://ptadvisory.co/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://ptadvisory.co/blog?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Flash-free theme init — must run before any paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <RouteLoadingScreen />
          <CursorEffect />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
