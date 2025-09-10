export class EcomHome {

  /** @param {import('playwright').Page} page */
  constructor(page) {
    this.page = page;

    // Update selectors according to your app
    this.homemenu = page.getByRole('link', { name: 'Eid Collection' });
    this.itemclick = page.locator('div').filter({ hasText: /^Sale$/ }).getByRole('link');
    this.addcart = page.getByRole('button', { name: 'ADD TO BAG' });
    this.selectsize = page.locator("//a[normalize-space()='2XL']");
    this.checkoutbtn = page.getByRole('button', { name: 'Checkout' })
    this.searchicon = page.locator("//button[contains(text(),'Search')]")
    this.searchtxt = page.getByRole('textbox', { name: 'Search...' })
    this.searchbtn = page.getByRole('button', { name: 'Search', exact: true })
  }

  async orderItems() {
    await this.homemenu.click();
    await this.itemclick.click()
    await this.selectsize.click()
    await this.addcart.click()
    await this.checkoutbtn.click()
  }
  async checksearch() {
    await this.searchicon.click()
    await this.searchtxt.fill('sahara')
    await this.searchbtn.click()

  }

}