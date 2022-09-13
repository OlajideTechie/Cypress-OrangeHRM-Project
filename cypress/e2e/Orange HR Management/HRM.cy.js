/// <reference types="cypress" />

describe ('Orange HR Management Test Suite', () => {
    const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    const username  = 'Admin';
    const password = 'admin123'

    beforeEach(() => {
        cy.visit(baseUrl)
    })

         it('Login with correct credentials', () => {

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
             cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password,{log:false})

             //admin clicks on login button
             cy.get('.oxd-button').click();

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
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password, {log:false})

        //admin clicks on login button
        cy.get('.oxd-button').click();

     //confirm error message
        cy.get('.oxd-alert-content').should('have.text', 'Invalid credentials')

    })


    it('Navigate to Dashboard', () => {

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


        cy.get('.oxd-sidepanel-body')
        cy.get('ul.oxd-main-menu')
        cy.contains('Dashboard').click();

        //verify that we have landed the dashboard page
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')


        cy.get('.orangehrm-card-container')
        cy.get('.oxd-text--h4').should('have.text', 'Launching Soon')
         return this;

    })



    it('Navigate to Directory', () => {

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


        cy.get('.oxd-sidepanel-body')
        cy.get('ul.oxd-main-menu')
        cy.contains('Directory').click();

        //verify that we have landed the directory page
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        //search for an employee based on country and role
        cy.get('.oxd-layout-context')
        cy.get('.oxd-table-filter')
        cy.get('.oxd-autocomplete-text-input > input').type('Odis Adalwin')

        //select job title
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
            .click()
        cy.get('.oxd-select-option')
            .contains('Chief Technical Officer')
            .click({force:true});

        //select location
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
            .click()
        cy.get('.oxd-select-option')
            .contains('HQ - CA, USA')
            .click({force:true})

        //click on search button
        cy.get('.oxd-button--secondary').click({force:true});

        //verify that only one record is returned
        cy.get('.orangehrm-horizontal-padding').contains('(1) Record Found')
        cy.get('.oxd-grid-4').should('have.length', 1)

        cy.get('.oxd-sheet').click({force:true})

        cy.get('.orangehrm-corporate-directory-sidebar > .oxd-grid-item > .oxd-sheet')
            .contains('Odis Adalwin')

        cy.get('.orangehrm-corporate-directory-sidebar > .oxd-grid-item > .oxd-sheet')
            .contains('Chief Technical Officer')

        cy.get(':nth-child(10) > :nth-child(1) > .oxd-text--toast-title')
            .contains('odis1@osohrm.com')

        //wait for 5secs and then reset the search function
        cy.wait(5000)
        cy.get('.oxd-button--ghost').click({force:true})


        return this;

    })

    after( () => {
        //Logout User
        cy.get('.oxd-topbar-header-userarea')
        cy.get('.oxd-topbar-header-userarea > ul')
        cy.get('.oxd-userdropdown-tab').click({force: true})

        cy.get('.oxd-dropdown-menu').contains('Logout').click({force:true})
    })
});