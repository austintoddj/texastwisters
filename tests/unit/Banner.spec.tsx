import { Banner } from '@/components/Banner'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

describe('Banner', () => {
  beforeEach(() => {
    // Clear sessionStorage before each test
    sessionStorage.clear()
  })

  afterEach(() => {
    cleanup()
  })

  it('renders the banner with content', async () => {
    render(<Banner icon="calendar" content="Test banner content" />)

    await waitFor(() => {
      expect(screen.getByText('Test banner content')).toBeInTheDocument()
    })
  })

  it('renders with a link when href is provided', async () => {
    render(
      <Banner
        icon="calendar"
        content="Test content"
        href="https://example.com"
      />
    )

    await waitFor(() => {
      const link = screen.getByText('Read more')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', 'https://example.com')
    })
  })

  it('does not render a link when href is not provided', async () => {
    render(<Banner icon="calendar" content="Test content" />)

    await waitFor(() => {
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })
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

  it('shows banner before expiration date', async () => {
    render(
      <Banner
        icon="calendar"
        content="Active banner"
        expiresAfter="2030-01-01"
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Active banner')).toBeInTheDocument()
    })
  })

  it('shows banner when no expiration date is provided', async () => {
    render(<Banner icon="calendar" content="No expiry banner" />)

    await waitFor(() => {
      expect(screen.getByText('No expiry banner')).toBeInTheDocument()
    })
  })

  it('hides banner when close button is clicked', async () => {
    render(
      <Banner icon="calendar" content="Closeable banner" event="test-banner" />
    )

    await waitFor(() => {
      expect(screen.getByText('Closeable banner')).toBeInTheDocument()
    })

    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)

    await waitFor(() => {
      expect(screen.queryByText('Closeable banner')).not.toBeInTheDocument()
    })
  })

  it('persists dismissed state to sessionStorage', async () => {
    render(
      <Banner
        icon="calendar"
        content="Persistent banner"
        event="persistent-test"
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Persistent banner')).toBeInTheDocument()
    })

    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)

    await waitFor(() => {
      expect(screen.queryByText('Persistent banner')).not.toBeInTheDocument()
    })

    // Check sessionStorage
    const dismissed = JSON.parse(
      sessionStorage.getItem('dismissed-banners') || '[]'
    )
    expect(dismissed).toContain('persistent-test')
  })

  it('does not show banner if previously dismissed in session', async () => {
    // Pre-populate sessionStorage
    sessionStorage.setItem(
      'dismissed-banners',
      JSON.stringify(['already-dismissed'])
    )

    render(
      <Banner
        icon="calendar"
        content="Already dismissed"
        event="already-dismissed"
      />
    )

    // Wait a bit to ensure useEffect runs
    await new Promise(resolve => setTimeout(resolve, 100))

    expect(screen.queryByText('Already dismissed')).not.toBeInTheDocument()
  })

  it('shows banner when expiresAfter is a Date', async () => {
    render(
      <Banner
        icon="calendar"
        content="Date expiry banner"
        expiresAfter={new Date('2030-01-01')}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Date expiry banner')).toBeInTheDocument()
    })
  })

  it('renders a region with an accessible label', async () => {
    render(
      <Banner
        icon="calendar"
        content="Accessible banner"
        ariaLabel="Important notice"
      />
    )

    await waitFor(() => {
      expect(
        screen.getByRole('region', { name: 'Important notice' })
      ).toBeInTheDocument()
    })
  })
})
