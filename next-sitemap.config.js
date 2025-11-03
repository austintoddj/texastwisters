/** @type {import('next-sitemap').IConfig} */
const domainUrl = process.env.NEXT_PUBLIC_DOMAIN_URL

if (!domainUrl) {
  throw new Error(
    'NEXT_PUBLIC_DOMAIN_URL environment variable is required for sitemap generation. Please check your .env.local file.'
  )
}

module.exports = {
  siteUrl: `https://${domainUrl}`,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/opengraph-image.png']
}
