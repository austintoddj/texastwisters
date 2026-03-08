import sendgrid from '@sendgrid/mail'

/**
 * Utility for sending transactional emails using SendGrid.
 *
 * sendEmail(to, from, templateID, name, subject, phone, email):
 *   Sends an email using a dynamic template and provided data.
 *
 * Usage: Used for contact forms and notifications.
 */

export const sendEmail = async (
  to: string,
  from: string,
  templateID: string,
  name: string,
  subject: string,
  phone: string,
  email: string
): Promise<void> => {
  sendgrid.setApiKey(process.env.NEXT_SENDGRID_API_KEY!)

  /**
   * "From" email address must coincide with Verified Single Sender.
   * https://docs.sendgrid.com/ui/sending-email/sender-verification/
   */
  const message = {
    to,
    from,
    templateId: templateID,
    dynamicTemplateData: {
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
    throw error instanceof Error ? error : new Error(String(error))
  }
}
