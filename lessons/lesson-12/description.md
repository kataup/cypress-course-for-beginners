## **Lesson 12: Cypress Configuration Files and Environment Variables**

### **Objectives**

- Understand the structure and role of Cypress configuration files.
- Learn how to set global configurations (e.g., baseUrl, viewport settings) using `cypress.config.js`.
- Customize Cypress behavior by leveraging configuration settings.
- Utilize environment variables for managing sensitive data and switching between different environments (development, staging, production).
- Access environment variables within tests using `Cypress.env()`.
- Implement best practices to keep configurations organized, maintainable, and secure.

---

### **Content Breakdown**

#### **A. Cypress Configuration Files**

1. **Overview of cypress.config.js:**
   - **Definition:**  
     The `cypress.config.js` file (or `cypress.config.ts` if using TypeScript) is the central place where you define global settings for your Cypress tests. It replaces the older `cypress.json` format in newer versions.
   - **Purpose:**  
     - To configure how Cypress runs tests, including setting global defaults.
     - To define properties such as `baseUrl`, viewport dimensions, timeouts, and more.
   - **Structure:**  
     Typically exports a configuration object. For example:
     ```javascript
     const { defineConfig } = require('cypress');

     module.exports = defineConfig({
       e2e: {
         baseUrl: 'http://localhost:3000',
         viewportWidth: 1280,
         viewportHeight: 720,
         defaultCommandTimeout: 8000,
         supportFile: 'cypress/support/index.js',
         // More configuration options...
       },
       env: {
         // Environment variables can also be set here
         apiUrl: 'https://api.example.com'
       }
     });
     ```

2. **Setting Global Configurations:**
   - **baseUrl:**  
     - Sets a default root URL so that you can use relative paths in your tests.
    `baseUrl` is a global configuration setting in Cypress that defines the root URL for your application under test. This value is used as the base for all relative URLs in your tests.

    **Purpose and Benefits:**
    - **Simplifies Navigation:**  
      Instead of specifying the full URL every time you call `cy.visit()`, you can use a relative path. For example, if `baseUrl` is set to `http://localhost:3000`, then `cy.visit('/login')` automatically resolves to `http://localhost:3000/login`.
    - **Easier Environment Switching:**  
      By centralizing the URL, you can quickly switch between development, staging, and production environments without modifying individual tests.
    - **Cleaner Test Code:**  
      It reduces repetition and potential errors by having a single source of truth for your application's base URL.

    **Example:**
    ```javascript
    // cypress.config.js
    const { defineConfig } = require('cypress');

    module.exports = defineConfig({
      e2e: {
        baseUrl: 'http://localhost:3000',
        // ...other settings
      }
    });
    ```
   - **Viewport Settings:**  
     - Define the dimensions of the browser window during test execution.
     - **Example:**  
       ```javascript
       viewportWidth: 1280,
       viewportHeight: 720
       ```
   - **Timeouts:**  
     - Configure command timeouts, response timeouts, and other timing-related settings.
     - **Example:**  
       ```javascript
       defaultCommandTimeout: 8000,
       pageLoadTimeout: 60000
       ```
   - **watchForFileChanges Property**

      **Definition:**  
      `watchForFileChanges` is a configuration property that tells Cypress whether to watch your project files for changes and automatically re-run tests when changes are detected.

      **Purpose and Benefits:**
      - **Development Efficiency:**  
        Enables a faster development cycle by automatically rerunning tests when you edit your code or tests.
      - **Auto-Reload:**  
        Makes the Test Runner more interactive and responsive to changes in your test code.

      **Example Usage:**
      ```javascript
      module.exports = defineConfig({
        e2e: {
          watchForFileChanges: true, // Automatically re-run tests when files change
          // ...other settings
        }
      });
      ```

      *Note:* In CI environments, you might set `watchForFileChanges` to `false` to prevent unnecessary re-runs.

   - **retries Property**
     The `retries` property specifies how many times Cypress should automatically retry a failing test before marking it as failed. This can be configured globally or on a per-test basis.
 
     **Purpose and Benefits:**
     - **Handling Flaky Tests:**  
       Helps mitigate issues due to asynchronous behavior or timing issues, especially in complex or unstable environments.
     - **Increased Test Robustness:**  
       By retrying tests, you reduce false negatives caused by transient issues.
 
     **Example Usage:**
     ```javascript
     module.exports = defineConfig({
       e2e: {
         retries: {
           runMode: 2,  // Number of retries when running tests in headless mode (CI)
           openMode: 0  // No retries in interactive mode
         },
         // ...other settings
       }
     });
     ```
 
     In a test file, you can also set retries for a specific suite:
     ```javascript
     describe('Login Tests', { retries: { runMode: 2, openMode: 1 } }, () => {
       it('should log in successfully with valid credentials', () => {
         // Test code here...
       });
     });
     ```
   - **Other Global Settings:**
     - `video`, `screenshotOnRunFailure`, etc., to control recording behaviors during test runs.
     - Specifying a `supportFile` for global configuration and custom commands.

