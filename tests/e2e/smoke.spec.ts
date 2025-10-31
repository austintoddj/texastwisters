import { expect, test } from '@playwright/test'

// Static top-level routes
const routes = ['/', '/about', '/parents', '/policies', '/contact']

// Program slugs (from src/data/programs/*.md)
const programSlugs = [
  'adult',
  'camp',
  'homeschool',
  'open-gym',
  'parties-events',
  'preschool',
  'recreational',
  'team',
  'tumbling'
]

function basicSmokeAssertions(page) {
  // Ensure the response was ok and basic layout elements exist
  return Promise.all([
    expect(page.locator('header, [role="banner"]')).toHaveCount(1),
    expect(page.locator('footer, [role="contentinfo"]')).toHaveCount(1),
    (async () => {
      const c = await page.locator('h1, h2, [role="main"]').count()
      expect(c).toBeGreaterThan(0)
    })()
  ])
}

for (const route of routes) {
  test.describe(`Smoke: ${route}`, () => {
    test(`loads ${route}`, async ({ page }) => {
      const res = await page.goto(route)
      expect(res && res.ok()).toBeTruthy()

      await basicSmokeAssertions(page)
    })
  })
}

for (const slug of programSlugs) {
  const route = `/programs/${slug}`
  test.describe(`Programs smoke: ${route}`, () => {
    test(`loads ${route}`, async ({ page }) => {
      const res = await page.goto(route)
      expect(res && res.ok()).toBeTruthy()

      // Program pages should show a title and core layout
      await basicSmokeAssertions(page)
      const titleCount = await page.locator('h1, .h1').count()
      expect(titleCount).toBeGreaterThan(0)
    })

    test(`displays program content correctly`, async ({ page }) => {
      await page.goto(route)

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
  })
}

test.describe('Error Handling', () => {
  test('displays 404 page for non-existent routes', async ({ page }) => {
    const res = await page.goto('/non-existent-page')
    expect(res?.status()).toBe(404)

    // Check for 404 content - Next.js default 404 page
    await expect(page.locator('text=404')).toBeVisible()
    await expect(
      page.locator('text=This page could not be found')
    ).toBeVisible()
  })

  test('handles invalid program slugs', async ({ page }) => {
    const res = await page.goto('/programs/invalid-slug')
    expect(res?.status()).toBe(404)

    // Should show 404 page
    await expect(page.locator('text=404')).toBeVisible()
  })

  test('handles malformed URLs gracefully', async ({ page }) => {
    // Test URL with special characters or malformed paths
    const res = await page.goto('/programs/%3Cscript%3Ealert(1)%3C/script%3E')
    // Should either 404 or sanitize input
    expect([200, 404]).toContain(res?.status())
  })
})
