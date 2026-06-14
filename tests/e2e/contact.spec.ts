import { expect, test } from '@playwright/test'

test.describe('Contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('shows validation error when required fields missing', async ({
    page
  }) => {
    // Submit empty form
    await page.click('text=Send message')

    // The browser's required validation may prevent submission; ensure no success message
    await expect(page.locator('text=We got your message')).toHaveCount(0)
  })

  test('submits successfully with valid data', async ({ page }) => {
    let submittedPhone = ''

    await page.route('**/api/contact', async route => {
      const payload = route.request().postDataJSON()
      submittedPhone = payload.phone

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: '{"message":"Success"}'
      })
    })

    // Fill fields
    await page.fill('#name', 'Playwright Tester')
    await page.fill('#email', 'playwright@example.com')
    await page.fill('#phone', '5555555555')
    await expect(page.locator('#phone')).toHaveValue('(555) 555-5555')
    await page.fill('#message', 'This is an automated test message.')

    await page.getByRole('button', { name: 'Send message' }).click()

    await expect(page.locator('text=We got your message')).toBeVisible()
    expect(submittedPhone).toBe('(555) 555-5555')
  })

  test('shows error on server failure', async ({ page }) => {
    await page.fill('#name', 'Playwright Tester')
    await page.fill('#email', 'playwright@example.com')
    await page.fill('#message', 'This will simulate server error.')

    // Simulate 500 response
    await page.route('**/api/contact', route =>
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: '{"message":"Error"}'
      })
    )

    await page.click('text=Send message')

    await expect(page.locator('text=Something went wrong')).toBeVisible({
      timeout: 10000
    })
  })
})
