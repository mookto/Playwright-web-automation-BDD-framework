import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { cfg } from '../../config/config.js';
import { EcomHome } from '../pages/ecom_home.js';
import { EcomLogin } from '../pages/ecom_login.js';
import { EcomCheckOut } from '../pages/ecom_checkout.js';


Given('I am on the ecom login  page', async function () {
  this.elogin = new EcomLogin(this.page)
  this.ehome = new EcomHome(this.page)
  this.echeckout = new EcomCheckOut(this.page)

  this.elogin.website(cfg.ilynURL);
  //this.elogin.website(cfg.ilynURL);
})

When('I log in with valid e com user credentials', async function () {
  await this.elogin.elogin(cfg.creds.ilynuser, cfg.creds.pass);
})


Then('Submit the order', async function () {
  await this.echeckout.submitOrder()
})

Then('Added products to the cart', async function () {
  await this.ehome.orderItems()
})

Then('Check search functionality working', async function () {
  await this.ehome.checksearch();
})

Then('I should see the homepage', async function () {
  console.log("succesfully login ");
})
