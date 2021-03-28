/// <reference types = "Cypress" />
describe(" Cypress web security ", () => {
    it("Should validating visting to different domains", () =>{
      cy.visit("http://www.webdriveruniversity.com/")
      cy.visit("https://www.automationteststore.com/")
    })

    it("Should validating visting to different domains via user action", () =>{
        
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("a[id='automation-test-store']").invoke('removeAttr','target').click({force:true})
    })
})