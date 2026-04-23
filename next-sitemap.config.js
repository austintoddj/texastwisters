/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `https://${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/opengraph-image.png'],
  transformRobotsTxt: async (_, robotsTxt) => `${robotsTxt}
Content-Signal: ai-train=no, search=yes, ai-input=no
`
}
