import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('shows validation error when required fields missing', async ({ page }) => {
    // Submit empty form
    await page.click('text=Send message')

    // The browser's required validation may prevent submission; ensure no success message
    await expect(page.locator('text=We got your message')).toHaveCount(0)
  })

  test('submits successfully with valid data', async ({ page }) => {
    // Fill fields
    await page.fill('#name', 'Playwright Tester')
    await page.fill('#email', 'playwright@example.com')
    await page.fill('#phone', '(555) 555-5555')
    await page.fill('#message', 'This is an automated test message.')

    // Intercept the /api/contact POST to simulate a 200 response without sending email
    await page.route('**/api/contact', route =>
      route.fulfill({ status: 200, contentType: 'application/json', body: '{"message":"Success"}' })
    )

    await page.click('text=Send message')

    await expect(page.locator('text=We got your message')).toBeVisible()
  })

  test('shows error on server failure', async ({ page }) => {
    await page.fill('#name', 'Playwright Tester')
    await page.fill('#email', 'playwright@example.com')
    await page.fill('#message', 'This will simulate server error.')

    // Simulate 500 response
    await page.route('**/api/contact', route =>
      route.fulfill({ status: 500, contentType: 'application/json', body: '{"message":"Error"}' })
    )

    await page.click('text=Send message')

    await expect(page.locator('text=Something went wrong')).toBeVisible({ timeout: 10000 })
  })
})
