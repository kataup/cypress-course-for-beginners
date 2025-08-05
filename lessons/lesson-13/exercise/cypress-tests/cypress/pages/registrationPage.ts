import menuComponents, { MenuItem } from "./Components/menuComponents"

export default new class RegistrationPage {
    nameInput = () => cy.get('[data-testid="reg-name-input"]')
    emailInput = () => cy.get('[data-testid="reg-email-input"]')
    adressInput = () => cy.get('[data-testid="reg-address-input"]')
    roleSelect = () => cy.get('[data-testid="reg-role-select"]')

    interestsTechCheckBox = () => cy.get('[data-testid="reg-interest-tech"]')
    interestsDesignCheckBox = () => cy.get('[data-testid="reg-interest-design""]')
    interestsMusicCheckBox = () => cy.get('[data-testid="reg-interest-design""]')

    sendRegistrationForm(data: RegistrationData) {
        this.nameInput().clear().type(data.name)
        this.emailInput().clear().type(data.email)
        this.adressInput().clear().type(data.adress)
        this.roleSelect().select(data.userRole)

        if (data.interests) {
            cy.log('we have interests')
            data.interests.forEach((zajem: InterestsItems) => {
                switch (zajem) {
                    case InterestsItems.TECHNOLOGY:
                        this.interestsTechCheckBox().click()
                        break
                    case InterestsItems.DESIGN:
                        this.interestsDesignCheckBox().click()
                        break
                }
            })
        }
    } navigateTo() {
        menuComponents.navigate(MenuItem.REGISTRATION)
    }
}


export interface RegistrationData {
    name: string,
    email: string,
    adress: string,
    userRole: UserRole,
    interests?: InterestsItems[] // je to pole, mohu vybrat více checkboxů
   
}

export enum UserRole {
    ADMIN = 'Admin',
    EDITOR = 'editor',
    VIEWER = 'Viewer'
}

export enum InterestsItems {
    TECHNOLOGY = 'Technology',
    DESIGN = 'Design',
    MUSIC = 'Music'
}

export enum Subscription {
    MONTHLY = 'Monthly',
    YEARLY = 'Yearly'
}

