class AutoStore_HairCare_PO {
    addHairCareProductToBasket() {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBAsket(element)
        })
        cy.get('.dropdown-toggle > .fa').click();
    }

}
export default AutoStore_HairCare_PO