import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
// import testData from '../TestData/data.json';
import testData from '../TestData/data.json';

const { Given, When, Then } = createBdd();

Given('user is on login page', async ({ page }) => {
    console.log("test using gihubActions")
  await new LoginPage(page).BrowseURL(testData.URL);
  await page.waitForTimeout(2000);

    
  }
);

When('user enters valid username', async ({ page }) => {
  await new LoginPage(page).EnterUsername(testData.username);
  await page.waitForTimeout(2000);
});

When('user enters valid password', async ({ page }) => {
  await new LoginPage(page).enterPassword(testData.password);
  await page.waitForTimeout(2000);
});

When('user clicks on login button', async ({ page }) => {
  await new LoginPage(page).ClickLogin();
});

Then('user should be navigated to the home page', async ({ page }) => {
  await expect(page).toHaveURL(/inventory\.html$/);
  await expect(page.getByText('Products', { exact: true })).toBeVisible();
});