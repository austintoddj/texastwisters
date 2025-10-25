// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import initSentry from './sentry.config'

// Initialize Sentry for edge runtime (same centralized config)
(async () => {
  await initSentry({ isClient: false })
})().catch((e) => {
  console.error('Error initializing Sentry in edge config:', e);
});
