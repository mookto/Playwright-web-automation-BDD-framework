export default class LoginPage {
  /** @param {import('playwright').Page} page */
  constructor(page) {
    this.page = page;

    // Update selectors according to your app
    this.userInput = page.getByRole('textbox', { name: 'Email address' });
    this.passInput = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'Log In', exact: true });
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login_s(user, pass) {
    await this.userInput.fill(user);
    await this.passInput.fill(pass);
    await this.loginBtn.click();
  }


}