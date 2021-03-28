
import HomePage_PO from '../../support/pageObject/webdriver-Uni/HomePage_PO'
import Contact_Us_PO from '../../support/pageObject/webdriver-Uni/Contact_Us_PO'

/// <reference types = "Cypress" />
describe(" Contact Us Asseration ", () => {
    const homepage_PO = new HomePage_PO()
    const contact_Us_PO = new Contact_Us_PO
    before(function () {
        cy.fixture('example').then(function (data) {
            // this.data = data
            globalThis.data = data;
        })
    })
    beforeEach(function () {
        homepage_PO.visitHomepage()
        homepage_PO.click_ContactUs_Button()
        // cy.pause()

        //cy.visit(Cypress.env("webdriver_HomePage") + Cypress.env("webdriver_ContactUsPage"))
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
    })

    it("Should pass asseration via  webdriverUni Contact us page", () => {
        contact_Us_PO.contactForm_Submit(
            data.first_Name,
            data.last_Name,
            data.email,
            "Hello world",
            'h1',
            "Thank You for your Message!")
    })

    it("Should not pass asseration via  webdriverUni Contact us page need all the fields required ", () => {
        contact_Us_PO.contactForm_Submit(
            data.first_Name,
            data.last_Name,
            " ",
            "Hello world",
            'body',
            "Error: Invalid email address")
    })

})