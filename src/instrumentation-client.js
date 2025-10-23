// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // Read DSN and sampling settings from environment variables so they aren't hard-coded.
  dsn: process.env.SENTRY_DSN || undefined,

  // Optional integrations
  integrations: [
    // Only enable Replay integration when explicitly requested via env var
    ...(process.env.SENTRY_ENABLE_REPLAY === '1' ? [Sentry.replayIntegration()] : []),
  ],

  // Tracing sample rate (default to a low value). Set SENTRY_TRACES_SAMPLE_RATE in Vercel to override.
  tracesSampleRate: Number(process.env.SENTRY_TRACES_SAMPLE_RATE ?? 0.1),
  enableLogs: process.env.SENTRY_ENABLE_LOGS === '1' || false,

  // Replay settings: keep conservative defaults unless opted-in
  replaysSessionSampleRate: Number(process.env.SENTRY_REPLAYS_SESSION_SAMPLE_RATE ?? 0.0),
  replaysOnErrorSampleRate: Number(process.env.SENTRY_REPLAYS_ON_ERROR_SAMPLE_RATE ?? 0.5),

  // Only send default PII when explicitly enabled
  sendDefaultPii: process.env.SENTRY_SEND_DEFAULT_PII === '1' || false,
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;