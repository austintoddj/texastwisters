import { Events } from '@/components/Events'
import * as getItems from '@/lib/getItems'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

// Mock the getItems module
vi.mock('@/lib/getItems', () => ({
  getAllItems: vi.fn()
}))

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: () => <div data-testid="mock-image" />
}))

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({
    children,
    href
  }: {
    children: React.ReactNode
    href: string
  }) => <a href={href}>{children}</a>
}))

describe('Events', () => {
  it('renders events without expiration', async () => {
    const mockEvents = [
      {
        slug: 'event-1',
        data: {
          name: 'Test Event 1',
          description: 'Test description 1',
          dates: 'March 1-2',
          image: '/images/test.jpg',
          order: 1
        }
      }
    ]

    vi.mocked(getItems.getAllItems).mockResolvedValue(mockEvents)

    const component = await Events()
    render(component)

    expect(screen.getByText('Test Event 1')).toBeInTheDocument()
    expect(screen.getByText('Test description 1')).toBeInTheDocument()
  })

  it('filters out expired events', async () => {
    const mockEvents = [
      {
        slug: 'event-active',
        data: {
          name: 'Active Event',
          description: 'This event is active',
          dates: 'March 1-2',
          image: '/images/test.jpg',
          order: 1,
          expiresAfter: '2030-01-01'
        }
      },
      {
        slug: 'event-expired',
        data: {
          name: 'Expired Event',
          description: 'This event is expired',
          dates: 'January 1-2',
          image: '/images/test.jpg',
          order: 2,
          expiresAfter: '2020-01-01'
        }
      }
    ]

    vi.mocked(getItems.getAllItems).mockResolvedValue(mockEvents)

    const component = await Events()
    render(component)

    expect(screen.getByText('Active Event')).toBeInTheDocument()
    expect(screen.queryByText('Expired Event')).not.toBeInTheDocument()
  })

  it('shows events without expiresAfter field', async () => {
    const mockEvents = [
      {
        slug: 'event-no-expiry',
        data: {
          name: 'No Expiry Event',
          description: 'This event has no expiry',
          dates: 'March 1-2',
          image: '/images/test.jpg',
          order: 1
        }
      }
    ]

    vi.mocked(getItems.getAllItems).mockResolvedValue(mockEvents)

    const component = await Events()
    render(component)

    expect(screen.getByText('No Expiry Event')).toBeInTheDocument()
  })

  it('shows events with future expiration date', async () => {
    const futureDate = new Date()
    futureDate.setFullYear(futureDate.getFullYear() + 1)

    const mockEvents = [
      {
        slug: 'event-future',
        data: {
          name: 'Future Event',
          description: 'This event expires in the future',
          dates: 'March 1-2',
          image: '/images/test.jpg',
          order: 1,
          expiresAfter: futureDate.toISOString()
        }
      }
    ]

    vi.mocked(getItems.getAllItems).mockResolvedValue(mockEvents)

    const component = await Events()
    render(component)

    expect(screen.getByText('Future Event')).toBeInTheDocument()
  })

  it('renders event with href link', async () => {
    const mockEvents = [
      {
        slug: 'event-with-link',
        data: {
          name: 'Event with Link',
          description: 'Check details',
          dates: 'March 1-2',
          image: '/images/test.jpg',
          href: 'https://example.com',
          order: 1
        }
      }
    ]

    vi.mocked(getItems.getAllItems).mockResolvedValue(mockEvents)

    const component = await Events()
    render(component)

    expect(screen.getByText('Event with Link')).toBeInTheDocument()
    expect(screen.getByText('See details')).toBeInTheDocument()
  })
})
