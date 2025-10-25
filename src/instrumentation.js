import initSentry from '../sentry.config'
import * as Sentry from '@sentry/nextjs'

// Initialize Sentry for server/edge runtime. The shared config will pick the correct settings.
// We call the async initializer but do not await it at top-level to avoid requiring
// top-level await in this module. Any initialization errors should not crash the build.
initSentry({ isClient: false }).catch(() => {
  // best-effort initialization; swallow errors to avoid breaking the app build
})

// Export hooks used by Sentry/Next.js runtime. Some tooling reports these as
// unused even though Sentry imports them by name; disable the unused-var
// warning to avoid lint/build failures.
/* eslint-disable-next-line no-unused-vars */
export const onRequestError = Sentry.captureRequestError
