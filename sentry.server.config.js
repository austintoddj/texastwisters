// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN || undefined,
  tracesSampleRate: Number(process.env.SENTRY_TRACES_SAMPLE_RATE ?? 0.05),
  enableLogs: process.env.SENTRY_ENABLE_LOGS === '1' || false,
  sendDefaultPii: process.env.SENTRY_SEND_DEFAULT_PII === '1' || false
})
