import { sendEmail } from '@/lib/sendgrid'

export default async function Contact(req, res) {
  try {
    await sendEmail(
      'info@texastwistersgym.com',
      'noreply@texastwistersgym.com',
      '1161d74f-423f-413d-8ae0-2d88a06fd959',
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
