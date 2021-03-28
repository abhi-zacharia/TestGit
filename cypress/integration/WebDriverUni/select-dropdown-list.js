/// <reference types = "Cypress" />
describe(" Intract with dropdown list vis webdriveruni ", () => {
    it("Should select specific values via select dropdown list", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true })
        cy.get("#dropdowm-menu-1").select('c#')
        cy.get("#dropdowm-menu-2").select('testng').should('have.value', 'testng')
        cy.get("#dropdowm-menu-3").select('javascript').contains('JavaScript')

    })
    it.only("Challenge select specific values via select dropdown list", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true })

        cy.get("#dropdowm-menu-2").select('maven').should('have.value', 'maven')
        cy.get("#dropdowm-menu-2").select('TestNG').contains('TestNG')


    })
})

