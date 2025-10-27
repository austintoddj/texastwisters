/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Keep your setting
  trailingSlash: false, // Keep your setting
  productionBrowserSourceMaps: true // Required for Sentry source maps in production
}

// Wrap with Sentry configuration
const { withSentryConfig } = require('@sentry/nextjs')

module.exports = withSentryConfig(
  nextConfig,
  {
    // Sentry options from your original config
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
    silent: !process.env.CI, // Only print logs in CI (e.g., Vercel builds)
    widenClientFileUpload: true, // Keep for prettier stack traces
    tunnelRoute: '/monitoring', // Keep to circumvent ad-blockers
    disableLogger: true, // Keep to reduce bundle size
    automaticVercelMonitors: true, // Keep for Vercel Cron Monitors
    authToken: process.env.SENTRY_AUTH_TOKEN, // Required for source map upload
    telemetry: false, // Disable Sentry telemetry

    // Disable source map uploads in preview environments
    uploadSourceMaps: !!process.env.SENTRY_RELEASE // Only upload in production (when SENTRY_RELEASE is set)
  },
  {
    // Upload options (only applied when uploadSourceMaps is true)
    include: [
      '.next/static/chunks', // Cover JavaScript chunks
      '.next/static/chunks/app', // Include App Router chunks
      '.next/static/css' // Include CSS if applicable
    ],
    ignore: ['node_modules'], // Minimal ignore list
    urlPrefix: '~/_next/', // Match Vercel's output structure
    hideSourceMaps: true // Let Sentry manage source maps
  }
)
