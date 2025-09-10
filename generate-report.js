import reporter from "cucumber-html-reporter";

const options = {
  theme: "bootstrap",
  jsonFile: "reports/cucumber-report.json",   // এখানে JSON ফাইলের সঠিক path
  output: "reports/cucumber-report.html",     // HTML report এখানে save হবে
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Firefox",
    "Platform": "Windows 10"
  }
};

reporter.generate(options);
