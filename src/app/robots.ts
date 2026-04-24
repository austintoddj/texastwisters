import { MetadataRoute } from 'next'

const getBaseUrl = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN_URL
  if (process.env.VERCEL_ENV === 'production' && domain) {
    return `https://${domain}`
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl()

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${baseUrl}/sitemap.xml`
  }
}
