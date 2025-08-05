import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'http://localhost:5173/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
