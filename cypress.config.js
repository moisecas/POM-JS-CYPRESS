const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://web.talana.com', 
    specPattern: "cypress/e2e/features/**/*.feature", 
    watchForFileChanges: false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000
  },
});

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     specPattern: "cypress/e2e/features/*/*.feature",
//     baseUrl: "https://qa-remuchile.talana.dev",
//     chromeWebSecurity: false,
//     env: {
//       file: "cypress.env.json",
//     },
//     video: false,
//     retries: 0,
//     viewportWidth: 1920,
//     viewportHeight: 1080,
//   },
  
// });
