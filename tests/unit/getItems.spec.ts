import { getAllItems, getItemData } from '@/lib/getItems'
import fs from 'fs'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

// Mock fs before importing the module under test
vi.mock('fs', () => ({
  default: {
    promises: {
      readdir: vi.fn(),
      readFile: vi.fn()
    }
  }
}))

describe('getItems utility', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('getItemData returns parsed frontmatter for a single file', async () => {
    ;(fs.promises.readFile as any).mockResolvedValueOnce(
      '---\ntitle: Hello\norder: 1\n---\ncontent'
    )

    const data = await getItemData('slug', 'type')

    expect(data).toBeTruthy()
    expect(data.title).toBe('Hello')
    // gray-matter will typically parse numbers as strings unless explicit, but ensure the key exists
    expect(data.order).toBeDefined()
  })

  it('getAllItems sorts events by expiresAfter date when all items have expiresAfter', async () => {
    ;(fs.promises.readdir as any).mockResolvedValueOnce([
      'event-b.md',
      'event-a.md',
      'event-c.md'
    ])
    ;(fs.promises.readFile as any).mockImplementation((p: string) => {
      if (p.includes('event-a.md'))
        return Promise.resolve(
          '---\ntitle: Event A\nexpiresAfter: "2026-03-15"\n---\nA'
        )
      if (p.includes('event-b.md'))
        return Promise.resolve(
          '---\ntitle: Event B\nexpiresAfter: "2026-02-01"\n---\nB'
        )
      if (p.includes('event-c.md'))
        return Promise.resolve(
          '---\ntitle: Event C\nexpiresAfter: "2026-04-20"\n---\nC'
        )
      return Promise.resolve('')
    })

    const items = await getAllItems('events', false)

    expect(items).toHaveLength(3)
    // Should be sorted by expiresAfter date (earliest first)
    expect(items[0].slug).toBe('event-b') // Feb 1
    expect(items[1].slug).toBe('event-a') // Mar 15
    expect(items[2].slug).toBe('event-c') // Apr 20
  })

  it('getAllItems returns items sorted by numeric order when every item has order', async () => {
    ;(fs.promises.readdir as any).mockResolvedValueOnce(['b.md', 'a.md'])
    ;(fs.promises.readFile as any).mockImplementation((p: string) => {
      if (p.includes('a.md'))
        return Promise.resolve('---\ntitle: A\norder: 2\n---\nA')
      if (p.includes('b.md'))
        return Promise.resolve('---\ntitle: B\norder: 1\n---\nB')
      return Promise.resolve('')
    })

    const items = await getAllItems('dir', false)

    expect(items).toHaveLength(2)
    expect(items[0].slug).toBe('b')
    expect(items[1].slug).toBe('a')
    expect(Number(items[0].data.order)).toBeLessThan(
      Number(items[1].data.order)
    )
  })

  it('getAllItems shuffles when shuffle=true and no order keys exist', async () => {
    ;(fs.promises.readdir as any).mockResolvedValueOnce([
      'one.md',
      'two.md',
      'three.md'
    ])
    ;(fs.promises.readFile as any).mockImplementation((p: string) => {
      if (p.includes('one.md'))
        return Promise.resolve('---\ntitle: one\n---\none')
      if (p.includes('two.md'))
        return Promise.resolve('---\ntitle: two\n---\ntwo')
      if (p.includes('three.md'))
        return Promise.resolve('---\ntitle: three\n---\nthree')
      return Promise.resolve('')
    })

    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.42)
    try {
      const items = await getAllItems('dir', true)

      expect(items).toHaveLength(3)
      // Ensure the shuffle branch executed by checking Math.random was called
      expect(randomSpy).toHaveBeenCalled()
    } finally {
      randomSpy.mockRestore()
    }
  })
})
