describe('Login Page', () => {

    beforeEach(() => {
        cy.visit('/')
      })


    it('Attempt to login with no creds', () => {
      cy.get('#sign-in').click()

      cy.get('#username-error').should('be.visible')
    })


    it('Attempt to login with valid username, no password', () => {
        cy.get('#username-field').type("a")
        cy.get('#sign-in').click()

        cy.get('simple-snack-bar').find('span').should('be.visible')
      })

      it('Attempt to login with valid username, invalid password', () => {
        cy.get('#username-field').type("a")
        cy.get('#password-field').type("b")
        cy.get('#sign-in').click()

        cy.get('simple-snack-bar').find('span').should('be.visible')
      })

      it.only('valid login', () => {
        cy.get('#username-field').type("a")
        cy.get('#password-field').type("a")
        cy.get('#sign-in').click()

        cy.url().should('include','/discover')
      })
  })