import sendgrid from '@sendgrid/mail'

export const sendEmail = async (
  to,
  from,
  templateID,
  name,
  subject,
  phone,
  email
) => {
  sendgrid.setApiKey(process.env.NEXT_SENDGRID_API_KEY)

  /**
   * "From" email address must coincide with Verified Single Sender.
   * https://docs.sendgrid.com/ui/sending-email/sender-verification/
   *
   * @type {{subject, from: {name: string, email: string}, html, to}}
   */
  const message = {
    to: to,
    from: from,
    templateID: templateID,
    dynamicTemplateData: {
      subject: subject,
      name: name,
      email: email,
      Sender_Name: 'Texas Twisters Gymnastics, LLC',
      Sender_Address: '901 S I-35 Frontage Rd Suite 103',
      Sender_City: 'Georgetown',
      Sender_State: 'TX',
      Sender_Zip: 78626
    }
  }

  try {
    await sendgrid.send(message)
  } catch (error) {
    throw new Error(error)
  }
}
