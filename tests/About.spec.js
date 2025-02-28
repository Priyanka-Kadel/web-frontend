import { expect, test } from "@playwright/test";

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/about"); // Adjust the URL if needed
  });

  test("Check presence of 'Your Adventure Starts Here' heading", async ({ page }) => {
    const adventureHeading = await page.locator("h1:has-text('Your Adventure Starts Here')");
    await expect(adventureHeading).toBeVisible();
  });

  test("Check presence of 'Why Choose GoGear?' section title", async ({ page }) => {
    const whyChooseTitle = await page.locator("h3:has-text('Why Choose GoGear?')");
    await expect(whyChooseTitle).toBeVisible();
  });

  test("Check presence of 'Contact Us' section in footer", async ({ page }) => {
    const contactUs = await page.locator("h2:has-text('Contact Us')");
    await expect(contactUs).toBeVisible();
  });
