import { sendEmail } from '@/lib/sendgrid'

export default async function Contact(req, res) {
  try {
    await sendEmail(
      'info@texastwistersgym.com',
      'noreply@texastwistersgym.com',
      'd-93318328a69d4504998360ec450629e1',
      req.body.name,
      req.body.message,
      req.body.phone,
      req.body.email
    ).then(() => {
      res.status(200).json({ message: 'Success' })
    })
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
}
