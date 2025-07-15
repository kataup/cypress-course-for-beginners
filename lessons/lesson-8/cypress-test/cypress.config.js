const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  viewportHeight: 1280,
  viewportWidth: 700,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
