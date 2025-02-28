import { expect, test } from "@playwright/test";

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/all-gears"); // Adjust if needed
  });

  test("Check presence of 'Explore All Gears' header", async ({ page }) => {
    const gearsHeader = await page.locator("h1:has-text('Explore All Gears')");
    await expect(gearsHeader).toBeVisible();
  });

  test("Check presence of category buttons", async ({ page }) => {
    const categories = ["All Gears", "Camping", "Trekking", "Outdoor"];
    for (const category of categories) {
      await expect(page.locator(`button:has-text('${category}')`)).toBeVisible();
    }
  });

  test("Check presence of gear items", async ({ page }) => {
    const gearItem = await page.locator(".flip-card"); // Assuming items are in flip-cards
    await expect(gearItem.first()).toBeVisible();
  });


  test("Check presence of 'GoGear' header (navigation)", async ({ page }) => {
    const goGearHeader = await page.locator("h1:has-text('GoGear')");
    await expect(goGearHeader).toBeVisible();
  });

  test("Check presence of footer section", async ({ page }) => {
    const footer = await page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("Check presence of 'Contact Us' section in footer", async ({ page }) => {
    const contactUs = await page.locator("h2:has-text('Contact Us')");
    await expect(contactUs).toBeVisible();
  });

  test("Check presence of 'Address' label in footer", async ({ page }) => {
    const addressLabel = await page.locator("p:has-text('Address:')");
    await expect(addressLabel).toBeVisible();
  });

  test("Check presence of 'Email' label in footer", async ({ page }) => {
    const emailLabel = await page.locator("p:has-text('Email:')");
    await expect(emailLabel).toBeVisible();
  });

