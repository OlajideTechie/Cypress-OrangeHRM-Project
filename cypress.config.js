const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    failOnStatusCode: false,
    experimentalSessionAndOrigin: true,
    retries: 1,
    pageLoadTimeout:60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
