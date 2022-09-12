/// <reference types="cypress" />

describe ('Orange HR Management Test Suite', () => {
    const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

    beforeEach(() => {
        cy.visit(baseUrl)
    })

         it('Login with correct credentials', () => {

             const username  = 'Admin';
             const password = 'admin123'

             cy.get('.orangehrm-login-slot-wrapper')
             cy.get('.oxd-text--h5').should('have.text', 'Login')

             //Login to ORM as an admin user
             cy.get('.orangehrm-login-slot')
             cy.get('.orangehrm-login-form')

             //admin enters correct username
             cy.get(':nth-child(2) > .oxd-input-group')
             cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)

             //admin enters correct password
             cy.get(':nth-child(3) > .oxd-input-group')
             cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)

             //admin clicks on login button
             cy.get('.oxd-button').click();

             //Logout User
             cy.get('.oxd-topbar-header-userarea')
             cy.get('.oxd-topbar-header-userarea > ul')
             cy.get('.oxd-userdropdown-tab').click({force: true})

             cy.get('.oxd-dropdown-menu').contains('Logout').click({force:true})

         })


    it('Login with incorrect credentials', () => {

        const username  = 'admin';
        const password = 'admin12'

        cy.get('.orangehrm-login-slot-wrapper')
        cy.get('.oxd-text--h5').should('have.text', 'Login')

        //Login to ORM as an admin user
        cy.get('.orangehrm-login-slot')
        cy.get('.orangehrm-login-form')

        //admin enters correct username
        cy.get(':nth-child(2) > .oxd-input-group')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)

        //admin enters correct password
        cy.get(':nth-child(3) > .oxd-input-group')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)

        //admin clicks on login button
        cy.get('.oxd-button').click();

     //confirm error message
        cy.get('.oxd-alert-content').should('have.text', 'Invalid credentials')

    })
});