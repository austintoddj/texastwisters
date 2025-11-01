import { getProgramSlugs } from './utils'
import { Page, expect, test } from '@playwright/test'

// Program slugs (from src/data/programs/*.md)
const programSlugs = getProgramSlugs()

async function basicSmokeAssertions(page: Page) {
  // Ensure the response was ok and basic layout elements exist
  await expect(page.locator('header, [role="banner"]')).toHaveCount(1)
  await expect(page.locator('footer, [role="contentinfo"]')).toHaveCount(1)
  const c = await page.locator('h1, h2, [role="main"]').count()
  expect(c).toBeGreaterThan(0)
}

// Static smoke tests for top-level routes
test.describe('Smoke Tests', () => {
  test('loads homepage', async ({ page }) => {
    const res = await page.goto('/')
    expect(res && res.ok()).toBeTruthy()
    await basicSmokeAssertions(page)
  })

  test('loads about page', async ({ page }) => {
    const res = await page.goto('/about')
    expect(res && res.ok()).toBeTruthy()
    await basicSmokeAssertions(page)
  })

  test('loads parents page', async ({ page }) => {
    const res = await page.goto('/parents')
    expect(res && res.ok()).toBeTruthy()
    await basicSmokeAssertions(page)
  })

  test('loads policies page', async ({ page }) => {
    const res = await page.goto('/policies')
    expect(res && res.ok()).toBeTruthy()
    await basicSmokeAssertions(page)
  })

  test('loads contact page', async ({ page }) => {
    const res = await page.goto('/contact')
    expect(res && res.ok()).toBeTruthy()
    await basicSmokeAssertions(page)
  })
})

// Dynamic program smoke tests
test.describe('Program Smoke Tests', () => {
  for (const slug of programSlugs) {
    test(`loads /programs/${slug}`, async ({ page }) => {
      const res = await page.goto(`/programs/${slug}`)
      expect(res && res.ok()).toBeTruthy()

      // Program pages should show a title and core layout
      await basicSmokeAssertions(page)
      const titleCount = await page.locator('h1, .h1').count()
      expect(titleCount).toBeGreaterThan(0)
    })

    test(`displays ${slug} program content correctly`, async ({ page }) => {
      await page.goto(`/programs/${slug}`)

      // Check for program title (hero headline)
      const heroHeadline = page.locator('h2.h1, .h1').first()
      await expect(heroHeadline).toBeVisible()
      await expect(heroHeadline).not.toBeEmpty()

      // Check for description text
      const descriptionText = page
        .locator('[data-testid="program-description"], .prose, p')
        .first()
      await expect(descriptionText).toBeVisible()

      // Check for pricing section if it exists
      const pricingSection = page
        .locator(
          '[data-testid="pricing-section"], .pricing, [class*="pricing"]'
        )
        .first()
      // Pricing might not exist for all programs, so check if present
      const pricingCount = await pricingSection.count()
      if (pricingCount > 0) {
        await expect(pricingSection).toBeVisible()
        // Check for price elements
        const priceElements = pricingSection.locator(
          '[data-testid="price"], .price, [class*="price"]'
        )
        await expect(priceElements.first()).toBeVisible()
      }

      // Check images load (hero image and any content images)
      const images = page.locator('img')
      const imageCount = await images.count()
      if (imageCount > 0) {
        // Check at least one image loaded successfully
        const firstImg = images.first()
        const naturalWidth = await firstImg.evaluate(
          el => (el as HTMLImageElement).naturalWidth
        )
        expect(naturalWidth).toBeGreaterThan(0)
      }
    })
  }
})

test.describe('Error Handling', () => {
  test('displays 404 page for non-existent routes', async ({ page }) => {
    const res = await page.goto('/non-existent-page')
    expect(res?.status()).toBe(404)

    // Check for custom 404 content
    await expect(page.locator('text=Page Not Found')).toBeVisible()
    await expect(
      page.locator("text=The page you're looking for doesn't exist")
    ).toBeVisible()
  })

  test('handles invalid program slugs', async ({ page }) => {
    const res = await page.goto('/programs/invalid-slug')
    expect(res?.status()).toBe(404)

    // Should show custom 404 page
    await expect(page.locator('text=Page Not Found')).toBeVisible()
  })

  test('handles malformed URLs gracefully', async ({ page }) => {
    // Test URL with special characters or malformed paths
    const res = await page.goto('/programs/%3Cscript%3Ealert(1)%3C/script%3E')
    // Should either 404 or sanitize input
    expect([200, 404]).toContain(res?.status())
  })
})
