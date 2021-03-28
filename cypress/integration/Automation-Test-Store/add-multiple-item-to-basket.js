import AutoStore_Homepage_PO from '../../support/pageObject/automation-Test-Store/AutoStore_Homepage_PO'
import AutoStore_HairCare_PO from '../../support/pageObject/automation-Test-Store/AutoStore_HairCare_PO'


/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
    const autoStore_HomePagePO = new AutoStore_Homepage_PO()
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO()
    before(function () {
        cy.fixture("product").then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function () {
        autoStore_HomePagePO.acessHomePage()
        autoStore_HomePagePO.clickOn_HairCareLink()

    });
    it("Add specific items to basket", () => {
        autoStore_HairCare_PO.addHairCareProductToBasket()

    });
});



