import { Banner } from '@/components/Banner'
import { fireEvent, render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

describe('Banner', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the banner with content', () => {
    render(<Banner icon="calendar" content="Test banner content" />)

    expect(screen.getByText('Test banner content')).toBeInTheDocument()
  })

  it('renders with a link when href is provided', () => {
    render(
      <Banner
        icon="calendar"
        content="Test content"
        href="https://example.com"
      />
    )

    const link = screen.getByText('Read more')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('does not render a link when href is not provided', () => {
    render(<Banner icon="calendar" content="Test content" />)

    expect(screen.queryByText('Read more')).not.toBeInTheDocument()
  })

  it('hides banner after expiration date', () => {
    render(
      <Banner
        icon="calendar"
        content="Expired banner"
        expiresAfter="2020-01-01"
      />
    )

    expect(screen.queryByText('Expired banner')).not.toBeInTheDocument()
  })

  it('shows banner before expiration date', () => {
    render(
      <Banner
        icon="calendar"
        content="Active banner"
        expiresAfter="2030-01-01"
      />
    )

    expect(screen.getByText('Active banner')).toBeInTheDocument()
  })

  it('shows banner when no expiration date is provided', () => {
    render(<Banner icon="calendar" content="No expiry banner" />)

    expect(screen.getByText('No expiry banner')).toBeInTheDocument()
  })

  it('hides banner when close button is clicked', () => {
    render(<Banner icon="calendar" content="Closeable banner" />)

    const closeButton = screen.getByRole('button')
    expect(screen.getByText('Closeable banner')).toBeInTheDocument()

    fireEvent.click(closeButton)
    expect(screen.queryByText('Closeable banner')).not.toBeInTheDocument()
  })

  it('shows banner when expiresAfter is a Date', () => {
    render(
      <Banner
        icon="calendar"
        content="Date expiry banner"
        expiresAfter={new Date('2030-01-01')}
      />
    )

    expect(screen.getByText('Date expiry banner')).toBeInTheDocument()
  })

  it('renders a region with an accessible label', () => {
    render(
      <Banner
        icon="calendar"
        content="Accessible banner"
        ariaLabel="Important notice"
      />
    )

    expect(
      screen.getByRole('region', { name: 'Important notice' })
    ).toBeInTheDocument()
  })
})
