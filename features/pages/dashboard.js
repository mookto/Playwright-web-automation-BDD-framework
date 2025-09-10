export default class Dashboard {
  constructor(page) {
    this.page = page;

    // Selectors
    this.my_dashboard = page.getByRole('tab', { name: 'My Dashboard' });
    this.payslip_january = page.getByText('Leave Encashment 2024');
    this.close_payslip = page.getByRole('button', { name: 'close' });
    this.notice_board = page.getByRole('button', { name: 'Notice Board' });
  }

  async viewPayslip() {
    await this.my_dashboard.click();
    await this.payslip_january.click();
    await this.page.waitForTimeout(5000);
    await this.close_payslip.click();
  }

  async viewNoticeBoard() {
    await this.notice_board.click();

  }
}
