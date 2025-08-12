import { defineConfig } from "cypress";
import { readFileSync, writeFileSync} from 'fs'

export default defineConfig({
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

     let sharedDataText = ''

      on('task', { 
        saveSharedData(testshareddata: string) {
          console.log('savind shared data:', testshareddata)
          sharedDataText = testshareddata
          return null 
        },

      getSharedData() {
        return sharedDataText
      },

      saveSharedDataToFile(testshareddata: string) {
        writeFileSync('cypress/fixtures/sharedData.txt', testshareddata, 'utf8')
        return null

      },
      getSharedDataFromFile() {
        const data = readFileSync('cypress/fixtures/sharedData.txt', 'utf8')
        return data

      }
      })
    },
  },
});
