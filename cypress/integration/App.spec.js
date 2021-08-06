
describe('integration tests for CocktailDex', () => {
    beforeEach(() => {
        cy.reload()
        cy.visit('http://localhost:3000/')
    })
    it('the home page loads a navbar', () => {
        cy.findByRole('button', {name: /CocktailDex/i})
        cy.findByRole('button', {name: /Randomize/i})
        cy.findByText(/filter by/i)
        cy.findByLabelText(/search-button/i)
        cy.findByRole('textbox', {name: /search/i})
    })
    it('the user can search for a cocktail in the navbar', () => {
        cy.findByRole('textbox', {name: /search/i}).type('Margarita');
        cy.findByLabelText(/search-button/i).click()

        cy.findByTestId("Margarita-preview")
        cy.findByTestId("Blue Margarita-preview")
    })
    it('home page loads a collection of cocktails', () => {
        cy.findAllByRole('img')
        cy.findByText(/Mojito/i)
        cy.findByText(/Old Fashioned/i)
        cy.findByText(/Long Island Tea/i)
    })
    it('cocktail preview cards navigate to a new page with the cocktails details', () => {
        cy.findByText(/Mojito/i).click();
        cy.findByText(/Mojito/i)
        cy.findByText("Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.")
    })
    it('clicking on the CocktailDex title routes the user back to the home page', () => {
        cy.findByText(/Mojito/i).click();
        cy.findByText("Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.")

        cy.findByRole('button', {name: /CocktailDex/i}).click();
        cy.findAllByRole('img')
        cy.findByText(/Mojito/i)
        cy.findByText(/Old Fashioned/i)
        cy.findByText(/Long Island Tea/i)
    })
    it('the drink details page lists drinks related to selected drink', () => {
        cy.findByText(/Mojito/i).click();
        cy.findByText("Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.")
    })

    describe('mobile friendly tests', () => {
        it('home page is dynamic and has a mobile friendly view on mobile viewport', () => {
            cy.viewport(400, 812)
    
            cy.findAllByText(/CocktailDex/i).should('not.be.visible')
            cy.get('.drinks-component-root').find('.drink-preview').should('have.length', 20)
        })
        it('user can click the cocktail icon in upper right to go back to home on mobile', () => {
            cy.viewport(400, 812)
            cy.findByText(/Mojito/i).click()
            cy.findByText("Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.")
    
            cy.findByLabelText(/cocktail-home-button/i).click();
            cy.get('.drinks-component-root').find('.drink-preview').should('have.length', 20)
        })
    })
})