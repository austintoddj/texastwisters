import { sendEmail } from '@/lib/sendgrid'

export default async function Contact(req, res) {
  try {
    await sendEmail(
      'info@texastwistersgym.com',
      '[INQUIRY] You have a new contact from texastwistersgym.com',
      `${req.body.name} <br /> ${req.body.email} <br /> ${req.body.phone} <br /><br /> ${req.body.message}`
    ).then(() => {
      res.status(200).json({ message: 'Success' })
    })
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
}
