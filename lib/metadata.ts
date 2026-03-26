import type { Metadata } from 'next'
import { PTA } from './constants'

export const baseMetadata: Metadata = {
  metadataBase: new URL(PTA.domain),
  authors:      [{ name: PTA.founder }],
  creator:      PTA.name,
  publisher:    PTA.name,
  robots:       { index: true, follow: true },
  openGraph: {
    type:   'website',
    locale: 'en_GH',
    siteName: PTA.name,
    images: [
      {
        url:    '/og-image.png',
        width:  1200,
        height: 630,
        alt:    PTA.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}
