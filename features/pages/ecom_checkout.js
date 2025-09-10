export class EcomCheckOut {
  /** @param {import('playwright').Page} page */
  constructor(page) {
    this.page = page;

    // Update selectors according to your app

    this.paymentbtn = page.getByRole('button', { name: 'Proceed to Payment' })

  }

  async submitOrder() {
    await this.page.getByRole('combobox').first().selectOption('332121');
    await this.paymentbtn.click()
  }

}