/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  redirects() {
    return [
      {
        source: '/gallery',
        destination: '/',
        permanent: true
      }
    ].filter(Boolean)
  }
}

module.exports = nextConfig
