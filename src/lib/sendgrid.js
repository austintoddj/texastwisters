import sendgrid from '@sendgrid/mail'

export const sendEmail = async (to, subject, body) => {
    sendgrid.setApiKey(process.env.NEXT_SENDGRID_API_KEY)

    const message = {
        to: to,
        from: {
            name: 'Texas Twisters Gymnastics',
            email: 'admin@texastwistersgym.com'
        },
        subject: subject,
        html: body
    }

    try {
        await sendgrid.send(message)
    } catch (error) {
        throw new Error(error)
    }
}
