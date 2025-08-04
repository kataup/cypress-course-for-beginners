import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 10000,
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
