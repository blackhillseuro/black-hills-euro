import { MetadataRoute } from 'next'
import { SITE } from '@/lib/siteData'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/services', priority: 0.9 },
    { path: '/bmw-repair', priority: 0.9 },
    { path: '/mercedes-repair', priority: 0.9 },
    { path: '/euro-repair', priority: 0.9 },
    { path: '/service-area', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}
