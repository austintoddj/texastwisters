import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock @sendgrid/mail - return module with default export containing mocked functions
vi.mock('@sendgrid/mail', () => {
  return {
    default: {
      setApiKey: vi.fn(),
      send: vi.fn()
    }
  }
})

import sendgridModule from '@sendgrid/mail'
import { sendEmail } from '@/lib/sendgrid'

// Helper to normalize mocked module shape (CJS/ESM differences)
function getSendgrid(obj: any) {
  return obj && obj.default ? obj.default : obj
}

describe('sendgrid helper', () => {
  const sg = getSendgrid(sendgridModule)

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('calls sendgrid.setApiKey and send with expected message', async () => {
    ;(sg.send as any).mockResolvedValueOnce([{}])

    await sendEmail('to@test.com', 'from@test.com', 'template-1', 'Name', 'Subject', '123', 'email@test.com')

    expect(sg.setApiKey).toHaveBeenCalled()
    expect(sg.send).toHaveBeenCalled()

    const msg = (sg.send as any).mock.calls[0][0]
    expect(msg.to).toBe('to@test.com')
    expect(msg.from).toBe('from@test.com')
    expect(msg.template_id).toBe('template-1')
    expect(msg.dynamic_template_data.NAME).toBe('Name')
    expect(msg.dynamic_template_data.EMAIL).toBe('email@test.com')
  })

  it('rethrows when sendgrid.send throws', async () => {
    ;(sg.send as any).mockRejectedValueOnce(new Error('send failed'))

    await expect(sendEmail('a', 'b', 't', 'n', 's', 'p', 'e')).rejects.toThrow()
  })
})
