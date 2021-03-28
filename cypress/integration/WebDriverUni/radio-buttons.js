/// <reference types = "Cypress" />
describe(" Verifyy radio buttons vis webdriveruni ", () => {
    beforeEach(function () {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true })
    })
    it("Should check specific radio button and validate", () => {

        //cy.get('#radio-buttons').find("input[type='radio']").first().check()
        cy.get('#radio-buttons').find("input[type='radio']").eq(0).check()
    })
    it("Should validate the state of specific radio button", () => {
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')
        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')
        cy.get("[value='cabbage']").should('be.disabled')

    })
})

