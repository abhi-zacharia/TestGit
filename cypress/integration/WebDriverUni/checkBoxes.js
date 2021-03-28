/// <reference types = "Cypress" />
describe(" Verifyy checkboxes vis webdriveruni ", () => {
    beforeEach(function () {
        cy.navigateTo_WebdriverUni_CheckBox()
        //cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true })
        // cy.visit(Cypress.env("webdriver_HomePage") + Cypress.env("webdriver_DropdownMenu-CheckBoxes-RadiButton"))

    })

    it("Should check and validate checkbox", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
        cy.get('@option-1').uncheck()
    })
    it("Should uncheck and validate checkbox", () => {
        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')

    })
    it("Should check multiple checkboxes and validate ", () => {
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    })

})