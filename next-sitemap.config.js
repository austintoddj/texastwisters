/** @type {import('next-sitemap').IConfig} */
console.log('[v0] NEXT_PUBLIC_DOMAIN_URL:', process.env.NEXT_PUBLIC_DOMAIN_URL);

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN_URL 
    ? new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN_URL}`)
    : new URL('https://localhost:3000'),
 generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/opengraph-image.png']
}