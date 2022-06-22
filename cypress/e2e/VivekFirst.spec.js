/// <reference types="cypress" />

describe('Test Suite : Letcode Input Section', () =>{

    
  beforeEach(() => {
    
    cy.visit('https://letcode.in/test')
  
    })

    it('first test', () =>{
        
        var fullnameToEnter = "Vivek Kunchinadka"
        
        //Navigate to the Text input section and verify the URL
        cy.contains("Edit")
            .click()
        cy.url().should('include', '/edit')

        //Enter the Full Name and Verifyy, and then verify tab takes to the next text input field.
        cy.get("#fullName")
            .type(fullnameToEnter)
            .should('have.value', fullnameToEnter )
            .tab()
            .should('have.value', "I am good")
        
            //Clear the text from the text input field and verify
        cy.get('#clearMe')
            .should('have.value',"Koushik Chatterjee")
            .clear()
            .should('not.have.value','Koushik Chatterjee')
            .should('have.value','')
        
            //verify the text field is disabled.
        cy.get("#noEdit")
            .should('be.disabled')

            //verify the field is read only
        cy.get('#dontwrite')
            .should('have.attr','readonly')
        })



}) 