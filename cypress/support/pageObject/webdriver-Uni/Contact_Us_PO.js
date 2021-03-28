class Contact_Us_PO {
    contactForm_Submit(firstName, lastName, email, comment, $selector, textLocate) {

        cy.get("input[name='first_name']").type(firstName)
        cy.get("input[name='last_name']").type(lastName)
        cy.get("input[name='email']").type(email)
        cy.get("textarea[name='message']").type(comment)
        cy.get("input[value='SUBMIT']").click()
        cy.get($selector).contains(textLocate, { timeout: 60000 })
    }
}
export default Contact_Us_PO