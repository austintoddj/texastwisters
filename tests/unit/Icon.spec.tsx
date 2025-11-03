import { Icon } from '@/components/Icon'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

describe('Icon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the specified icon', () => {
    render(<Icon icon="check" />)

    const icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('tabler-icon', 'tabler-icon-check')
  })

  it('applies custom className', () => {
    render(<Icon icon="check" className="custom-icon" />)

    const icon = document.querySelector('svg')
    expect(icon).toHaveClass('custom-icon')
  })

  it('applies stroke prop', () => {
    render(<Icon icon="check" stroke={2} />)

    const icon = document.querySelector('svg')
    expect(icon).toHaveAttribute('stroke-width', '2')
  })

  it('defaults to first icon when no icon is provided', () => {
    render(<Icon />)

    const icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('falls back to first icon for invalid icon name', () => {
    render(<Icon icon="invalid-icon-name" />)

    const icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('renders different icons correctly', () => {
    const { rerender } = render(<Icon icon="mail" />)
    let icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()

    rerender(<Icon icon="phone" />)
    icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
})
