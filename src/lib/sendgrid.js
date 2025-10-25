import sendgrid from '@sendgrid/mail'
import * as Sentry from '@sentry/nextjs'

/**
 * Utility for sending transactional emails using SendGrid.
 *
 * sendEmail(to, from, templateID, name, subject, phone, email):
 *   Sends an email using a dynamic template and provided data.
 *
 * Usage: Used for contact forms and notifications.
 */

export const sendEmail = async (
  to,
  from,
  templateID,
  name,
  subject,
  phone,
  email
) => {
  // Ensure API key exists and fail fast with a helpful diagnostic (no PII)
  const apiKey = process.env.NEXT_SENDGRID_API_KEY
  if (!apiKey) {
    const err = new Error('SendGrid API key is not configured')
    // Capture with helpful tags but do not include any emails/PII
    try {
      Sentry.captureException(err, {
        level: 'fatal',
        tags: { module: 'sendgrid', templateID: templateID ?? 'unknown' },
        extra: { hasTo: Boolean(to), hasFrom: Boolean(from) }
      })
    } catch {
      // swallow
    }

    // During tests we want to allow the mocked sendgrid to be exercised.
    // In production / non-test environments, throw to fail fast.
    if (process.env.NODE_ENV !== 'test') {
      throw err
    }
  }

  // Only set the API key if it is defined (in test mode, apiKey may be undefined)
  if (apiKey) {
    sendgrid.setApiKey(apiKey)
  }

  /**
   * "From" email address must coincide with Verified Single Sender.
   * https://docs.sendgrid.com/ui/sending-email/sender-verification/
   *
   * @type {{subject, from: {name: string, email: string}, html, to}}
   */
  const message = {
    to: to,
    from: from,
    template_id: templateID,
    dynamic_template_data: {
      SUBJECT: subject,
      NAME: name,
      EMAIL: email,
      PHONE: phone,
      Sender_Name: 'Texas Twisters Gymnastics, LLC',
      Sender_Address: '901 S I-35 Frontage Rd Suite 103',
      Sender_City: 'Georgetown',
      Sender_State: 'TX',
      Sender_Zip: '78626'
    }
  }

  try {
    await sendgrid.send(message)
  } catch (error) {
    // Capture the exception for diagnostics, but avoid including raw PII or the full message body.
    try {
      Sentry.captureException(error, {
        level: 'error',
        tags: { module: 'sendgrid', templateID: templateID ?? 'unknown' },
        extra: {
          hasTo: Boolean(to),
          hasFrom: Boolean(from),
          // Include the presence/length of critical fields rather than values
          nameLength: typeof name === 'string' ? name.length : undefined,
          messageLength:
            typeof subject === 'string' ? subject.length : undefined
        }
      })
    } catch (captureErr) {
      // best-effort: do not mask the original error
      try {
        process.stderr.write(
          `Sentry capture failed in sendEmail: ${captureErr}\n`
        )
      } catch {
        // swallow
      }
    }

    // Re-throw the original error (preserve stack when possible)
    if (error instanceof Error) throw error
    throw new Error(String(error))
  }
}
