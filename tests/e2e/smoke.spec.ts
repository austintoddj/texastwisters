import { test, expect } from '@playwright/test'

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
  })
}
