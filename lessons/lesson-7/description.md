### **Lesson 7: Interacting with Web Elements and Handling User Inputs**

---

## **1. Content Outline**

### **A. Introduction**
- **Why Web Element Interaction is Important:**
  - Verifies how users interact with elements like buttons, input fields, checkboxes, dropdowns, etc.
  - Ensures web applications behave as expected in response to user inputs.

### **B. Selecting Elements in Cypress**
- **CSS Selectors (Core Methodology):**
  - Basic selectors: `.class`, `#id`, `tag`.
  - Complex selectors: `div > button`, `input[type="text"]`.
- **Using `data-*` Attributes:**
  - Best practice for stable selectors in automation:
    ```javascript
    cy.get('[data-testid="login-button"]');
    ```
- **Traversal Methods:**
  - Find child elements: `cy.get('div').find('button')`.
  - Navigate DOM structure: `.parent()`, `.children()`, `.next()`, `.prev()`.
- **Best Practices:**
  - Use `data-*` attributes for test stability.
  - Avoid brittle selectors like `nth-child`.

---

### **C. Actions on Web Elements**
1. **Clicking Elements:**
   - Use `cy.click()` to simulate clicks.
   - Example:
     ```javascript
     cy.get('[data-testid="submit-button"]').click();
     ```

2. **Typing Into Input Fields:**
   - Use `cy.type()` to simulate typing.
   - Example:
     ```javascript
     cy.get('[data-testid="username-input"]').type('testUser');
     ```

3. **Clearing Input Fields:**
   - Use `.clear()` to remove content.
   - Example:
     ```javascript
     cy.get('[data-testid="username-input"]').clear();
     ```

4. **Selecting Dropdown Options:**
   - Use `.select()` for `<select>` elements.
   - Example:
     ```javascript
     cy.get('[data-testid="dropdown"]').select('Option 1');
     ```

5. **Checkboxes and Radio Buttons:**
   - `.check()` to select, `.uncheck()` to deselect checkboxes.
   - Example:
     ```javascript
     cy.get('[data-testid="accept-terms"]').check();
     ```

6. **Submitting Forms:**
   - Use `.submit()` to simulate form submission.
   - Example:
     ```javascript
     cy.get('[data-testid="login-form"]').submit();
     ```

7. **Hovering Over Elements:**
   - Cypress does not have a dedicated hover action; use `.trigger('mouseover')`.
   - Example:
     ```javascript
     cy.get('[data-testid="menu-item"]').trigger('mouseover');
     ```

---

### **D. Validating Interactions**
- **Assertions:**
  - Confirm that actions result in the expected state or behavior.
  - Example:
    ```javascript
    cy.get('[data-testid="success-message"]')
      .should('be.visible')
      .and('contain', 'Login Successful!');
    ```
- **Chaining Commands:**
  - Combine actions and assertions for clear, concise tests.
  - Example:
    ```javascript
    cy.get('[data-testid="submit-button"]')
      .click()
      .get('[data-testid="error-message"]')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
    ```

---

### **E. Advanced Input Handling**
- **File Uploads:**
  - Use `cy.selectFile()` for file input elements.
  - Example:
    ```javascript
    cy.get('[data-testid="file-upload"]').selectFile('cypress/fixtures/sample.pdf');
    ```

- **Simulating Keyboard Events:**
  - Use `.type()` with special keys like `{enter}`, `{backspace}`.
  - Example:
    ```javascript
    cy.get('[data-testid="search-input"]').type('Cypress{enter}');
    ```

- **Interacting with Disabled Elements:**
  - Validate or trigger events on disabled elements:
    ```javascript
    cy.get('[data-testid="submit-button"]').should('be.disabled');
    ```

---

## **2. Hands-On Activities**

### **A. Exercise 1: Form Submission**
- **Objective:**
  - Create a login form with `data-testid` attributes.
  - Simulate user inputs (username, password), click the login button, and validate success or error messages.
- **Web Functionality Suggestion:**
  - A simple login form with validation.

### **B. Exercise 2: Dropdown and Checkbox Interaction**
- **Objective:**
  - Add a dropdown to select a user role and a checkbox for agreeing to terms.
  - Validate the form is only submitted when all fields are filled and the checkbox is checked.
- **Web Functionality Suggestion:**
  - A form that prevents submission until validation criteria are met.

### **C. Exercise 3: Simulating Keyboard Events**
- **Objective:**
  - Create a search bar that filters results dynamically as the user types.
  - Test the behavior of the search feature using `.type()` and `.clear()`.
- **Web Functionality Suggestion:**
  - A real-time search bar that displays matching results.

---

## **3. Potential Student Questions**

1. **Why should I use `data-*` attributes instead of CSS selectors?**
   - **Answer:** CSS selectors can change due to design updates, while `data-*` attributes are stable and reserved for developers/testing, ensuring reliable test scripts.

2. **How can I simulate hovering over an element in Cypress?**
   - **Answer:** Use `.trigger('mouseover')` as Cypress does not have a dedicated hover method.

3. **Can I interact with elements that are hidden or disabled?**
   - **Answer:** Cypress prevents interacting with hidden or disabled elements by default, but you can use `.invoke('show')` or modify attributes to simulate interactions.

4. **How do I validate a form is working correctly?**
   - **Answer:** Combine actions (e.g., typing, clicking) with assertions to confirm expected results like showing success/error messages.

---

## **4. Supplementary Materials**

- **Official Documentation:**
  - [Cypress Commands](https://docs.cypress.io/api/commands)
  - [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)

- **Videos and Tutorials:**
  - [Traversy Media: Cypress Crash Course](https://www.youtube.com/watch?v=pk4z4k8I8fU)
  - [The Net Ninja: Cypress Testing Tutorials](https://www.youtube.com/watch?v=zLtqULPDuE8)

- **Interactive Tools:**
  - Practice with tools like [TodoMVC](http://todomvc.com).

---

### Suggested Lesson Breakdown for 3 Hours

#### **Hour 1: Basics of Selecting and Interacting with Elements (60 minutes)**
- Introduction to element selectors.
- Performing basic actions like clicking and typing.
- Hands-on activity: Fill out and submit a form.

#### **Hour 2: Advanced Interactions and Input Handling (60 minutes)**
- Handling dropdowns, checkboxes, and file uploads.
- Simulating keyboard events and handling disabled elements.
- Hands-on activity: Dynamic dropdown and search bar interaction.

#### **Hour 3: Validating User Actions (60 minutes)**
- Writing assertions for different scenarios.
- Combining actions and assertions in test cases.
- Hands-on activity: Test and validate form behavior based on input.

---

Let me know if this works for you or if you'd like to adjust the content further!