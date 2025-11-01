import { expect, test } from '@playwright/test'

// Static top-level routes
const routes = ['/', '/about', '/parents', '/policies', '/contact']

test.describe('Navigation', () => {
  test.describe('Desktop Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 768 })
      await page.goto('/')
    })

    test('navigates to top-level pages', async ({ page }) => {
      for (const route of routes) {
        await page.goto(route)
        // Check URL
        await expect(page).toHaveURL(route)

        // Check active state - the link should have active styling
        const linkText =
          route === '/'
            ? 'Home'
            : route.slice(1).charAt(0).toUpperCase() + route.slice(2)
        const activeLink = page.locator(`nav span:has-text("${linkText}")`)
        await expect(activeLink).toHaveClass(/text-purple-600/)
      }
    })

    test('programs dropdown navigation', async ({ page }) => {
      // Click Programs dropdown button
      await page.click('nav button:has-text("Programs")')

      // Check dropdown appears
      const dropdown = page.locator('[role="menu"]')
      await expect(dropdown).toBeVisible()

      // Click first program link
      const firstProgramLink = dropdown.locator('a').first()
      const href = await firstProgramLink.getAttribute('href')
      // Ensure href is defined before using it in toHaveURL
      expect(href).toBeTruthy()
      await firstProgramLink.click()

      // Check navigation
      await expect(page).toHaveURL(href as string)

      // Note: Programs button doesn't have special active state on program pages
    })
  })

  test.describe('Mobile Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })
      await page.goto('/')
    })

    test('hamburger menu opens and closes', async ({ page }) => {
      // Menu should be closed initially
      const popover = page.locator('.absolute.inset-x-0.top-0.z-40')
      await expect(popover).not.toBeVisible()

      // Click hamburger
      await page.click('[aria-label="Toggle Navigation"]')

      // Menu should open
      await expect(popover).toBeVisible()

      // Click again to close
      await page.click('[aria-label="Toggle Navigation"]')

      // Menu should close
      await expect(popover).not.toBeVisible()
    })

    test('mobile navigation links work', async ({ page }) => {
      // Open menu
      await page.click('[aria-label="Toggle Navigation"]')

      // Wait for mobile menu to be visible
      const popover = page.locator('.absolute.inset-x-0.top-0.z-40')
      await expect(popover).toBeVisible()

      // Click About link in mobile menu
      await popover.locator('text=About').click()

      // Check navigation
      await expect(page).toHaveURL('/about')

      // Menu should close after navigation
      await expect(popover).not.toBeVisible()
    })

    test('mobile programs navigation', async ({ page }) => {
      // Open menu
      await page.click('[aria-label="Toggle Navigation"]')

      // Wait for mobile menu to be visible
      const popover = page.locator('.absolute.inset-x-0.top-0.z-40')
      await expect(popover).toBeVisible()

      // Click first program link in mobile menu
      const firstProgramLink = page
        .locator('.absolute.inset-x-0.top-0.z-40 a[href^="/programs/"]')
        .first()
      const href = await firstProgramLink.getAttribute('href')
      // Ensure href is defined before using it in toHaveURL
      expect(href).toBeTruthy()
      await firstProgramLink.click()

      // Check navigation
      await expect(page).toHaveURL(href as string)

      // Menu should close
      await expect(popover).not.toBeVisible()
    })
  })
})
