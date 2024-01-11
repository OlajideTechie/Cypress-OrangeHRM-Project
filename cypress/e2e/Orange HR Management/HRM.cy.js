/// <reference types="cypress" />
import {baseUrl, username, password} from './Env/config'


describe ('Orange HR Management Test Suite', () => {

    beforeEach(() => {
        //Visit the web app
        cy.visit(baseUrl)

        //Attempt to login the user
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

        //  it('Login with correct credentials', () => {

        //      cy.get('.orangehrm-login-slot-wrapper')
        //      cy.get('.oxd-text--h5').should('have.text', 'Login')

        //      //Login to ORM as an admin user
        //      cy.get('.orangehrm-login-slot')
        //      cy.get('.orangehrm-login-form')

        //      //admin enters correct username
        //      cy.get(':nth-child(2) > .oxd-input-group')
        //      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)

        //      //admin enters correct password
        //      cy.get(':nth-child(3) > .oxd-input-group')
        //      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password,{log:false})

        //      //admin clicks on login button
        //      cy.get('.oxd-button').click();

        //  })


    it.skip('Login with incorrect credentials', () => {

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

        // cy.get('.orangehrm-login-slot-wrapper')
        // cy.get('.oxd-text--h5').should('have.text', 'Login')

        // //Login to ORM as an admin user
        // cy.get('.orangehrm-login-slot')
        // cy.get('.orangehrm-login-form')

        // //admin enters correct username
        // cy.get(':nth-child(2) > .oxd-input-group')
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)

        // //admin enters correct password
        // cy.get(':nth-child(3) > .oxd-input-group')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)

        // //admin clicks on login button
        // cy.get('.oxd-button').click();


        //Navigate user to Dashboard

        cy.get('.oxd-sidepanel-body')
        cy.get('ul.oxd-main-menu')
        cy.contains('Dashboard').click();

        //verify that we have landed the dashboard page
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')


        cy.get('.orangehrm-card-container')
        cy.get('.oxd-text--h4').should('have.text', 'Launching Soon')
         return this;

    })



    it.only('Navigate to Directory', () => {

        // cy.clearCookies() 
        // cy.clearLocalStorage() 
        // cy.clearAllSessionStorage() 


        // cy.get('.orangehrm-login-slot-wrapper')
        // cy.get('.oxd-text--h5').should('have.text', 'Login')

        // //Login to ORM as an admin user
        // cy.get('.orangehrm-login-slot')
        // cy.get('.orangehrm-login-form')

        // //admin enters correct username
        // cy.get(':nth-child(2) > .oxd-input-group')
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)

        // //admin enters correct password
        // cy.get(':nth-child(3) > .oxd-input-group')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)

        // //admin clicks on login button
        // cy.get('.oxd-button').click();


        //Navigate user to directory
        cy.get('.oxd-sidepanel-body')
        cy.get('ul.oxd-main-menu')
        cy.contains('Directory').click();

        //verify that we have landed the directory page
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        //search for an employee based on country and role
        // cy.get('.oxd-layout-context')
        // cy.get('.oxd-table-filter')
        // cy.get('.oxd-autocomplete-text-input > input')
        // .type('Charlie Carter').click({froce: true})

        // //select job title
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
        //     .click()
        // cy.get('.oxd-select-option')
        //     .contains('QA Engineer')
        //    .click({force:true});

        // //select location
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
        //     .click()
        // cy.get('.oxd-select-option')
        //     .contains('New York Sales Office')
        //     .click({force:true})

        // // //click on search button
        // cy.get('.oxd-form-actions')
        // cy.get('.oxd-button--secondary').click({force:true});

        // // //verify that only one record is returned
        // cy.get('.orangehrm-horizontal-padding').contains('(3) Record Found')
        // cy.get('.oxd-grid-4').should('have.length', 3)

        // cy.get('.oxd-sheet').click({force:true})

        // cy.get('.orangehrm-corporate-directory-sidebar > .oxd-grid-item > .oxd-sheet')
        //     .contains('Odis Adalwin')

        // cy.get('.orangehrm-corporate-directory-sidebar > .oxd-grid-item > .oxd-sheet')
        //     .contains('Chief Technical Officer')

        // cy.get(':nth-child(10) > :nth-child(1) > .oxd-text--toast-title')
        //     .contains('odis1@osohrm.com')


        // //wait for 5secs and then reset the search function
        // cy.wait(5000)
        // cy.get('.oxd-button--ghost').click({force:true})


        // return this;

    })


    it.skip('Navigate to Maintenance Page',
    
    // {
    //     retries: {
    //      // runMode: 1,
    //       openMode: 1,
    //     },
    //   },
    
    () => {

        // cy.get('.orangehrm-login-slot-wrapper')
        // cy.get('.oxd-text--h5').should('have.text', 'Login')

        // //Login to ORM as an admin user
        // cy.get('.orangehrm-login-slot')
        // cy.get('.orangehrm-login-form')

        // //admin enters correct username
        // cy.get(':nth-child(2) > .oxd-input-group')
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)

        // //admin enters correct password
        // cy.get(':nth-child(3) > .oxd-input-group')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password, {log:false})

        // //admin clicks on login button
        // cy.get('.oxd-button').click();

        cy.get('.oxd-sidepanel-body')
        cy.get('ul.oxd-main-menu')
        cy.get(':nth-child(10) > .oxd-main-menu-item')
        cy.contains('Maintenance').click();

        //Admin types password
        cy.get('#app')
        cy.get('.orangehrm-admin-access-container')
        cy.get('.orangehrm-card-container')
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password, {log:false})
        cy.get('.oxd-button--secondary').click({force:true})

        // //verify that we have landed the Maintenance page
         cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee')
        cy.get('body')
        cy.get('.oxd-layout-container')
        cy.get('.oxd-layout-context')
        cy.get('.orangehrm-background-container')
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click();

        // //search for an employee
        cy.get('.oxd-form')
        cy.get('.oxd-autocomplete-text-input > input').type('Odis')
            // .trigger("mousemove", 50, 50, {force:true})
            // .trigger("mousedown", {which : 1})
            // .trigger("mouseup", {which : 1})
        //cy.wait(5000)
        //cy.find('-oxd-autocomplete-dropdown --position-bottom').contains('Odis Adalwin')
            .click({force:true})
        return this;

    })


    // after( () => {
    //     //Logout User
    //     cy.get('.oxd-topbar-header-userarea')
    //     cy.get('.oxd-topbar-header-userarea > ul')
    //     cy.get('.oxd-userdropdown-tab').click({force: true})

    //     cy.get('.oxd-dropdown-menu').contains('Logout').click({force:true})
    // })
});