// Shared Sentry configuration used by server, edge, and client initializers.
// Centralizes env var handling and sensible defaults.
import * as Sentry from '@sentry/nextjs'

export default async function initSentry({ isClient = false } = {}) {
  const env = typeof process !== 'undefined' ? process.env : {}
  const dsn = env.NEXT_PUBLIC_SENTRY_DSN || env.SENTRY_DSN || undefined
  const release = env.VERCEL_GIT_COMMIT_SHA || env.SENTRY_RELEASE || undefined

  Sentry.init({
    dsn: dsn || undefined,
    enableLogs: true,
    release: release || undefined
  })
}
