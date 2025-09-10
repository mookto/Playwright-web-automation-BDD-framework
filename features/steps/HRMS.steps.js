import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { cfg } from '../../config/config.js';
import LoginPage from '../pages/login.js';  // default export তাই {} দরকার নাই
import Dashboard from '../pages/dashboard.js';


Given('I am on the login page', async function () {
  this.login = new LoginPage(this.page);
  this.dash = new Dashboard(this.page);
  await this.login.goto(cfg.baseURL);
});

When('I log in with valid credentials', async function () {
  await this.login.login_s(cfg.creds.user, cfg.creds.pass);
});

When('I log in with Supervisor  credentials', async function () {
  await this.login.login_s(cfg.creds.suser, cfg.creds.pass);
});

Then('I should see the dashboard', async function () {

  await expect(this.page).toHaveURL('https://stagingv2.smartoffice.ai/people');

});


Then('View payslip details', async function () {
  // ✅ this.page ব্যবহার করতে হবে
  await this.dash.viewPayslip();

});

Then('Check noticeboard view', async function () {
  this.dash = new Dashboard(this.page);   // ✅ same fix
  await this.dash.viewNoticeBoard();
  await this.page.waitForTimeout(4000);
  await expect(this.page).toHaveURL('https://stagingv2.smartoffice.ai/people/notice-board');
  console.log("You are passed ")
});


