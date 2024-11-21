import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Contribute' }).click();
  await page.getByPlaceholder('Marthas fresh eggs').click();
  await page.getByPlaceholder('Marthas fresh eggs').fill('b');
  await page.getByPlaceholder('Blueberry lane').click();
  await page.getByPlaceholder('Blueberry lane').click();
  await page.getByPlaceholder('Blueberry lane').dblclick();
  await page.locator('div').filter({ hasText: /^\+− Leaflet \| © OpenStreetMap contributors$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^\+− Leaflet \| © OpenStreetMap contributors$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^\+− Leaflet \| © OpenStreetMap contributors$/ }).nth(1).click({
    button: 'right'
  });
  await page.getByPlaceholder('marthasEggs@organic.com').click();
  await page.getByPlaceholder('marthasEggs@organic.com').fill('I');
  await page.getByPlaceholder('marthasEggs@organic.com').click();
  await page.getByPlaceholder('-456-7890').click();
  await page.getByPlaceholder('-456-7890').fill('1');
  await page.locator('#description').click();
  await page.locator('#description').fill('g');
  await page.getByLabel('Parking available').check();
  await page.getByPlaceholder('www.marthaeggs.com').click();
  await page.getByPlaceholder('@eggs_by_martha').click();
  await page.getByPlaceholder('@eggs_by_martha').fill('@');
  await page.getByPlaceholder('www.facebook.com/').click();
  await page.getByPlaceholder('John Doe').click();
  await page.getByPlaceholder('John Doe').fill('J');
  await page.getByPlaceholder('contributor@example.com').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByPlaceholder('www.marthaeggs.com').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).dblclick();
  await page.locator('div').filter({ hasText: /^Instagram$/ }).click();
  await page.getByPlaceholder('www.marthaeggs.com').click();
  await page.getByPlaceholder('www.marthaeggs.com').fill('www.martha.co');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});