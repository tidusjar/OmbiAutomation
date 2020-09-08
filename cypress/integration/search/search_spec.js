describe('Navigation Search', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/discover')
      })
      it('Search displays results', function () {
        cy.get('#nav-search').type('007')
        cy.server()
        cy.route('GET', 'api/v2/search/multi/007', [{
          id: "200761",
          mediaType: "movie",
          poster: "/lqRFYK5OAPnK2iTWqZtk2UepLpV.jpg",
          title: "The Secrets of 007 (1997)"
        }]).as('search')
        cy.wait('@search', { timeout: 10000});
        cy.wait(500);
        cy.get('#mat-option-1 > span > span > span').should('be.visible').should('eq', 'The Secrets of 007 (1997)')
      })

})