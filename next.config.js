/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects() {
    return [
      process.env.NEXT_MAINTENANCE_MODE === '1'
        ? {
            source: '/((?!maintenance|_next).*)',
            destination: '/maintenance.html',
            permanent: false
          }
        : null,
      {
        source: '/about',
        destination: '/',
        permanent: true
      },
      {
        source: '/gallery',
        destination: '/',
        permanent: true
      }
    ].filter(Boolean)
  }
}

module.exports = nextConfig
