import { Banner } from '@/components/Banner'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

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

  describe('countdown', () => {
    const TARGET = '2026-04-11T12:00:00-05:00'
    const targetMs = new Date(TARGET).getTime()

    afterEach(() => {
      vi.restoreAllMocks()
      vi.useRealTimers()
    })

    it('renders countdown in Xd Xh Xm format when more than one day remains', async () => {
      vi.spyOn(Date, 'now').mockReturnValue(targetMs - 2 * 86400 * 1000) // exactly 2 days before

      render(
        <Banner
          icon="calendar"
          content="Starts in {countdown}!"
          countdownTo={TARGET}
        />
      )

      await waitFor(() => {
        const region = screen.getByRole('region')
        expect(region.textContent).toContain('2d 0h 0m')
        expect(region.textContent).not.toMatch(/\ds/) // no seconds
      })
    })

    it('renders countdown in Xh Xm Xs format when less than one day remains', async () => {
      vi.spyOn(Date, 'now').mockReturnValue(targetMs - 2 * 3600 * 1000) // 2 hours before

      render(
        <Banner
          icon="calendar"
          content="Starts in {countdown}!"
          countdownTo={TARGET}
        />
      )

      await waitFor(() => {
        const region = screen.getByRole('region')
        expect(region.textContent).toContain('2h 0m 0s')
        expect(region.textContent).not.toMatch(/\dd/) // no days
      })
    })

    it('omits hours from the countdown when less than one hour remains', async () => {
      vi.spyOn(Date, 'now').mockReturnValue(targetMs - 30 * 60 * 1000) // 30 minutes before

      render(
        <Banner
          icon="calendar"
          content="Starts in {countdown}!"
          countdownTo={TARGET}
        />
      )

      await waitFor(() => {
        const region = screen.getByRole('region')
        expect(region.textContent).toContain('30m 0s')
        expect(region.textContent).not.toMatch(/\dh/) // no hours
      })
    })

    it('renders text before and after the {countdown} placeholder', async () => {
      vi.spyOn(Date, 'now').mockReturnValue(targetMs - 2 * 86400 * 1000)

      render(
        <Banner
          icon="calendar"
          content="The countdown is on — {countdown} until the show!"
          countdownTo={TARGET}
        />
      )

      await waitFor(() => {
        const region = screen.getByRole('region')
        expect(region.textContent).toContain('The countdown is on —')
        expect(region.textContent).toContain('2d 0h 0m')
        expect(region.textContent).toContain('until the show!')
      })
    })

    it('renders the countdown value in a bold monospace span', async () => {
      vi.spyOn(Date, 'now').mockReturnValue(targetMs - 2 * 86400 * 1000)

      render(
        <Banner
          icon="calendar"
          content="Starts in {countdown}!"
          countdownTo={TARGET}
        />
      )

      await waitFor(() => {
        const span = screen.getByText('2d 0h 0m')
        expect(span.tagName).toBe('SPAN')
        expect(span).toHaveClass('font-bold', 'font-mono', 'tabular-nums')
      })
    })

    it('renders {countdown} as literal text when countdownTo is not provided', async () => {
      render(<Banner icon="calendar" content="Starts in {countdown} time!" />)

      await waitFor(() => {
        expect(
          screen.getByText('Starts in {countdown} time!')
        ).toBeInTheDocument()
      })
    })

    it('auto-dismisses when the countdown target has already passed', async () => {
      vi.spyOn(Date, 'now').mockReturnValue(targetMs + 1000) // 1 second past target

      render(
        <Banner
          icon="calendar"
          content="Show starts in {countdown}!"
          countdownTo={TARGET}
        />
      )

      await waitFor(() => {
        expect(screen.queryByRole('region')).not.toBeInTheDocument()
      })
    })

    it('updates the countdown value each second via setInterval', () => {
      vi.useFakeTimers()
      vi.setSystemTime(targetMs - 65000) // 1m 5s before target

      render(
        <Banner icon="calendar" content="{countdown}" countdownTo={TARGET} />
      )

      // Initial render after effects flush — should show 1m 5s
      expect(screen.getByRole('region').textContent).toContain('1m 5s')

      // Advance 1 fake second — interval fires, re-renders
      act(() => {
        vi.advanceTimersByTime(1000)
      })

      expect(screen.getByRole('region').textContent).toContain('1m 4s')
    })
  })
})
