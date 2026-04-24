/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `https://${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ['/opengraph-image.png', '/robots.txt']
}
