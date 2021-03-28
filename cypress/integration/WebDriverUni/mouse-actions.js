/// <reference types = "Cypress" />
describe(" Test mouse Actions ", () => {
    it("Should Scroll elements into view", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

    })
    it("Should be able to drag and drop a draggable item", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
    })
    it("Should be able to perform doubble mouse click", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#double-click').dblclick()
    })
    it.only("Should be able to hold down left mouse clickbutton on a given element", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })
})

