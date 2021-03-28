class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("webdriver_HomePage"))
    }
    click_ContactUs_Button() {
        cy.get("#contact-us").invoke('removeAttr', 'target').click({ force: true })
    }
}
export default HomePage_PO