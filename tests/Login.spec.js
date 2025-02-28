import { expect, test } from '@playwright/test';

  test('should display "Get Started!" title', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await expect(page.locator('text=Get Started!')).toBeVisible();
  });

  test('should display "Password" placeholder text', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await expect(page.locator('text=Password')).toBeVisible();
  });

  test('should display "Remember me" label', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await expect(page.locator('text=Remember me')).toBeVisible();
  });

  test('should display "Forgot Password?" link text', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await expect(page.locator('text=Forgot Password?')).toBeVisible();
  });

  test('should display "Create an account" link text', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await expect(page.locator('text=Create an account')).toBeVisible();
  });

