import { MetadataRoute } from 'next'

const getBaseUrl = () => {
  if (process.env.VERCEL_ENV === 'production') {
    return 'https://texastwistersgym.com'
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
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`
  }
}
