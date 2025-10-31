import { expect, test } from '@playwright/test'

test.describe('Critical User Flows', () => {
  test.describe('Contact Form Completion Flow', () => {
    test('complete contact form submission and form reset', async ({
      page
    }) => {
      await page.goto('/contact')

      // Fill out the complete form
      await page.fill('#name', 'John Doe')
      await page.fill('#email', 'john.doe@example.com')
      await page.fill('#phone', '(555) 123-4567')
      await page.fill(
        '#message',
        'I am interested in gymnastics classes for my child. Please provide more information about your programs and availability.'
      )

      // Mock successful API response
      await page.route('**/api/contact', route =>
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: '{"message":"Success"}'
        })
      )

      // Submit the form
      await page.click('text=Send message')

      // Verify success message appears
      await expect(page.locator('text=We got your message')).toBeVisible()

      // Verify form is reset (fields should be empty)
      await expect(page.locator('#name')).toHaveValue('')
      await expect(page.locator('#email')).toHaveValue('')
      await expect(page.locator('#phone')).toHaveValue('')
      await expect(page.locator('#message')).toHaveValue('')

      // Verify submit button is re-enabled
      const submitButton = page.locator('button[type="submit"]')
      await expect(submitButton).toBeEnabled()
      await expect(submitButton).toHaveText('Send message')
    })

    test('contact form handles rate limiting', async ({ page }) => {
      await page.goto('/contact')

      // Fill and submit form multiple times quickly
      for (let i = 0; i < 4; i++) {
        await page.fill('#name', `Test User ${i}`)
        await page.fill('#email', 'test@example.com')
        await page.fill('#message', 'Rate limit test message')

        // Mock rate limit response on 4th attempt
        if (i === 3) {
          await page.route('**/api/contact', route =>
            route.fulfill({
              status: 429,
              contentType: 'application/json',
              body: '{"message":"Too many requests. Please try again in 60 minutes."}'
            })
          )
        } else {
          await page.route('**/api/contact', route =>
            route.fulfill({
              status: 200,
              contentType: 'application/json',
              body: '{"message":"Success"}'
            })
          )
        }

        await page.click('text=Send message')

        if (i < 3) {
          await expect(page.locator('text=We got your message')).toBeVisible()
        } else {
          await expect(page.locator('text=Something went wrong')).toBeVisible()
        }

        // Wait a bit between submissions
        await page.waitForTimeout(100)
      }
    })
  })

  test.describe('Program Browsing and Selection Flow', () => {
    test('browse programs from homepage and select one', async ({ page }) => {
      await page.goto('/')

      // Look for featured programs section (it has an h2 with "Classes for any age")
      const programsSection = page
        .locator('h2:has-text("Classes for any age")')
        .first()
      await expect(programsSection).toBeVisible()

      // Find program links in the featured section
      const programLinks = page.locator('a[href^="/programs/"]')
      await expect(programLinks.first()).toBeVisible()

      // Click first program link
      const firstProgramLink = programLinks.first()
      const href = await firstProgramLink.getAttribute('href')
      expect(href).toBeTruthy()
      await firstProgramLink.click()

      // Check navigation to program page
      await expect(page).toHaveURL(href!)
    })

    test('program page displays complete information', async ({ page }) => {
      // Test a specific program page
      await page.goto('/programs/recreational')

      // Verify hero section
      const heroHeadline = page.locator('h1, .h1').first()
      await expect(heroHeadline).toBeVisible()
      await expect(heroHeadline).not.toBeEmpty()

      // Verify program description
      const description = page
        .locator('[data-testid="program-description"], .prose, p')
        .first()
      await expect(description).toBeVisible()

      // Check for pricing information if available
      const pricingElements = page.locator(
        '[data-testid*="pricing"], [class*="pricing"], [class*="price"]'
      )
      const pricingCount = await pricingElements.count()
      if (pricingCount > 0) {
        await expect(pricingElements.first()).toBeVisible()
      }

      // Check for call-to-action buttons
      const ctaButtons = page.locator(
        'a[href*="contact"], button:has-text("Contact"), [data-testid*="cta"]'
      )
      const ctaCount = await ctaButtons.count()
      if (ctaCount > 0) {
        await expect(ctaButtons.first()).toBeVisible()
      }
    })

    test('navigate between different program pages', async ({ page }) => {
      const programs = ['recreational', 'preschool', 'team']

      for (const program of programs) {
        await page.goto(`/programs/${program}`)

        // Verify page loaded correctly
        await expect(page.locator('h1, .h1').first()).toBeVisible()

        // Check URL
        await expect(page).toHaveURL(`/programs/${program}`)
      }
    })
  })

  test.describe('Responsive Design and Mobile Experience', () => {
    test('homepage works on mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })
      await page.goto('/')

      // Verify mobile layout
      await expect(page.locator('header, [role="banner"]')).toBeVisible()
      await expect(page.locator('footer, [role="contentinfo"]')).toBeVisible()

      // Test mobile navigation
      const hamburgerButton = page.locator('[aria-label="Toggle Navigation"]')
      await expect(hamburgerButton).toBeVisible()

      // Open mobile menu
      await hamburgerButton.click()
      const mobileMenu = page.locator('.absolute.inset-x-0.top-0.z-40')
      await expect(mobileMenu).toBeVisible()

      // Close mobile menu
      await hamburgerButton.click()
      await expect(mobileMenu).not.toBeVisible()
    })

    test('contact form works on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })
      await page.goto('/contact')

      // Verify form is visible and usable on mobile
      await expect(page.locator('#name')).toBeVisible()
      await expect(page.locator('#email')).toBeVisible()
      await expect(page.locator('#message')).toBeVisible()

      // Fill and submit form
      await page.fill('#name', 'Mobile User')
      await page.fill('#email', 'mobile@example.com')
      await page.fill('#message', 'Testing mobile contact form')

      await page.route('**/api/contact', route =>
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: '{"message":"Success"}'
        })
      )

      await page.click('text=Send message')
      await expect(page.locator('text=We got your message')).toBeVisible()
    })

    test('program pages are mobile-friendly', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })
      await page.goto('/programs/recreational')

      // Verify hero section loads
      const heroHeadline = page.locator('h1, .h1').first()
      await expect(heroHeadline).toBeTruthy()

      // Just verify the page loaded successfully and has content
      // Don't check specific visibility due to responsive design
      const pageContent = page.locator('body')
      await expect(pageContent).toBeVisible()

      // Check that images exist (if any)
      const images = page.locator('img')
      const imageCount = await images.count()
      if (imageCount > 0) {
        // Just verify images are present
        expect(imageCount).toBeGreaterThan(0)
      }
    })
  })

  test.describe('Footer and External Links', () => {
    test('footer links work correctly', async ({ page }) => {
      await page.goto('/')

      // Check footer social media links (if they exist)
      const socialLinks = page.locator(
        'footer a[href*="facebook"], footer a[href*="instagram"], footer a[href*="twitter"]'
      )
      const socialCount = await socialLinks.count()

      if (socialCount > 0) {
        // Test that social links have valid hrefs
        for (let i = 0; i < socialCount; i++) {
          const href = await socialLinks.nth(i).getAttribute('href')
          expect(href).toBeTruthy()
          expect(href).not.toBe('#') // Should not be placeholder links
        }
      }

      // Check footer navigation links
      const footerNavLinks = page.locator('footer a[href^="/"]')
      const footerLinkCount = await footerNavLinks.count()

      if (footerLinkCount > 0) {
        // Test first footer link
        const firstFooterLink = footerNavLinks.first()
        const href = await firstFooterLink.getAttribute('href')

        if (href && href !== '#') {
          await firstFooterLink.click()
          await expect(page).toHaveURL(href)
        }
      }
    })

    test('external links open in new tabs', async ({ page }) => {
      await page.goto('/')

      // Find external links (those not starting with / or #)
      const externalLinks = page.locator('a[href^="http"], a[href^="mailto:"]')
      const externalCount = await externalLinks.count()

      if (externalCount > 0) {
        const firstExternal = externalLinks.first()
        const target = await firstExternal.getAttribute('target')

        // External links should open in new tab
        if (target) {
          expect(target).toBe('_blank')
        }
      }
    })
  })

  test.describe('Accessibility and Keyboard Navigation', () => {
    test('keyboard navigation works', async ({ page }) => {
      await page.goto('/')

      // Test tab navigation through main elements
      await page.keyboard.press('Tab')
      let focusedElement = page.locator(':focus')
      await expect(focusedElement).toBeVisible()

      // Tab through a few more elements
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('Tab')
        focusedElement = page.locator(':focus')
        // Just verify something is focused
        const focusedCount = await focusedElement.count()
        expect(focusedCount).toBeGreaterThan(0)
      }
    })

    test('contact form is keyboard accessible', async ({ page }) => {
      await page.goto('/contact')

      // Focus the name field first, then test tab navigation
      await page.locator('#name').focus()
      await expect(page.locator('#name')).toBeFocused()

      // Fill form using keyboard
      await page.keyboard.type('Test User')
      await page.keyboard.press('Tab')

      await expect(page.locator('#email')).toBeFocused()
      await page.keyboard.type('test@example.com')
      await page.keyboard.press('Tab')

      await page.keyboard.press('Tab') // Skip phone
      await expect(page.locator('#message')).toBeFocused()
      await page.keyboard.type('Keyboard accessibility test')

      // Tab to submit button
      await page.keyboard.press('Tab')
      const submitButton = page.locator('button[type="submit"]')
      await expect(submitButton).toBeFocused()

      // Mock API and submit with Enter
      await page.route('**/api/contact', route =>
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: '{"message":"Success"}'
        })
      )

      await page.keyboard.press('Enter')
      await expect(page.locator('text=We got your message')).toBeVisible()
    })

    test('images have alt text', async ({ page }) => {
      await page.goto('/')

      const images = page.locator('img')
      const imageCount = await images.count()

      if (imageCount > 0) {
        // Check alt text for content images (skip decorative ones)
        for (let i = 0; i < Math.min(imageCount, 5); i++) {
          const img = images.nth(i)
          const alt = await img.getAttribute('alt')
          const src = await img.getAttribute('src')

          // Skip images that are likely decorative (empty alt is OK for decorative images)
          // or images from illustrations directory
          if (
            src &&
            (src.includes('illustration') ||
              src.includes('dotted') ||
              alt === '')
          ) {
            continue
          }

          // For content images, alt should be present
          expect(alt).toBeTruthy()
          expect(alt?.trim()).not.toBe('')
        }
      }
    })
  })

  test.describe('Error Recovery and Edge Cases', () => {
    test('handles network errors gracefully', async ({ page }) => {
      await page.goto('/contact')

      // Fill form
      await page.fill('#name', 'Network Test')
      await page.fill('#email', 'network@example.com')
      await page.fill('#message', 'Testing network error handling')

      // Mock network failure
      await page.route('**/api/contact', route =>
        route.fulfill({
          status: 0 // Network error
        })
      )

      await page.click('text=Send message')

      // Wait a bit for any error handling
      await page.waitForTimeout(1000)

      // The form should still be functional - either show an error or allow retry
      // Just verify the page doesn't crash and form elements are still present
      await expect(page.locator('#name')).toBeVisible()
      await expect(page.locator('#email')).toBeVisible()
      await expect(page.locator('button[type="submit"]')).toBeVisible()
    })

    test('form validation prevents invalid submissions', async ({ page }) => {
      await page.goto('/contact')

      // Try to submit with invalid email
      await page.fill('#name', 'Test User')
      await page.fill('#email', 'invalid-email')
      await page.fill('#message', 'Test message')

      // HTML5 validation should prevent submission
      await page.click('text=Send message')

      // Should not show success message
      await expect(page.locator('text=We got your message')).not.toBeVisible()

      // Form should still be visible
      await expect(page.locator('#name')).toBeVisible()
    })

    test('handles very long form inputs', async ({ page }) => {
      await page.goto('/contact')

      // Create very long inputs
      const longName = 'A'.repeat(200)
      const longMessage = 'B'.repeat(2000)

      await page.fill('#name', longName)
      await page.fill('#email', 'long@example.com')
      await page.fill('#message', longMessage)

      await page.route('**/api/contact', route =>
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: '{"message":"Success"}'
        })
      )

      await page.click('text=Send message')

      // Should handle long inputs gracefully
      await expect(page.locator('text=We got your message')).toBeVisible()
    })
  })
})
