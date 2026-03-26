import type { MetadataRoute } from 'next'
import { PTA } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = PTA.domain

  return [
    {
      url:              base,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         1,
    },
    {
      url:              `${base}/services`,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         0.9,
    },
    {
      url:              `${base}/process`,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         0.8,
    },
    {
      url:              `${base}/about`,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         0.7,
    },
    {
      url:              `${base}/contact`,
      lastModified:     new Date(),
      changeFrequency:  'yearly',
      priority:         0.8,
    },
  ]
}
