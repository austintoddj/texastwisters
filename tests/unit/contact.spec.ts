import { sendEmail } from '@/lib/sendgrid'
import { createRequest, createResponse } from 'node-mocks-http'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/sendgrid', () => ({
  sendEmail: vi.fn()
}))

describe('API /api/contact', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns 200 when sendEmail resolves', async () => {
    ;(sendEmail as any).mockResolvedValueOnce(true)

    const req = createRequest({
      method: 'POST',
      body: { name: 'Test', email: 'a@b.com', message: 'hello' }
    })
    const res = createResponse()

    const handler = (await import('@/pages/api/contact')).default
    await handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    const data = JSON.parse(res._getData())
    expect(data.message).toBe('Success')
  })

  it('returns 500 when sendEmail throws', async () => {
    ;(sendEmail as any).mockRejectedValueOnce('send failed')

    const req = createRequest({
      method: 'POST',
      body: {
        name: 'John Doe',
        email: 'johndoe@email.com',
        message: 'Hello there'
      }
    })
    const res = createResponse()

    const handler = (await import('@/pages/api/contact')).default
    await handler(req, res)

    expect(res._getStatusCode()).toBe(500)
    const data = JSON.parse(res._getData())
    expect(data.message).toMatch(/^Error:/)
  })
})