3. **Customizing Cypress Behavior Through Config Files:**
   - Modify or extend the default behavior of Cypress using plugins and custom settings.
   - Use the `plugins` folder in combination with `cypress.config.js` to extend capabilities.
   - **Example:**  
     Integrate a plugin that modifies network behavior or handles file downloads.

4. **"e2e": {} and "env": {}**

   **`"e2e": {}` Section:**
   - **Purpose:**  
     The `"e2e"` section in the Cypress configuration is used to define settings and behaviors specific to end-to-end (E2E) tests. It includes properties such as `baseUrl`, viewport settings, default timeouts, and hooks for setting up node events.
   - **Usage:**  
     This section encapsulates all configurations related to how Cypress will run your E2E tests.
     
   **Example:**
   ```javascript
   module.exports = defineConfig({
     e2e: {
       baseUrl: 'http://localhost:3000',
       viewportWidth: 1280,
       viewportHeight: 720,
       defaultCommandTimeout: 8000,
       setupNodeEvents(on, config) {
         // Custom tasks and plugins go here.
         return config;
       }
     }
   });
   ```
 
   **`"env": {}` Section:**
   - **Purpose:**  
     The `"env"` property is used to define environment variables that can be accessed during test execution. These variables help manage sensitive data (like API keys) and configuration that can vary between environments (e.g., development, staging, production).
   - **Usage:**  
     Access environment variables in tests using `Cypress.env('variableName')`.
     
   **Example:**
   ```javascript
   module.exports = defineConfig({
     e2e: {
       baseUrl: 'http://localhost:3000'
     },
     env: {
       apiUrl: 'https://api.dev.example.com',
       userRole: 'admin'
     }
   });
   ```
 
   In a test:
   ```javascript
   describe('API Tests', () => {
     it('should fetch data from the correct API endpoint', () => {
       const apiUrl = Cypress.env('apiUrl');
       cy.request(`${apiUrl}/users`).then((response) => {
         expect(response.status).to.eq(200);
       });
     });
   });
   ```

---

#### **B. Environment Variables in Cypress**

1. **Using Environment Variables for Sensitive Data:**
   - **Definition:**  
     Environment variables allow you to externalize configuration data such as API keys, URLs, and credentials. This keeps sensitive data out of your test code.
   - **Usage in `cypress.config.js`:**
     ```javascript
     env: {
       apiUrl: 'https://api.example.com',
       authToken: 'your-secret-token'
     }
     ```
   - **Why It's Important:**  
     - Enhances security by preventing sensitive values from being hard-coded.
     - Makes it easier to change these values without modifying test files.

