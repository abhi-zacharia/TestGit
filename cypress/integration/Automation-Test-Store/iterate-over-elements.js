///<reference types="cypress" />

describe("Iterate over elements ", () => {
    beforeEach(function () {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })

    it("Should log information of all hair care prodcts   ", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + ": " + $el.text())
        })
    })
    it("Should add a specific product1 to the basket   ", () => {
        cy.selectProduct('Curls to straight Shampoo')
    })
    it("Should add a specific product2 to the basket   ", () => {
        cy.selectProduct('Seaweed Conditioner')
    })
    it("Should add a specific product3 to the basket   ", () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    })
})

