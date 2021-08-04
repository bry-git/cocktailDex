import * as getDrinksPopularJSON from './mockData/getDrinksPopular.json';
import * as getDrinksRandomJSON from './mockData/getDrinksRandom.json';
import * as getDrinkRandomJSON from './mockData/getDrinkRandom.json';
import * as getDrinksByFirstLetterJSON from './mockData/getDrinksByFirstLetter.json';
import * as getIngredientsAllJSON from './mockData/getIngredientsAll.json';
import * as getGlassesAllJSON from './mockData/getGlassesAll.json';
import * as getCategoriesAllJSON from './mockData/getCategoriesAll.json';
import * as getDrinksBySearchJSON from './mockData/getDrinksBySearch.json';
import * as getDrinksByIngredientsJSON from './mockData/getDrinksByIngredients.json';

//get drink by ID imports
import * as drink11000JSON from './mockData/drinks/11000.json';
import * as drink11001JSON from './mockData/drinks/11001.json';
import * as drink11002JSON from './mockData/drinks/11002.json';
import * as drink11003JSON from './mockData/drinks/11003.json';
import * as drink11004JSON from './mockData/drinks/11004.json';
import * as drink11005JSON from './mockData/drinks/11005.json';
import * as drink11006JSON from './mockData/drinks/11006.json';
import * as drink11007JSON from './mockData/drinks/11007.json';
import * as drink11008JSON from './mockData/drinks/11008.json';
import * as drink11009JSON from './mockData/drinks/11009.json';
import * as drink11010JSON from './mockData/drinks/11010.json';
import * as drink11011JSON from './mockData/drinks/11011.json';
import * as drink11012JSON from './mockData/drinks/11012.json';
import * as drink11013JSON from './mockData/drinks/11013.json';
import * as drink11014JSON from './mockData/drinks/11014.json';
import * as drink11016JSON from './mockData/drinks/11016.json';
import * as drink11019JSON from './mockData/drinks/11019.json';
import * as drink11020JSON from './mockData/drinks/11020.json';
import * as drink11021JSON from './mockData/drinks/11021.json';
import * as drink11022JSON from './mockData/drinks/11022.json';


//Runs the requsted API and returns a promise with the data
class DataHandlerComponent {
  constructor(dev=true) {
    this.dev = dev;
  }

  //utility function
  promiseInput = (input) => {
	  //the input parameter is in scope to the below promise now
    return new Promise(function(resolve, reject)
    {
      resolve(input);
    });
  }

  //getDrinksAll Will Go Here

  getDrinksByID = async (drinkID) => {
    if (this.dev) {
      try {
        switch(drinkID) {
          case 11000:
            return await this.promiseInput(drink11000JSON.default)
          case 11001:
            return await this.promiseInput(drink11001JSON.default)
          case 11002:
            return await this.promiseInput(drink11002JSON.default)
          case 11003:
            return await this.promiseInput(drink11003JSON.default)
          case 11004:
            return await this.promiseInput(drink11004JSON.default)
          case 11005:
            return await this.promiseInput(drink11005JSON.default)
          case 11006:
            return await this.promiseInput(drink11006JSON.default)
          case 11007:
            return await this.promiseInput(drink11007JSON.default)
          case 11008:
            return await this.promiseInput(drink11008JSON.default)
          case 11009:
            return await this.promiseInput(drink11009JSON.default)
          case 11010:
            return await this.promiseInput(drink11010JSON.default)
          case 11011:
            return await this.promiseInput(drink11011JSON.default)
          case 11012:
            return await this.promiseInput(drink11012JSON.default)
          case 11013:
            return await this.promiseInput(drink11013JSON.default)
          case 11014:
            return await this.promiseInput(drink11014JSON.default)
          case 11016:
            return await this.promiseInput(drink11016JSON.default)
          case 11019:
            return await this.promiseInput(drink11019JSON.default)
          case 11020:
            return await this.promiseInput(drink11020JSON.default)
          case 11021:
            return await this.promiseInput(drink11021JSON.default)
          case 11022:
            return await this.promiseInput(drink11022JSON.default)
          default:
            throw new Error('invalid mock API ID');
        }
    } catch (error) {
      console.log('Drink ID not in mock API', error)
    }
    } else {
      try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drinkID}`)
      return await response.json()
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinksPopular = async () => {
    if (this.dev) {
      try {
      return await this.promiseInput(getDrinksPopularJSON.default)
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
      return await response.json()
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinkRandom = async () => {
    if (this.dev) {
      try {
      return await this.promiseInput(getDrinkRandomJSON.default)
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/random.php')
      return await response.json()
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinksRandom = async () => {
    if (this.dev) {
      try {
      return await this.promiseInput(getDrinksRandomJSON.default)
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
      return await response.json()
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinksByFirstLetter = async (letter) => {
    if (this.dev) {
      try {
      return await this.promiseInput(getDrinksByFirstLetterJSON.default)
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${letter}`)
      return await response.json()
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinksBySearch = async (searchString) => {
    if (this.dev) {
      try {
        if (!searchString) {
          throw new Error('expects a non empty search string')
        }
      return await this.promiseInput(getDrinksBySearchJSON.default)
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
        if (!searchString) {
          throw new Error('expects a non empty search string')
        }
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${searchString}`)
      return await response.json()
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getIngredientsAll = async () => {
    if (this.dev) {
      try {
      return await this.promiseInput(getIngredientsAllJSON.default)
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list')
      return await response.json()
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinksByIngredients = async (ingredients) => {
    if (this.dev) {
      try {
        if (!ingredients || !Array.isArray(ingredients)) {
          throw new Error('expects and array of strings of approved ingredients')
        } else if (ingredients.length === 0) {
          throw new Error('ingredients array cannot be empty')
        }
        return await this.promiseInput(getDrinksByIngredientsJSON.default)
      } catch (error) {
        console.log('Request failed', error)
      }
    } else {
        try {
          if (!ingredients || !Array.isArray(ingredients)) {
            throw new Error('expects and array of strings of approved ingredients')
          } else if (ingredients.length === 0) {
            throw new Error('ingredients array cannot be empty')
          }

          const list = ingredients.join(",")
          const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${list}`)
          return await response.json()
      } catch (error) {
        console.log('Request failed', error)
      }
    }
  }

  getGlassesAll = async () => {
    if (this.dev) {
      try {
      return await this.promiseInput(getGlassesAllJSON.default)
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?g=list')
      return await response.json()
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getCategoriesAll = async () => {
    if (this.dev) {
      try {
      return await this.promiseInput(getCategoriesAllJSON.default)
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list')
      return await response.json()
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }


}

export default DataHandlerComponent