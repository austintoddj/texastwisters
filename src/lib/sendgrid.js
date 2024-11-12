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
    template_id: templateID,
    dynamic_template_data: {
      SUBJECT: subject,
      NAME: name,
      EMAIL: email,
      PHONE: phone,
      Sender_Name: process.env.NEXT_PUBLIC_GYM_NAME,
      Sender_Address: process.env.NEXT_PUBLIC_GYM_ADDRESS,
      Sender_City: process.env.NEXT_PUBLIC_GYM_CITY,
      Sender_State: process.env.NEXT_PUBLIC_GYM_STATE,
      Sender_Zip: process.env.NEXT_PUBLIC_GYM_ZIP
    }
  }

  try {
    await sendgrid.send(message)
  } catch (error) {
    throw new Error(error)
  }
}