2. **Managing Different Environments (Development, Staging, Production):**
   - **Approach:**  
     - Use separate configuration files or environment variable settings for each environment.
     - Pass environment-specific variables via the command line when running Cypress.
   - **Example:**  
     ```bash
     npx cypress run --env config=staging
     ```
   - **In the Config File:**  
     Use conditional logic based on an environment flag to load different variables.
     ```javascript
     const config = process.env.CONFIG || 'development';

     module.exports = defineConfig({
       e2e: {
         baseUrl: config === 'production' ? 'https://prod.example.com' : 'http://localhost:3000',
         // Other settings...
       },
       env: {
         apiUrl: config === 'production' ? 'https://api.prod.example.com' : 'https://api.dev.example.com'
       }
     });
     ```
   - #### **Better approach to access environment agnostic data and config**
      in folder cypress/config we have different config files for each environemtn:
        - cypress.test2.json
        - cypress.production.json
      in folder cypress/fixtures we have different data test files for each environemtn:
        - data.test2.json
        - data.production.json
      ```javascript 
        import { defineConfig } from 'cypress'
        import { rmdir, readFileSync } from 'fs'

        export default defineConfig({
          e2e: {
            setupNodeEvents(on, config) {

              const envName = config.env.name;
              const envconfig = readFileSync(`./cypress/config/cypress.${envName}.json`, 'utf-8');
              const configValues = JSON.parse(envconfig);

              const envdata = readFileSync(`./cypress/fixtures/data.${envName}.json`, 'utf-8');
              const dataValues = JSON.parse(envdata);

              config.env = { ...configValues, ...dataValues };
              return config;
            },
          },
        })
        ```
        ```json
        {
          "scripts": {
            "open:test2": "npx cypress open --env name=test2",
            "test:test2": "npx cypress run --browser chrome --env name=test2",
            "test:test2:record": "npx cypress run --browser chrome --env name=test2 --record",
            "test:test2:ci": "pnpm test:test2:record",
            "open:production": "npx cypress open --env name=production",
            "test:production": "npx cypress run --browser chrome --env name=production",
            "test:production:record": "npx cypress run --browser chrome --env name=production --record",
            "test:production:ci": "pnpm test:production:record"
          },
        }
        ```

3. **Accessing Environment Variables in Tests:**
   - Use the `Cypress.env()` method to access values defined in your configuration.
   - **Example:**
     ```javascript
     describe('API Tests', () => {
       it('should fetch data from the API', () => {
         const apiUrl = Cypress.env('apiUrl');
         cy.request(`${apiUrl}/users`).then((response) => {
           expect(response.status).to.eq(200);
         });
       });
     });
     ```

#### **Using `setupNodeEvents` in Cypress Configuration (`cypress.config.js`)**

##### **What is `setupNodeEvents`?**
- **Definition:**  
  The `setupNodeEvents` function inside `cypress.config.js` allows you to register event listeners, extend Cypress behavior, or perform tasks that require Node.js execution.
- **Purpose:**  
  - Extend Cypress's behavior during test execution.
  - Handle file operations, database interactions, API requests, or external logging.
  - Define **custom Cypress tasks** that allow communication between test code (running in the browser) and Node.js (running in the backend).

---

##### **Example: `setupNodeEvents` with Custom Logging Task**

This example defines a task that logs messages to the console during test execution.

###### **cypress.config.js**
```javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,

    setupNodeEvents(on, config) {
      // Adding a custom task to log messages from the browser to the terminal
      on('task', {
        logMessage(message) {
          console.log('LOG FROM CYPRESS:', message);
          return null; // Tasks must return a value or null
        }
      });

      return config; // Important to return config object
    }
  }
});
```

###### **Usage in Test File (log messages to terminal)**
```javascript
describe('Logging Example', () => {
  it('should log a message from Cypress to the terminal', () => {
    cy.task('logMessage', 'This is a custom log from Cypress');
  });
});
```

**Expected Output in the Terminal:**
```
LOG FROM CYPRESS: This is a custom log from Cypress
```

---

#### **Understanding `on('task')` in Cypress**

##### **What is `on('task')`?**
- The `on('task', { ... })` function in `setupNodeEvents` allows Cypress to **execute Node.js code** inside a test.
- Tasks can handle:
  - **File operations** (e.g., reading/writing files).
  - **Database queries** (e.g., interacting with MongoDB, PostgreSQL).
  - **API interactions** (e.g., calling an external API).
  - **Logging** (sending logs to the terminal).


#### **Practical Examples of Using `on('task')`**

##### **1. Writing to a File**
You might need to store some test results or logs in a file.

##### **cypress.config.js**
```javascript
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        writeFile({ filename, content }) {
          fs.writeFileSync(filename, content);
          return null;
        }
      });

      return config;
    }
  }
});
```

##### **Usage in a Test**
```javascript
describe('Write File Example', () => {
  it('should write test data to a file', () => {
    cy.task('writeFile', {
      filename: 'cypress/logs/test-output.txt',
      content: 'Test executed successfully at ' + new Date()
    });
  });
});
```

##### **2. Reading a File**
If you need to verify content inside a file.

##### **cypress.config.js**
```javascript
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readFile({ filename }) {
          return fs.readFileSync(filename, 'utf8');
        }
      });

      return config;
    }
  }
});
```

