
/// <reference types="cypress" />

describe("Test Contact us form via Automation Test Form", () => {
    beforeEach(function () {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href$='contact']").click().then(function (linkText) {
            cy.log("Click on the link using text :" + linkText.text())
        })
    })
    before(function () {
        cy.fixture("userDetails").as("user")
    })
    it("Should be able to submit successful submission via contact us form ", () => {
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_Name)
            // cy.xpath("//input[@id='ContactUsFrm_email']").type("test@test.com")
            cy.get('#ContactUsFrm_email').type(user.email)

        })
        //cy.xpath("//a[contains(@href,'contact')]").click()  
        // cy.get("a[href$='contact']").click()
        // cy.xpath("//input[@id='ContactUsFrm_first_name']").type("Abhi")  
        // cy.get('#ContactUsFrm_first_name').type("Abhi")
        // cy.xpath("//input[@id='ContactUsFrm_email']").type("test@test.com")
        // cy.get('#ContactUsFrm_email').type("test@test.com")
        //cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type("hello world")
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("hello world")
        //cy.xpath("//button[@class='btn btn-primary lock-on-click']").click()
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')


    })
})


