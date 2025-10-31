import { sendEmail } from '@/lib/sendgrid'
import { createRequest, createResponse } from 'node-mocks-http'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/sendgrid', () => ({
  sendEmail: vi.fn()
}))

describe('API /api/contact', () => {
  beforeEach(async () => {
    vi.clearAllMocks()
    // Clear rate limit store between tests
    const contactModule = await import('@/pages/api/contact')
    contactModule.rateLimitStore.clear()
  })

  it('returns 200 when sendEmail resolves with valid data', async () => {
    ;(sendEmail as any).mockResolvedValueOnce(true)

    const req = createRequest({
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '123-456-7890',
        message:
          'This is a valid message with enough content to pass validation.'
      }
    })
    const res = createResponse()

    const handler = (await import('@/pages/api/contact')).default
    await handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    const data = JSON.parse(res._getData())
    expect(data.message).toBe('Success')
  })

  it('returns 400 for invalid email', async () => {
    const req = createRequest({
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'invalid-email',
        message:
          'This is a valid message with enough content to pass validation.'
      }
    })
    const res = createResponse()

    const handler = (await import('@/pages/api/contact')).default
    await handler(req, res)

    expect(res._getStatusCode()).toBe(400)
    const data = JSON.parse(res._getData())
    expect(data.message).toBe('Validation failed')
    expect(data.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          field: 'email',
          message: 'Invalid email address'
        })
      ])
    )
  })

  it('returns 400 for message too short', async () => {
    const req = createRequest({
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'test@example.com',
        message: 'Too short'
      }
    })
    const res = createResponse()

    const handler = (await import('@/pages/api/contact')).default
    await handler(req, res)

    expect(res._getStatusCode()).toBe(400)
    const data = JSON.parse(res._getData())
    expect(data.message).toBe('Validation failed')
  })

  it('returns 405 for non-POST methods', async () => {
    const req = createRequest({
      method: 'GET'
    })
    const res = createResponse()

    const handler = (await import('@/pages/api/contact')).default
    await handler(req, res)

    expect(res._getStatusCode()).toBe(405)
    const data = JSON.parse(res._getData())
    expect(data.message).toBe('Method not allowed')
  })

  it('returns 429 when rate limit is exceeded', async () => {
    ;(sendEmail as any).mockResolvedValueOnce(true)

    // Mock IP address
    const mockReq = createRequest({
      method: 'POST',
      headers: { 'x-forwarded-for': '192.168.1.1' },
      body: {
        name: 'Test User',
        email: 'test@example.com',
        message:
          'This is a valid message with enough content to pass validation.'
      }
    })
    const mockRes = createResponse()

    const handler = (await import('@/pages/api/contact')).default

    // Make requests up to the limit (3 requests)
    for (let i = 0; i < 3; i++) {
      await handler(mockReq, mockRes)
      expect(mockRes._getStatusCode()).toBe(200)
    }

    // Next request should be rate limited
    const rateLimitedRes = createResponse()
    await handler(mockReq, rateLimitedRes)

    expect(rateLimitedRes._getStatusCode()).toBe(429)
    const data = JSON.parse(rateLimitedRes._getData())
    expect(data.message).toMatch(/Too many requests/)
  })

  it('returns 500 when sendEmail throws with sanitized error', async () => {
    ;(sendEmail as any).mockRejectedValueOnce(new Error('SendGrid API error'))

    const req = createRequest({
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'test@example.com',
        message:
          'This is a valid message with enough content to pass validation.'
      }
    })
    const res = createResponse()

    const handler = (await import('@/pages/api/contact')).default
    await handler(req, res)

    expect(res._getStatusCode()).toBe(500)
    const data = JSON.parse(res._getData())
    expect(data.message).toBe('Internal server error')
    // Should not expose the raw error message
    expect(data.message).not.toMatch(/SendGrid/)
  })
})
