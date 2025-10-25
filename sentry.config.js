// Shared Sentry configuration used by server, edge, and client initializers.
// Centralizes env var handling and sensible defaults.
import * as Sentry from '@sentry/nextjs'

export default async function initSentry({ isClient = false } = {}) {
  // Small helpers to read env vars with clearer intent
  const get = (name, fallback = undefined) =>
    typeof process !== 'undefined' ? process.env[name] ?? fallback : fallback
  const bool = name => get(name) === '1'
  const num = (name, fallback = 0) => Number(get(name, String(fallback)))

  // Choose appropriate DSN for client vs server (favor NEXT_PUBLIC_* on client)
  const dsn = isClient
    ? get('NEXT_PUBLIC_SENTRY_DSN', get('SENTRY_DSN'))
    : get('SENTRY_DSN')

  // NOTE: Replay is intentionally removed. This function will not attempt to
  // configure or import any Replay integrations. Keep the integrations array
  // available for future non-replay integrations.
  const integrations = []

  Sentry.init({
    dsn: dsn || undefined,

    // Tracing sample rate (defaults)
    tracesSampleRate: num(
      isClient ? 'NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE' : 'SENTRY_TRACES_SAMPLE_RATE',
      isClient ? 0.1 : 0.05
    ),

    // Logs and PII
    enableLogs: isClient ? bool('NEXT_PUBLIC_SENTRY_ENABLE_LOGS') : bool('SENTRY_ENABLE_LOGS'),
    sendDefaultPii: isClient
      ? bool('NEXT_PUBLIC_SENTRY_SEND_DEFAULT_PII')
      : bool('SENTRY_SEND_DEFAULT_PII'),

    // Release & environment
    release: get('SENTRY_RELEASE') ?? get('VERCEL_GIT_COMMIT_SHA'),
    environment: get('SENTRY_ENVIRONMENT') ?? get('VERCEL_ENV') ?? get('VERCEL_ENVIRONMENT'),

    // Debug
    debug: bool('SENTRY_DEBUG'),

    // Integrations (kept for future use)
    ...(integrations.length ? { integrations } : {})
  })
}
