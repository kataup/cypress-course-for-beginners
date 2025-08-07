import registrationPage from "../pages/registrationPage"
import menuComponents from "../pages/Components/menuComponents"
import { UserRole } from "../pages/registrationPage"
import { RegistrationData } from "../pages/registrationPage"
import { Subscription } from "../pages/registrationPage"

describe('registration', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/registration')
        cy.fixture('cypress-course-for-beginners/lessons/lesson-13/exercise/cypress-tests/cypress/fixtures/img_26.jpeg').then(fileContent => {
  registrationPage.chooseFileInput })
        })

    it('should enter valid values to registration form and send', () => {
        const registrationData: RegistrationData = {
        name: 'Katerina',
        email: 'email@email.com',
        adress: 'Adresa 65',
        userRole: UserRole.ADMIN }
        
        registrationPage.sendRegistrationForm(registrationData)
        registrationPage.selectSubscription(Subscription.MONTHLY)
        registrationPage.sendFormButton()

    })
});