/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN_URL}`),
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/opengraph-image.png']
}
