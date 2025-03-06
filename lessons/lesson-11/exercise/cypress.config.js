const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Update this to match your Nuxt.js dev server URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});