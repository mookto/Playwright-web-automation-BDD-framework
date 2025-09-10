import report from 'multiple-cucumber-html-reporter';
import open from 'open';
report.generate({
  jsonDir: 'reports',  // cucumber JSON report folder
  reportPath: 'reports/extent-report',  // final extent style report
  metadata:{
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '11'
    }
  },
  customData: {
    title: 'Project Info',
    data: [
      {label: 'Project', value: 'Playwright BDD POM'},
      {label: 'Release', value: '1.0.0'},
      {label: 'Execution Start Time', value: new Date().toLocaleString()},
      {label: 'Execution End Time', value: new Date().toLocaleString()}
    ]
  }
});
