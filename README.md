# Playwright-web-automation-BDD-framework

[![JavaScript](https://img.shields.io/badge/JavaScript-v14%2B-blue)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Playwright](https://img.shields.io/badge/Playwright-v1.20.0-blue)](https://playwright.dev/)
[![Cucumber](https://img.shields.io/badge/Cucumber-BDD-yellowgreen)](https://cucumber.io/)
[![ExtentReports](https://img.shields.io/badge/ExtentReports-HTML%20Reports-brightgreen)](https://www.extentreports.com/)

> A robust **Web Application Automation** framework using **Playwright**, **BDD**, **POM (Page Object Model)**, and **JavaScript** for automated testing with **ExtentReports** integration for professional HTML reporting.

---

## 🚀 Project Features

- **BDD (Behavior Driven Development)** approach using **Cucumber** and **Playwright**.
- **POM (Page Object Model)** design pattern for test maintenance and reusability.
- **Automated Web Application Testing** using **Playwright**.
- **ExtentReports Integration** for beautiful and detailed HTML reports.
- **Parallel Test Execution** and **Cross-Browser Testing** capabilities.
- **Screenshots and Video Capturing** on test failure.
- **Customizable Configurations** with `config.js` and `playwright.config.js`.

---

## 🛠 Technology Stack

- **JavaScript** (Node.js)
- **Playwright** for end-to-end testing
- **BDD** with **Cucumber**
- **Page Object Model** (POM)
- **ExtentReports** for reporting
- **NPM** for package management

---

## ⚙️ Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (Node package manager)
- **Playwright** (v1.20 or later)

- **Cucumber** for BDD

---

## 📝 Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mookto/Playwright-web-automation-BDD-framework.git
cd Playwright-BDD-POM-Web-Application-Automation
```
### 2. Install Project Dependencies
```bash
npm install
```
### 3. Configure Playwright
```bash
npx playwright install
```
###🏃‍♂️ Running the Tests 
```bash
npx cucumber-js
npx cucumber-js features/login.feature
npx cucumber-js --tags "@smoke"
npx cucumber-js --format json:reports/cucumber-report.json
npm run test:report
```
### 📊 Reports & Screenshots

- ExtentReports will generate a detailed HTML report, including:
  - Test pass/fail status
  - Screenshots and videos for failed tests
  - Detailed logs for each test step
- Screenshots and Videos: Playwright will automatically capture screenshots and videos of failed tests. These are stored in the reports/screenshots/ and reports/videos/ directories.



## 🤝 Contributing

We welcome contributions! To contribute to this repository:
- Fork the repository.
- Create a feature/bugfix branch.
- Commit your changes with descriptive commit messages.
- Submit a Pull Request for review.
