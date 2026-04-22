import type { MetadataRoute } from 'next'
import { PTA } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = PTA.domain

  return [
    // Core pages
    { url: base,                                                        lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services`,                                          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`,                                           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.9 },
    { url: `${base}/process`,                                           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`,                                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/network`,                                           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // SEO landing pages
    { url: `${base}/tta-registration-ghana`,                            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/gipa-act-2025`,                                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

    // Sector pages
    { url: `${base}/sectors/telecommunications`,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Blog
    { url: `${base}/blog`,                                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/blog/why-tta-registrations-get-rejected-in-ghana`,  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.75 },
  ]
}