##### **Usage in a Test**
```javascript
describe('Read File Example', () => {
  it('should read content from a file', () => {
    cy.task('readFile', { filename: 'cypress/logs/test-output.txt' }).then((content) => {
      expect(content).to.contain('Test executed successfully');
    });
  });
});
```

---

##### **3. Generating Random Data Using Faker.js**
If you want to generate random test data for user registration.

##### **cypress.config.js**
```javascript
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateRandomUser() {
          return {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password()
          };
        }
      });

      return config;
    }
  }
});
```

##### **Usage in a Test**
```javascript
describe('User Registration with Faker.js', () => {
  it('should create a new user with random data', () => {
    cy.task('generateRandomUser').then((user) => {
      cy.log(`Generated User: ${user.username}, ${user.email}`);
    });
  });
});
```

#### **Experimental Cypress Parameters in `cypress.config.js`**

Cypress has several experimental features that can be enabled via configuration.

##### **Common Experimental Features**
1. **`experimentalSessionAndOrigin`** (Tracks user sessions across tests)
2. **`experimentalModifyObstructiveThirdPartyCode`** (Handles third-party scripts that interfere with tests)
3. **`experimentalWebKitSupport`** (Enables WebKit browser testing)
4. **`experimentalStudio`** (Records and generates test code automatically)

##### **Example Config File with Experimental Features**
```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    experimentalSessionAndOrigin: true, // Tracks sessions across tests
    experimentalModifyObstructiveThirdPartyCode: true, // Avoids issues with third-party scripts
    experimentalWebKitSupport: true, // Enables WebKit browser testing
    experimentalStudio: true, // Enables Cypress Studio for test recording

    setupNodeEvents(on, config) {
      on('task', {
        logMessage(message) {
          console.log('LOG:', message);
          return null;
        }
      });

      return config;
    }
  }
});
```

---

#### **C. Best Practices for Configuration and Environment Variables**

1. **Keeping Configuration Organized and Secure:**
   - **Centralization:**  
     Keep all global settings in one place (i.e., `cypress.config.js`) to simplify maintenance.
   - **Separation of Sensitive Data:**  
     Store sensitive data like API keys in environment variables rather than directly in test files.
   - **Version Control:**  
     Ensure configuration files are under version control, but use environment-specific mechanisms (like CI/CD secret management) to inject sensitive values.

2. **Avoiding Hard-Coded Values:**
   - **Use Environment Variables:**  
     Replace hard-coded URLs, tokens, and other constants with environment variables.
   - **Reusable Variables:**  
     Utilize variables in the config file so that changes need to be made in only one place.
   - **Example:**
     ```javascript
     // Avoid hard-coding:
     cy.visit('http://localhost:3000/login');

     // Instead, use:
     cy.visit('/');
     // Where baseUrl is defined in the config file.
     ```

3. **Documentation and Comments:**
   - Document configuration settings and environment variables clearly so that other team members understand their purpose and usage.
   - Maintain clear comments in `cypress.config.js` explaining each setting.

---

### **D. Hands-On Activities**

1. **Configuring Cypress Settings Using cypress.config.js:**
   - **Activity:**  
     Walk through setting up a basic `cypress.config.js` file.
   - **Task:**  
     Configure `baseUrl`, viewport settings, and default timeouts. Modify these values and observe how they affect test behavior.

2. **Implementing Environment Variables:**
   - **Activity:**  
     Set up environment variables in your config file for different environments (development, staging, production).
   - **Task:**  
     Create conditional logic to switch the `baseUrl` and `apiUrl` based on an environment flag. Run tests in different modes and verify that the correct settings are applied.

3. **Accessing Environment Variables in Tests:**
   - **Activity:**  
     Write a simple Cypress test that fetches data from an API using an environment variable for the URL.
   - **Task:**  
     Use `Cypress.env('apiUrl')` in a test and log or assert the response.

4. **Simulated Environment Switching:**
   - **Activity:**  
     Demonstrate how to run tests with different environment configurations using the command line.
   - **Task:**  
     Use a command like `npx cypress run --env config=production` and show how tests behave differently based on the environment.

---

### **E. Cypress Commands Functionality and Configuration**

- **Using Cypress Commands:**  
  Discuss how Cypress commands (e.g., `cy.visit()`, `cy.get()`) automatically use the configurations provided in `cypress.config.js`. For example, `cy.visit('/')` will resolve using the `baseUrl` defined in your configuration.
