// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import initSentry from '../sentry.config'
import * as Sentry from '@sentry/nextjs'

// Initialize using the shared config but mark as client so NEXT_PUBLIC_* env vars are used.
await initSentry({ isClient: true })

// Export hooks used by Sentry/Next.js runtime. Disable the unused-var warning
// as Sentry references this symbol by name.
/* eslint-disable-next-line no-unused-vars */
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
