// Shared Sentry configuration used by server, edge, and client initializers.
// Centralizes env var handling and sensible defaults.
import * as Sentry from '@sentry/nextjs'

export default async function initSentry({ isClient = false } = {}) {
  // For client builds prefer NEXT_PUBLIC_* env vars so values are available in the browser.
  const dsn = isClient
    ? (process.env.NEXT_PUBLIC_SENTRY_DSN ?? process.env.SENTRY_DSN)
    : process.env.SENTRY_DSN

  // Build integrations array — we will dynamically import Replay only when needed
  const integrations = []

  if (isClient) {
    const enableReplay =
      process.env.NEXT_PUBLIC_SENTRY_ENABLE_REPLAY === '1' ||
      process.env.SENTRY_ENABLE_REPLAY === '1'

    if (enableReplay) {
      // Use the built-in Replay integration from @sentry/nextjs v8.x+
      integrations.push(Sentry.replayIntegration())
    }
  }

  Sentry.init({
    dsn: dsn || undefined,

    // Sampling
    tracesSampleRate: Number(
      (isClient
        ? process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE
        : process.env.SENTRY_TRACES_SAMPLE_RATE) ?? (isClient ? 0.1 : 0.05)
    ),

    // Logs and PII
    enableLogs:
      (isClient
        ? process.env.NEXT_PUBLIC_SENTRY_ENABLE_LOGS
        : process.env.SENTRY_ENABLE_LOGS) === '1' || false,
    sendDefaultPii:
      (isClient
        ? process.env.NEXT_PUBLIC_SENTRY_SEND_DEFAULT_PII
        : process.env.SENTRY_SEND_DEFAULT_PII) === '1' || false,

    // Release and environment
    release: process.env.SENTRY_RELEASE ?? process.env.VERCEL_GIT_COMMIT_SHA,
    environment:
      process.env.SENTRY_ENVIRONMENT ??
      process.env.VERCEL_ENV ??
      process.env.VERCEL_ENVIRONMENT,

    // Debug when explicitly enabled
    debug: process.env.SENTRY_DEBUG === '1' || false,

    // Only set integrations if we have any
    ...(integrations.length ? { integrations } : {}),

    // Client-only replay sampling settings (kept separately)
    ...(isClient
      ? {
          replaysSessionSampleRate: Number(
            process.env.NEXT_PUBLIC_SENTRY_REPLAYS_SESSION_SAMPLE_RATE ??
              process.env.SENTRY_REPLAYS_SESSION_SAMPLE_RATE ??
              0.0
          ),
          replaysOnErrorSampleRate: Number(
            process.env.NEXT_PUBLIC_SENTRY_REPLAYS_ON_ERROR_SAMPLE_RATE ??
              process.env.SENTRY_REPLAYS_ON_ERROR_SAMPLE_RATE ??
              0.5
          )
        }
      : {})
  })
}
