import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async BrowseURL(url: string) {
    await this.page.goto(url);
  }

  async EnterUsername(username: string) {
    await this.username.fill(username);
  }

  async enterPassword(password: string) {
    await this.password.fill(password);
  }

  async ClickLogin() {
    await this.loginButton.click();
  }
  async Screenshot(Step:String){
    await this.page.screenshot({ path: "./Screens/Screenshot"+Step+".png" });
  }
}
