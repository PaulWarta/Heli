describe('Opens the Kontakt Page', () => { 
  it('opens the kontakt Page when Button is clicked', () => {
    cy.visit('localhost:5500')
    cy.get('#KontaktContainer').click()
    cy.wait(2000)
    cy.get('#KontaktSection').find('h2').should('be.visible')
    cy.get('#KontaktContainer').click()
    cy.wait(2000)
    cy.get('#KontaktSection').should('not.be.visible')
  })
})