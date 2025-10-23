import { vi, describe, it, expect, beforeEach } from 'vitest'
import { createRequest, createResponse } from 'node-mocks-http'

// Mock sendEmail and Sentry
vi.mock('@/lib/sendgrid', () => ({
  sendEmail: vi.fn()
}))

vi.mock('@sentry/nextjs', () => ({
  captureException: vi.fn()
}))

import { sendEmail } from '@/lib/sendgrid'
import * as Sentry from '@sentry/nextjs'

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

  const handler = (await import('../../../src/pages/api/contact.js')).default
    await handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    const data = JSON.parse(res._getData())
    expect(data.message).toBe('Success')
    expect(Sentry.captureException).not.toHaveBeenCalled()
  })

  it('returns 500 and captures exception when sendEmail throws', async () => {
    ;(sendEmail as any).mockRejectedValueOnce(new Error('send failed'))

    const req = createRequest({
      method: 'POST',
      body: { name: 'Test', email: 'a@b.com', message: 'hello' }
    })
    const res = createResponse()

  const handler = (await import('../../../src/pages/api/contact.js')).default
    await handler(req, res)

    expect(res._getStatusCode()).toBe(500)
    const data = JSON.parse(res._getData())
    expect(data.message).toBe('Error')
    expect(Sentry.captureException).toHaveBeenCalled()
  })
})
