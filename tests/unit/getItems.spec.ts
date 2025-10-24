import { getAllItems, getItemData } from '@/lib/getItems'
import fs from 'fs'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

// Mock fs before importing the module under test
vi.mock('fs', () => ({
  default: {
    readdirSync: vi.fn(),
    readFileSync: vi.fn()
  }
}))

describe('getItems utility', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('getItemData returns parsed frontmatter for a single file', () => {
    ;(fs.readFileSync as any).mockReturnValueOnce(
      '---\ntitle: Hello\norder: 1\n---\ncontent'
    )

    const data = getItemData('slug', 'type')

    expect(data).toBeTruthy()
    expect(data.title).toBe('Hello')
    // gray-matter will typically parse numbers as strings unless explicit, but ensure the key exists
    expect(data.order).toBeDefined()
  })

  it('getAllItems returns items sorted by numeric order when every item has order', () => {
    ;(fs.readdirSync as any).mockReturnValueOnce(['b.md', 'a.md'])
    ;(fs.readFileSync as any).mockImplementation((p: string) => {
      if (p.includes('a.md')) return '---\ntitle: A\norder: 2\n---\nA'
      if (p.includes('b.md')) return '---\ntitle: B\norder: 1\n---\nB'
      return ''
    })

    const items = getAllItems('dir', false)

    expect(items).toHaveLength(2)
    expect(items[0].slug).toBe('b')
    expect(items[1].slug).toBe('a')
    expect(Number(items[0].data.order)).toBeLessThan(
      Number(items[1].data.order)
    )
  })

  it('getAllItems shuffles when shuffle=true and no order keys exist', () => {
    ;(fs.readdirSync as any).mockReturnValueOnce([
      'one.md',
      'two.md',
      'three.md'
    ])
    ;(fs.readFileSync as any).mockImplementation((p: string) => {
      if (p.includes('one.md')) return '---\ntitle: one\n---\none'
      if (p.includes('two.md')) return '---\ntitle: two\n---\ntwo'
      if (p.includes('three.md')) return '---\ntitle: three\n---\nthree'
      return ''
    })

    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.42)
    try {
      const items = getAllItems('dir', true)

      expect(items).toHaveLength(3)
      // Ensure the shuffle branch executed by checking Math.random was called
      expect(randomSpy).toHaveBeenCalled()
    } finally {
      randomSpy.mockRestore()
    }
  })
})
