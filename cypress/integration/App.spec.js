

describe('integration tests for CocktailDex', () => {
    beforeEach(() => {
        cy.reload()
        cy.visit('http://localhost:3000/')
    })
    it('the home page loads a navbar', () => {
        cy.findByRole('link', {name: /CocktailDex/i})
        cy.findByRole('textbox', {name: /search/i})
    })
    it('the user can search for a cocktail in the navbar', () => {
        cy.findByRole('textbox', {name: /search/i}).type('Mojito{enter}');

        cy.findByText(/11000/i)
        cy.findByText("Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.")        
    })
    it('home page loads a collection of cocktails', () => {
        cy.findAllByRole('img')
        cy.findByText(/Mojito/i)
        cy.findByText(/Old Fashioned/i)
        cy.findByText(/Long Island Tea/i)
    })
    it('cocktail preview cards navigate to a new page with the cocktails details', () => {
        cy.findByText(/Mojito/i).click();
        cy.findByText(/11000/i)
        cy.findByText("Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.")
    })
    it('clicking on the CocktailDex title routes the user back to the home page', () => {
        cy.findByText(/Mojito/i).click();
        cy.findByText(/11000/i)

        cy.findByRole('link', {name: /CocktailDex/i}).click()
        cy.findAllByRole('img')
        cy.findByText(/Mojito/i)
        cy.findByText(/Old Fashioned/i)
        cy.findByText(/Long Island Tea/i)
    })
    it('home page is dynamic and has a mobile friendly view on mobile viewport', () => {
        cy.viewport(375, 812)

        cy.findByText(/CocktailDex/i).should('not.be.visible')
        cy.get('.drinks-component-root').find('.drink-preview').should('have.length', 20)
    })
    it('user can click the cocktail icon in upper right to go back to home on mobile', () => {
        cy.viewport(375, 812)
        cy.findByText(/Mojito/i).click()
        cy.findByText(/11000/i)

        cy.findByRole('icon', {name: 'cocktail.svg'}).click();
        cy.get('.drinks-component-root').find('.drink-preview').should('have.length', 20)
    })
})