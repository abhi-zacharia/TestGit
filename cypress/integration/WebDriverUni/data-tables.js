/// <reference types="Cypress" />
describe("Handling Dat via wWebdriverUni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Calculate and Assert the total age of all users", () => {
        var userDetails = []
        let num = 0
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text()

        }).then(() => {
            var i
            for (i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    num += Number(userDetails[i])
                }
            }
            cy.log("Found total Age:" + num)
            expect(num).to.eq(322)
        })
    });
    it.only("Calculate and Assert the age of the user base on the last name ", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes("Jones")) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function (age) {
                    const userAge = age.text()
                    expect(userAge).to.equal("27")
                })
            }
        })



    });
});
