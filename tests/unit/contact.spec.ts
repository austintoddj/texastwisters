import { sendEmail } from '@/lib/sendgrid'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/sendgrid', () => ({
  sendEmail: vi.fn()
}))

const makeRequest = (
  body: Record<string, unknown>,
  headers: Record<string, string> = {}
) =>
  new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body)
  })

describe('API /api/contact', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns 200 when sendEmail resolves with valid data', async () => {
    ;(sendEmail as any).mockResolvedValueOnce(undefined)

    const { POST } = await import('@/app/api/contact/route')
    const res = await POST(
      makeRequest({
        name: 'Test User',
        email: 'test@example.com',
        phone: '123-456-7890',
        message:
          'This is a valid message with enough content to pass validation.'
      }) as any
    )

    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data.message).toBe('Success')
  })

  it('returns 400 for invalid email', async () => {
    const { POST } = await import('@/app/api/contact/route')
    const res = await POST(
      makeRequest({
        name: 'Test User',
        email: 'invalid-email',
        message:
          'This is a valid message with enough content to pass validation.'
      }) as any
    )

    expect(res.status).toBe(400)
    const data = await res.json()
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
    const { POST } = await import('@/app/api/contact/route')
    const res = await POST(
      makeRequest({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Too short'
      }) as any
    )

    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data.message).toBe('Validation failed')
  })

  it('returns 500 when sendEmail throws with sanitized error', async () => {
    ;(sendEmail as any).mockRejectedValueOnce(new Error('SendGrid API error'))

    const { POST } = await import('@/app/api/contact/route')
    const res = await POST(
      makeRequest({
        name: 'Test User',
        email: 'test@example.com',
        message:
          'This is a valid message with enough content to pass validation.'
      }) as any
    )

    expect(res.status).toBe(500)
    const data = await res.json()
    expect(data.message).toBe('Internal server error')
    // Should not expose the raw error message
    expect(data.message).not.toMatch(/SendGrid/)
  })
})
