import { expect, test } from "@playwright/test";

test("Check presence of 'Gear Type' label", async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  const gearTypeLabel = await page.locator("label:has-text('Gear Type')");
  await expect(gearTypeLabel).toBeVisible();
});

test("Check presence of 'Rental Date' label", async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  const rentalDateLabel = await page.locator("label:has-text('Rental Date')");
  await expect(rentalDateLabel).toBeVisible();
});

test("Check presence of 'Choose the Gears You Need' header", async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  const gearsHeader = await page.locator("h2:has-text('Choose the Gears You Need')");
  await expect(gearsHeader).toBeVisible();
});


test("Check presence of 'Rent Now' button text", async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  const rentNowButton = await page.locator("button:has-text('Rent Now')");
  await expect(rentNowButton).toBeVisible();
});

test("Check presence of 'Welcome Back!' text (Hero section)", async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  const welcomeText = await page.locator("h1:has-text('Experience the Gears Like Never Before')");
  await expect(welcomeText).toBeVisible();
});

test("Check presence of 'Contact Us' header in footer", async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  const contactUsHeader = await page.locator("h2:has-text('Contact Us')");
  await expect(contactUsHeader).toBeVisible();
});

test("Check presence of 'Address' label in footer", async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  const addressLabel = await page.locator("p:has-text('Address:')");
  await expect(addressLabel).toBeVisible();
});

test("Check presence of 'Email' label in footer", async ({ page }) => {
  await page.goto('http://localhost:5173/dashboard');
  const emailLabel = await page.locator("p:has-text('Email:')");
  await expect(emailLabel).toBeVisible();
});
