///<reference types="cypress" />

describe("Alias And Invoke ", () => {
    it("Should validate a specific hair care product   ", () => {

        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productTumbnail')
        cy.get('@productTumbnail').its('length').should('be.gt',5)
        cy.get('@productTumbnail').should('include','Seaweed Conditioner')
    })
    it("Should validate product thumbnail   ", () => {

        cy.visit("https://www.automationteststore.com/")
        //cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.thumbnail').as('productTumbnail')
        cy.get('@productTumbnail').should('have.length',16)
        cy.get('@productTumbnail').find('.productcart').invoke('attr','title').should('include','Add to Cart')
    })
    it.only("Should Calculate total of normal and sale products    ", () => {

        cy.visit("https://www.automationteststore.com/")

        cy.get('.thumbnail').as('productTumbnail')
        // cy.get('@productTumbnail').find('.oneprice').each(($el, index, $list) => {
            
        //     cy.log($el.text())
            // cy.get('@productTumbnail').find('.pricenew').each(($el, index, $list) => {
            
            //     cy.log($el.text())

            // })          
        //})

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('salePrice')
        var iteamTotal = 0
        cy.get('@itemPrice').then($linkText => {
            var iteamPriceTotal = 0
            var itemPrice = $linkText.split('$')
            var i
            for (i=0; i<itemPrice.length;i++){
                 
                cy.log(itemPrice[i])
                iteamPriceTotal += Number(itemPrice[i])
            }
            iteamTotal += iteamPriceTotal
            cy.log("Non sale price iteam total :" + iteamPriceTotal)               
            
        })
        //var saleTotal = 0
        cy.get('@salePrice').then($linkText => {
            var salePriceTotal = 0
            var salePrice = $linkText.split('$')
            var i
            for (i=0; i<salePrice.length;i++){
                 
                cy.log(salePrice[i])
                salePriceTotal += Number(salePrice[i])
            }
            iteamTotal += salePriceTotal
            cy.log("Sale price iteam total :" + salePriceTotal)               
        })   
        .then(() => {
            cy.log("Total cost the Item: " + iteamTotal)
            expect(iteamTotal).to.equal(679.1)
        })
    })
})
