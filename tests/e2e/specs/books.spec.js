describe("Home", () => {
  

  it("Should display the main page", () => {
    cy.visit("/")

    cy.get(".v-card").should('have.length', 5)
    cy.get(':nth-child(3) > .md-4 > .v-card__text > .title').should("contain", "Book 3")

    cy.get('.v-badge__badge').should("contain", "0")

    // add Books to cart 
    cy.get(':nth-child(1) > .md-4 > .v-card__text > .white--text > .v-btn__content > .v-icon').click()
    cy.get(':nth-child(1) > .md-4 > .v-card__text > .white--text > .v-btn__content > .v-icon').click()
    cy.get(':nth-child(2) > .md-4 > .v-card__text > .white--text > .v-btn__content > .v-icon').click()
    cy.get(':nth-child(2) > .md-4 > .v-card__text > .white--text > .v-btn__content > .v-icon').click()
    cy.get(':nth-child(3) > .md-4 > .v-card__text > .white--text > .v-btn__content > .v-icon').click()
    cy.get(':nth-child(3) > .md-4 > .v-card__text > .white--text > .v-btn__content > .v-icon').click()
    cy.get(':nth-child(4) > .md-4 > .v-card__text > .white--text > .v-btn__content > .v-icon').click()
    cy.get(':nth-child(5) > .md-4 > .v-card__text > .white--text > .v-btn__content > .v-icon').click()

    // Open Cart

    cy.get('.v-badge > .v-icon').click().then(()=> {
      cy.get(':nth-child(3) > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)').should("contain", "25")

      cy.get(".total").should("contain", "Total: 60")
    })
  })

})
