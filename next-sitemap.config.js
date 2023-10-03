/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: new URL(`https://${process.env.VERCEL_URL}`),
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/opengraph-image.png']
}
