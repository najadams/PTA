import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { cormorant, dmSans } from '@/lib/fonts'
import { baseMetadata } from '@/lib/metadata'
import { PTA } from '@/lib/constants'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default:  'Protocol & Transfer Advisory | TTA & GIPC Compliance Ghana',
    template: '%s | Protocol & Transfer Advisory',
  },
  description:
    "PTA helps foreign investors and businesses navigate Ghana's TTA requirements and GIPC compliance. Expert advisory, AI-powered precision. Based in Accra.",
  keywords: [
    'TTA contract Ghana',
    'GIPC compliance Ghana',
    'technology transfer agreement Ghana',
    'foreign investment Ghana',
    'Ghana investment advisory',
    'GIPC Act 865',
    'legal advisory Accra',
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title:       'Protocol & Transfer Advisory | TTA & GIPC Compliance Ghana',
    description: 'Expert TTA and GIPC compliance advisory for foreign investors in Ghana.',
    url:         PTA.domain,
  },
}

const jsonLd = {
  '@context':  'https://schema.org',
  '@type':     'ProfessionalService',
  name:        PTA.name,
  description: 'Specialist TTA contract and GIPC compliance advisory for Ghana',
  founder:     { '@type': 'Person', name: PTA.founder },
  areaServed:  { '@type': 'Country', name: 'Ghana' },
  telephone:   PTA.phoneIntl,
  address:     { '@type': 'PostalAddress', addressCountry: 'GH', addressLocality: 'Accra' },
  serviceType: ['TTA Contract Drafting', 'GIPC Compliance', 'Investment Advisory'],
}

// Runs synchronously before paint — sets data-theme to prevent flash of wrong theme.
// Must stay in sync with the CSS flash-prevention rules at the top of globals.css.
const themeScript = `(function(){try{var s=localStorage.getItem('pta-theme');var t=s==='dark'||s==='light'?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Flash prevention — MUST be first */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
