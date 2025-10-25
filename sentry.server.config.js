// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import initSentry from './sentry.config'

// Initialize Sentry with server-side settings

;(async () => {
  await initSentry({ isClient: false })
})().catch(err => {
  // eslint-disable-next-line no-console
  console.error('Failed to initialize Sentry on the server:', err)
})