- **Custom Commands Integration:**  
  Briefly mention how you can create custom commands that also leverage environment variables and configuration settings, ensuring that your tests are both flexible and maintainable.

---

### **F. Discussion and Q&A**

**Potential Student Questions:**

1. **Q:** *What if I need to change the base URL frequently?*  
   **A:** Use the `baseUrl` configuration in your `cypress.config.js` file. This centralizes the URL setting, so you only need to update one file, and all tests using `cy.visit('/')` will automatically use the new URL.

2. **Q:** *How do I manage sensitive data like API keys without hard-coding them?*  
   **A:** Store sensitive information as environment variables in your configuration file or in a secure external source (e.g., CI/CD secret management). Access these values in tests using `Cypress.env()`.

3. **Q:** *Can I use different configuration settings for different test runs?*  
   **A:** Yes, you can pass environment variables via the command line (e.g., `npx cypress run --env config=staging`) or use conditional logic in your configuration file to load different settings based on the environment.

4. **Q:** *Why is it important to keep configuration files under version control?*  
   **A:** Keeping configuration files under version control helps maintain consistency across your team, makes it easier to track changes, and ensures that everyone is using the same settings for tests.

5. **Q:** *How do I know if my environment variables are being picked up in the tests?*  
   **A:** You can log them in your test using `cy.log(Cypress.env('apiUrl'))` or assert that the variable has the expected value. This confirms that your configuration is correctly loaded.

6. **Q:** *Why do we need `setupNodeEvents` in Cypress?*  
    **A:** `setupNodeEvents` is required to extend Cypress functionality. It allows us to register event listeners, define custom tasks, and modify test execution behavior.

7. **Q:** *How does `on('task')` improve testing?*  
   **A:** It enables communication between Cypress (running in the browser) and Node.js (running on the backend). This is useful for logging, file operations, API interactions, and generating dynamic test data.

8. **Q:** *How can I use environment variables inside `setupNodeEvents`?*  
   **A:** You can access environment variables using `process.env` in the config file and pass them to `Cypress.env()`.

9. **Q:** *What happens if a task does not return a value?* 
   **A:** Cypress requires tasks to return a value, or you should explicitly return `null`.

10. **Q:** *Are experimental features in Cypress stable?*  
    **A:** Not always. They are in development and may change. Always check the Cypress documentation before using them in production.

1. **Q:** *Why do we set a `baseUrl`?*  
   **A:** Setting a `baseUrl` lets you use relative paths in your tests (e.g., `cy.visit('/login')`) instead of hardcoding full URLs. This makes tests easier to maintain and more flexible when switching environments.

2. **Q:** *What is the purpose of the `"env": {}` section?*  
   **A:** The `"env": {}` section stores environment variables that can be accessed in tests via `Cypress.env()`. It is used to externalize sensitive data and configuration that can vary across different environments, such as API endpoints or credentials.

3. **Q:** *How does `numTestsKeptInMemory` help during debugging?*  
   **A:** This property limits the number of test snapshots stored in memory, which aids Cypress in providing time-travel debugging without consuming excessive memory.

4. **Q:** *What does `watchForFileChanges` do?*  
   **A:** It tells Cypress to automatically re-run tests when files in your project change, which is useful during development. In CI, it’s typically set to `false` to avoid unnecessary test reruns.

5. **Q:** *Why would I use the `retries` property?*  
   **A:** The `retries` property helps handle flaky tests by automatically re-running them a specified number of times before failing, reducing false negatives due to transient issues.

6. **Q:** *What are experimental features in Cypress, like `experimentalSessionAndOrigin`?*  
   **A:** Experimental features are new capabilities that Cypress is testing. They can improve session handling or modify third-party code behavior, but they might not be fully stable yet.

7. **Q:** *What is the role of `setupNodeEvents` and the `on('task')` function?*  
   **A:** `setupNodeEvents` lets you register Node.js event listeners to extend Cypress functionality. The `on('task')` function allows tests to execute Node.js code, such as logging messages or reading/writing files, which can’t be run directly in the browser.

---

### **Additional Resources**

- **Cypress Configuration Guide:**  
  [Cypress Configuration Documentation](https://docs.cypress.io/guides/references/configuration)
- **Examples of Using Environment Variables:**  
  Look for sample projects and tutorials that demonstrate environment variable usage in Cypress on GitHub and the official Cypress blog.
  