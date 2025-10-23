import { sendEmail } from '@/lib/sendgrid'
import * as Sentry from '@sentry/nextjs'

export default async function Contact(req, res) {
  try {
    // Await sendEmail directly and let exceptions propagate to the catch block
    await sendEmail(
      'info@texastwistersgym.com',
      'noreply@texastwistersgym.com',
      'd-93318328a69d4504998360ec450629e1',
      req.body.name,
      req.body.message,
      req.body.phone,
      req.body.email
    )

    res.status(200).json({ message: 'Success' })
  } catch (error) {
    // Capture the exception in Sentry with minimal, non-PII context to aid debugging
    try {
      Sentry.captureException(error, {
        level: 'error',
        tags: { route: '/api/contact' },
        extra: {
          // Avoid sending raw PII; only send presence/length indicators
          hasName: Boolean(req.body?.name),
          hasEmail: Boolean(req.body?.email),
          hasPhone: Boolean(req.body?.phone),
          messageLength:
            typeof req.body?.message === 'string'
              ? req.body.message.length
              : undefined
        }
      })
    } catch (captureErr) {
      // best-effort: do not cause a secondary failure
      try {
        process.stderr.write(`Sentry capture failed: ${captureErr}\n`)
      } catch {
        // swallow
      }
    }

    res.status(500).json({ message: 'Error' })
  }
}
