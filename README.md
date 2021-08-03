# cocktailDex
SDI cohort 06 project number 1 - a pokedex of cocktails

## Data API
- https://www.thecocktaildb.com/api.php

## Developers 

- to install dependencies in your environment, run ```npm install```

- to start the web app locally, run ```yarn start``` 
- to run unit tests, run ```yarn test``` 
- to run cypress e2e tests, run ```yarn e2e``` 

- unit tests are in ```./coctailDex/src/__tests_/```
- e2e tests are in ```./coctailDex/cypress/integration/```

## Target Audience:
Bartenders and folks who make cocktails 

## Problem Statement: As a bartender, I want to be able to look up recipes for cocktails, so that I can make cocktails without having to memorize the recipes and be able to quickly find the recipes. I also need to be able to suggest a cocktail based on the alcohol to a customer.

## User Stories (25-30):
- As a user I should land at a home page that displays a random list of cocktails to choose from by their picture and title
- As a user I should be able to search for a cocktail by name
- As a user I should be able to search for a cocktail by ingredient
- As a user I should be able to click a cocktail card and view the details on it 
- As a user on / I should be able to filter by type of alcohol in cocktail and the list of displayed cocktails updates
- As a user on / I should be able to filter by percentage/proof alcohol content and the list of displayed cocktails updates
- As a user I should be able to navigate to home from any page
- As a user I should be able to click “random cocktail” from any page and it takes me a random cocktail detail page
- As a user I should be able to use search from any page and takes me to my results page
- As a user on / I should be able to click on a picture of a cocktail and it takes me to the details page
- As a user on / I should be able to click on the name of the cocktail and it takes me to the details pages
- As a user I should be able to add to the path URL (ex: .../margarita) and it takes me to the margarita page
- As a user I should be able to switch the order of the list of cocktails on the / page to be in alphabetical order
- As a user on a cocktail detail page I should be able to see sub-cocktails of a main cocktail (ex: Margarita and Strawberry Margarita) and click on them
- As a user on / I should be able to filter by glass type

Main/Routes Pages:
/: The landing page
Sort
Filter


/[cocktail name] : the details page
Description
Ingredients
related
Navbar
Search
Navigate between pages


(MVP) Minimum Viable Product Stories [Prioritize User Stories]:



Team Goals:
SPA Build
React Router
MaterialUI
TDD Driven (Cypress and Jest)

