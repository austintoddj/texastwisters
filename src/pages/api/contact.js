import { sendEmail } from '@/lib/sendgrid'
import { z } from 'zod'

// Simple in-memory rate limiter
// In production, consider using Redis or a database for persistence
const rateLimitStore = new Map()

const RATE_LIMIT_MAX_REQUESTS = 3 // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour in milliseconds

function checkRateLimit(ip) {
  const now = Date.now()
  const windowStart = now - RATE_LIMIT_WINDOW_MS

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, [])
  }

  const requests = rateLimitStore.get(ip)

  // Remove old requests outside the window
  const validRequests = requests.filter(timestamp => timestamp > windowStart)

  if (validRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      remainingTime: Math.ceil(
        (validRequests[0] + RATE_LIMIT_WINDOW_MS - now) / 1000 / 60
      )
    }
  }

  // Add current request
  validRequests.push(now)
  rateLimitStore.set(ip, validRequests)

  return { allowed: true }
}

// Export for testing
export { rateLimitStore }

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long')
})

export default async function Contact(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Get client IP address
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    'unknown'

  // Check rate limit
  const rateLimitResult = checkRateLimit(ip)
  if (!rateLimitResult.allowed) {
    // Log rate limit hit
    console.warn(
      `Rate limit exceeded for IP: ${ip}, remaining time: ${rateLimitResult.remainingTime} minutes`
    )

    return res.status(429).json({
      message: `Too many requests. Please try again in ${rateLimitResult.remainingTime} minutes.`
    })
  }

  try {
    // Validate input
    const validatedData = contactSchema.parse(req.body)

    // Send email with validated data
    await sendEmail(
      'info@texastwistersgym.com',
      'noreply@texastwistersgym.com',
      'd-93318328a69d4504998360ec450629e1',
      validatedData.name,
      validatedData.message,
      validatedData.phone || '',
      validatedData.email
    )

    res.status(200).json({ message: 'Success' })
  } catch (error) {
    console.error('Contact form error:', {
      message: error.message,
      ip,
      userAgent: req.headers['user-agent'],
      timestamp: new Date().toISOString()
    })

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.issues.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      })
    }

    // Handle other errors without exposing internal details
    res.status(500).json({ message: 'Internal server error' })
  }
}
