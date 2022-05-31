let sizes = ['ipad-2', 'ipad-mini', 'iphone-6', 'iphone-8', 'iphone-se', 'iphone-xr', 'iphone-x', 'samsung-s10', 'samsung-note9', 'macbook-16', 'macbook-11', [744, 1133], [566, 744], [428, 926]]

describe('Test the Hamburger Button', () => {
  sizes.forEach((size) => {
    
    it(`operates the Hamburger Menu accordingl on ${size}`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }
      cy.visit('localhost:5500')
      cy.get('main > h1').should('not.covering')
      cy.get('#HamburgerContainer').click()
      cy.get('#HamburgerMenu').should('be.visible')
      cy.get('#HamburgerMenu > a[destination=home]').click()
      cy.get('#HamburgerMenu').should('not.be.visible')
      cy.get('#HamburgerContainer').click()
      cy.get('#HamburgerMenu > a[destination=kontakt]').click()
      cy.get('#HamburgerMenu').should('not.be.visible')
      cy.get('#KontaktSection').should('be.visible')
      cy.get('#KontaktHeli').click()
      cy.get('#KontaktSection').should('not.be.visible')
      cy.get('#KontaktContainer').click()
      cy.get('#KontaktSection').should('be.visible')
      cy.get('#HamburgerContainer').click()
      cy.get('#HamburgerMenu').should('be.visible')
      cy.get('#KontaktSection').should('be.visible')
      cy.get('#HamburgerMenu > a[destination=kontakt]').click()
      cy.get('#HamburgerMenu').should('not.be.visible')
      cy.get('#KontaktSection').should('be.visible')
      cy.get('#HamburgerContainer').click()
      cy.get('#HamburgerMenu > a[destination=impressum]').click()
      cy.contains('Impressum')
      cy.get('#BackArrow').click()
      cy.contains('Helikopter Rundflüge in NRW')
      cy.get('#HamburgerContainer').click()
      cy.get('#HamburgerMenu').should('be.visible')
      cy.get('#HamburgerMenu > a[destination=datenschutz]').click()
      cy.contains("§")
      cy.get('#BackArrow').click()
      cy.contains('Helikopter Rundflüge in NRW')
    })
  })
 })