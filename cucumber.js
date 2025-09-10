// export default {
//   default: {
//     require: [
//       "./features/step_definitions/**/*.js",
//       "./features/hooks/**/*.js"
//     ],
//     publishQuiet: true,
//     format: [
//       "progress",
//       "json:reports/cucumber-report.json",
//       [
//         "cucumberjs-allure2-reporter",
//         {
//           resultsDir: "allure-results"
//         }
//       ]
//     ],
//     paths: ["features/**/*.feature"],
//     parallel: 1
//   }
// };


export default {
    default: {
        require: ["./step_definitions/**/*.js", "./support/**/*.js"],
        publishQuiet: true,
        format: [
            "progress",
            "html:reports/cucumber-report.html",
            "json:reports/cucumber-report.json"
        ],
        paths: ["features/**/*.feature"],
        parallel: 1
    }
};