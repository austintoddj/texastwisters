/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Keep your setting
  trailingSlash: false, // Keep your setting
  productionBrowserSourceMaps: true, // Keep for Sentry source maps

  // Custom Webpack config to ensure source maps for all client-side files
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = 'source-map'; // Generate full source maps
    }
    return config;
  },
};

// Wrap with Sentry configuration
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(nextConfig, {
  // Sentry options from your original config
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  silent: !process.env.CI, // Only print logs in CI
  widenClientFileUpload: true, // Keep for prettier stack traces
  tunnelRoute: '/monitoring', // Keep to circumvent ad-blockers
  disableLogger: true, // Keep to reduce bundle size
  automaticVercelMonitors: true, // Keep for Vercel Cron Monitors
  authToken: process.env.SENTRY_AUTH_TOKEN, // Required for source map upload

  // Add release commits for better source map association
  setCommits: {
    auto: true, // Automatically associate commits with releases
  },
}, {
  // Upload options
  uploadSourceMaps: true, // Ensure source maps are uploaded
  include: [
    '.next/static/chunks', // Cover JavaScript chunks
    '.next/static/chunks/app', // Explicitly include App Router chunks
    '.next/static/css', // Include CSS if applicable
  ],
  ignore: [
    'node_modules', // Ignore unnecessary files
    // Optionally ignore internal manifests (uncomment if needed)
    // 'page_client-reference-manifest.js',
  ],
  urlPrefix: '~/_next/', // Match Vercel's output structure
  hideSourceMaps: true, // Let Sentry manage source maps
});