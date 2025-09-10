export class EcomLogin {

  /** @param {import('playwright').Page} page */
  constructor(page) {
    this.page = page;

    // Update selectors according to your app
    this.sbtn = page.locator("//button[.//span[text()='Sign In']]");
    this.userInput = page.getByRole('textbox', { name: 'Enter a phone number' })
    this.passInput = page.getByRole('textbox', { name: 'Enter a password' })
    this.loginBtn = page.getByRole('button', { name: 'Sign In', exact: true })
  }
  async website(url) {
    await this.page.goto(url);
  }
  async elogin(user, pass) {
    await this.sbtn.waitFor({ state: 'visible' });
    await this.page.waitForLoadState("networkidle");
    await this.sbtn.click();
    await this.userInput.fill(user);
    await this.passInput.fill(pass);
    await this.loginBtn.click();
  }
}       