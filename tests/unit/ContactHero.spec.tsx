import { ContactHero, formatPhoneNumber } from '@/components/ContactHero'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('next/image', () => ({
  default: () => <div data-testid="mock-image" />
}))

describe('ContactHero', () => {
  afterEach(() => {
    cleanup()
  })

  it('formats raw phone digits as the user types', async () => {
    const user = userEvent.setup()

    render(<ContactHero />)

    const phoneInput = screen.getByLabelText('Phone')
    await user.type(phoneInput, '5551234567')

    expect(phoneInput).toHaveValue('(555) 123-4567')
  })

  it('normalizes pasted phone input with mixed separators', async () => {
    const user = userEvent.setup()

    render(<ContactHero />)

    const phoneInput = screen.getByLabelText('Phone')
    await user.click(phoneInput)
    await user.paste('555.123.4567')

    expect(phoneInput).toHaveValue('(555) 123-4567')
  })

  it('ignores digits after the tenth number', async () => {
    const user = userEvent.setup()

    render(<ContactHero />)

    const phoneInput = screen.getByLabelText('Phone')
    await user.type(phoneInput, '5551234567899')

    expect(phoneInput).toHaveValue('(555) 123-4567')
  })

  it('uses mobile-friendly phone input attributes', () => {
    render(<ContactHero />)

    const phoneInput = screen.getByLabelText('Phone')
    expect(phoneInput).toHaveAttribute('type', 'tel')
    expect(phoneInput).toHaveAttribute('inputmode', 'numeric')
    expect(phoneInput).toHaveAttribute('autocomplete', 'tel-national')
    expect(phoneInput).toHaveAttribute('maxlength', '14')
  })
})

describe('formatPhoneNumber', () => {
  it('formats partial and complete values consistently', () => {
    expect(formatPhoneNumber('')).toBe('')
    expect(formatPhoneNumber('5')).toBe('(5')
    expect(formatPhoneNumber('5551')).toBe('(555) 1')
    expect(formatPhoneNumber('5551234567')).toBe('(555) 123-4567')
    expect(formatPhoneNumber('(555) 123-4567 ext 99')).toBe('(555) 123-4567')
  })
})
