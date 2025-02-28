import { expect, test } from "@playwright/test";

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/contact"); // Adjust the URL if needed
  });

  test("Check presence of 'Get in Touch' heading", async ({ page }) => {
    const heading = await page.locator("h1:has-text('Get in Touch')");
    await expect(heading).toBeVisible();
  });

  test("Check presence of 'Contact Us' section title", async ({ page }) => {
    const contactUsTitle = await page.locator("h3:has-text('Contact Us')");
    await expect(contactUsTitle).toBeVisible();
  });

  test("Check if name input field is visible", async ({ page }) => {
    const nameField = await page.locator("input[placeholder='Your Name']");
    await expect(nameField).toBeVisible();
  });

  test("Check if 'Send Message' button is visible and clickable", async ({ page }) => {
    const sendMessageButton = await page.locator("button:has-text('Send Message')");
    await expect(sendMessageButton).toBeVisible();
    await expect(sendMessageButton).toBeEnabled();
  });

  test("Check presence of 'Contact Information' section", async ({ page }) => {
    const contactInfoSection = await page.locator("h2:has-text('Contact Information')");
    await expect(contactInfoSection).toBeVisible();
  });
