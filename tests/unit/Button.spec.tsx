import { Button } from '@/components/Button'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders as a button by default', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
  })

  it('renders as a link when href is provided', () => {
    render(<Button href="/test">Click me</Button>)

    const link = screen.getByRole('link', { name: /click me/i })
    expect(link).toBeInTheDocument()
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('applies default variant and size classes', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass(
      'text-purple-900',
      'bg-yellow-500',
      'px-8',
      'py-3.5',
      'text-lg'
    )
  })

  it('applies primary variant classes', () => {
    render(<Button variant="primary">Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass(
      'text-purple-900',
      'bg-yellow-500',
      'hover:bg-yellow-600'
    )
  })

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary">Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass(
      'text-purple-900',
      'bg-purple-200',
      'hover:text-white',
      'hover:bg-purple-600'
    )
  })

  it('applies accent variant classes', () => {
    render(<Button variant="accent">Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass(
      'text-white',
      'bg-purple-600',
      'hover:bg-purple-500'
    )
  })

  it('applies small size classes', () => {
    render(<Button size="sm">Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('px-5', 'py-2.5', 'text-base')
  })

  it('applies large size classes', () => {
    render(<Button size="lg">Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('px-8', 'py-3.5', 'text-lg')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('custom-class')
  })

  it('passes through button props', () => {
    render(
      <Button type="submit" disabled>
        Click me
      </Button>
    )

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toBeDisabled()
  })

  it('passes through link props', () => {
    render(
      <Button href="/test" target="_blank" rel="noopener noreferrer">
        Click me
      </Button>
    )

    const link = screen.getByRole('link', { name: /click me/i })
    expect(link).toHaveAttribute('href', '/test')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders children correctly', () => {
    render(
      <Button>
        <span>Click</span> me
      </Button>
    )

    expect(screen.getByText('Click')).toBeInTheDocument()
    expect(screen.getByText('me')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveAttribute('type', 'button') // default type
  })

  it('has consistent base classes', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass(
      'font-medium',
      'cursor-pointer',
      'relative',
      'leading-normal',
      'inline-flex',
      'items-center',
      'justify-center',
      'duration-300',
      'ease-in-out',
      'rounded-full',
      'outline-hidden',
      'group'
    )
  })
})
