import { sendEmail } from '@/lib/sendgrid'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const phonePattern = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  phone: z
    .union([
      z.literal(''),
      z.string().regex(phonePattern, 'Phone must use format (123) 456-7890')
    ])
    .optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long')
})

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const templateId = process.env.SENDGRID_CONTACT_TEMPLATE_ID

    if (!templateId) {
      throw new Error('Missing SENDGRID_CONTACT_TEMPLATE_ID')
    }

    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    await sendEmail(
      'info@texastwistersgym.com',
      'noreply@texastwistersgym.com',
      templateId,
      validatedData.name,
      validatedData.message,
      validatedData.phone || '',
      validatedData.email
    )

    return NextResponse.json({ message: 'Success' })
  } catch (error) {
    console.error('Contact form error:', {
      message: error instanceof Error ? error.message : String(error),
      userAgent: request.headers.get('user-agent'),
      timestamp: new Date().toISOString()
    })

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: 'Validation failed',
          errors: error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
