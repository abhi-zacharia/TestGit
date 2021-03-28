class AutoStore_Homepage_PO {
    acessHomePage() {
        cy.visit("https://automationteststore.com/")
    }
    clickOn_HairCareLink() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }

}
export default AutoStore_Homepage_PO