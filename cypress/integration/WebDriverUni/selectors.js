/// <reference types = "Cypress" />
describe(" Selector example", () => {
    it("Example ofSelectors vis webdriverUni Contact us page", () =>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.xpath("//input[@ name='first_name']").type("Abhi")
        cy.get("input[name='first_name']").type("Abhi")
        cy.get("input[name='last_name']").type("Zac")
        cy.get("input[name='email']").type("test@test.com")
        cy.get("textarea[name='message']").type("Hello world")
        cy.get("input[value='SUBMIT']").click()
    })
})