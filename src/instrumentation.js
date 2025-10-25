import initSentry from '../sentry.config'
import * as Sentry from '@sentry/nextjs'

// Initialize Sentry for server/edge runtime. The shared config will pick the correct settings.
(async () => {
  await initSentry({ isClient: false });
  // Export hooks used by Sentry/Next.js runtime. Some tooling reports these as
  // unused even though Sentry imports them by name; disable the unused-var
  // warning to avoid lint/build failures.
  /* eslint-disable-next-line no-unused-vars */
  export const onRequestError = Sentry.captureRequestError;
})();
