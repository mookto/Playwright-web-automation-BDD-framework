import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { firefox } from 'playwright';
import { AllureRuntime } from 'allure-js-commons';   // ✅ এটা এখান থেকে কাজ করবে
import { cfg } from '../../config/config.js';

setDefaultTimeout(60 * 1000);

const allureRuntime = new AllureRuntime({ resultsDir: 'allure-results' });

Before(async function () {
  this.browser = await firefox.launch({ headless: false, slowMo: cfg.slowMo });
  this.context = await this.browser.newContext({ viewport: cfg.viewport });
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED' && this.page) {
    const screenshot = await this.page.screenshot();
    allureRuntime.writeAttachment(
      'Failure Screenshot',
      screenshot,
      'image/png'
    );
  }

  if (this.page && !this.page.isClosed()) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});



// import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
// import { firefox } from 'playwright';
// import { cfg } from '../../config/config.js';  // config use করলে headless, slowMo, viewport সব central থাকবে

// setDefaultTimeout(60 * 1000);

// Before(async function () {
//   // Browser launch
//   this.browser = await firefox.launch({ headless: false, slowMo: cfg.slowMo });

//   // New context (viewport config use করা হলো)
//   this.context = await this.browser.newContext({ viewport: cfg.viewport });

//   // New page
//   this.page = await this.context.newPage();
// });

// // After(async function () {
// //   // page/context/browser সব আলাদা আলাদা cleanup
// //   if (this.page && !this.page.isClosed()) {
// //     await this.page.close();
// //   }
// //   if (this.context) {
// //     await this.context.close();
// //   }
// //   if (this.browser) {
// //     await this.browser.close();
// //   }

// // });
// After(async function (scenario) {
//   // যদি scenario fail করে তবে screenshot নেবে
//   if (scenario.result?.status === 'FAILED') {
//     await this.page.screenshot({ path: `./screenshots/${Date.now()}.png` });
//   }

//   // Cleanup
//   await this.context.close();
//   await this.browser.close();
// });


// // import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
// // import { chromium } from 'playwright';
// // import { cfg } from '../../config/config.js';  // config use করলে headless, slowMo, viewport সব central থাকবে

// // setDefaultTimeout(60 * 1000);

// // Before(async function () {
// //   // Browser launch
// //   this.browser = await chromium.launch({ headless: cfg.headless, slowMo: cfg.slowMo });

// //   // New context (viewport config use করা হলো)
// //   this.context = await this.browser.newContext({ viewport: cfg.viewport });

// //   // New page
// //   this.page = await this.context.newPage();
// // });

// // After(async function (scenario) {
// //   // যদি scenario fail করে তবে screenshot নেবে
// //   if (scenario.result?.status === 'FAILED') {
// //     await this.page.screenshot({ path: `./screenshots/${Date.now()}.png` });
// //   }

// //   // Cleanup
// //   await this.context.close();
// //   await this.browser.close();
// // });
