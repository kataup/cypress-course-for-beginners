const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'http://127.0.0.1:5500/cypress-course-for-beginners/lessons/lesson-7/exercise',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
