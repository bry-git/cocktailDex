import * as getDrinksPopularJSON from './mockData/getDrinksPopular.json';
import * as getDrinksRandomJSON from './mockData/getDrinksRandom.json';
import * as getDrinkRandomJSON from './mockData/getDrinkRandom.json';
import * as getDrinksByFirstLetterJSON from './mockData/getDrinksByFirstLetter.json';
import * as getDrinksByGlassJSON from './mockData/getDrinksByGlass.json';
import * as getIngredientsAllJSON from './mockData/getIngredientsAll.json';
import * as getDrinksAllJSON from './mockData/getDrinksAll.json';
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
  constructor(dev=false) {
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

    //utility function
  paginateData = (inputData, inputOffset=0, inputLimit=50) => {

    if (inputOffset < 0 || isNaN(inputOffset) || inputLimit < 0 || isNaN(inputLimit)) {
      throw new Error('inputoffset and inputlimit must be positive integers')
    }

    let inputCount = 0;
    let currentData = {offset: inputOffset, limit: inputLimit}

    let nextOffset = inputLimit + inputOffset
    let nextLimit = inputLimit
    let nextData = {offset: nextOffset, limit: nextLimit}

    let previousOffset = inputOffset - inputLimit
    let previousLimit = inputLimit
    let previousData = {offset: previousOffset, limit: previousLimit}

    //prepare output
    let outputData = {};
    let outputDrinks

    if (!inputData || !inputData.drinks || inputData === undefined) {
      outputDrinks = 'No Drinks Found'
    } else {
      inputCount = inputData.drinks.length;
      outputDrinks = inputData.drinks.slice(inputOffset, nextOffset)
    }

    if (nextOffset > inputCount) {
      nextData = 'null';
    }
    if (previousOffset < 0) {
      previousData = 'null';
    }

    //add pagination variables to data
    outputData['drinks'] = outputDrinks;
    outputData['count'] = inputCount;
    outputData['current'] = currentData;
    outputData['next'] = nextData;
    outputData['previous'] = previousData;
    return outputData;
  }

  //getDrinksAll Will Go Here
  getDrinksAll = async (offset=0,limit=50) => {
    if (this.dev) {
      try {
      return await this.promiseInput(getDrinksAllJSON.default)
        .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=')
      return await response.json()
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinkByID = async (drinkID) => {
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
            return await this.promiseInput(drink11000JSON.default)
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

  getDrinksPopular = async (offset=0,limit=50) => {
    if (this.dev) {
      try {
      return await this.promiseInput(getDrinksPopularJSON.default)
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
      return await response.json()
        .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinkRandom = async (offset=0,limit=50) => {
    if (this.dev) {
      try {
      return await this.promiseInput(getDrinkRandomJSON.default)
        .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/random.php')
      return await response.json()
        .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinksRandom = async (offset=0,limit=50) => {
    if (this.dev) {
      try {
      return await this.promiseInput(getDrinksRandomJSON.default)
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
      return await response.json()
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinksByFirstLetter = async (offset=0,limit=50,letter) => {
    if (this.dev) {
      try {
        if (!letter) {
          throw new Error('expects a non empty letter')
        }
      return await this.promiseInput(getDrinksByFirstLetterJSON.default)
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${letter}`)
      return await response.json()
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinksBySearch = async (offset=0,limit=50, searchString) => {
    if (this.dev) {
      try {
        if (!searchString) {
          throw new Error('expects a non empty search string')
        }
      return await this.promiseInput(getDrinksBySearchJSON.default)
      .then((data) => this.paginateData(data,offset,limit))
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
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinksByGlass = async (offset=0,limit=50, glassString) => {
    if (this.dev) {
      try {
        if (!glassString) {
          throw new Error('expects a non empty search string')
        }
      return await this.promiseInput(getDrinksByGlassJSON.default)
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
        if (!glassString) {
          throw new Error('expects a non empty search string')
        }
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=${glassString}`)
      return await response.json()
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getIngredientsAll = async (offset=0,limit=50) => {
    if (this.dev) {
      try {
      return await this.promiseInput(getIngredientsAllJSON.default)
        .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list')
      return await response.json()
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getDrinksByIngredients = async (offset=0,limit=50,ingredients) => {
    if (this.dev) {
      try {
        if (!ingredients || !Array.isArray(ingredients)) {
          throw new Error('expects and array of strings of approved ingredients')
        } else if (ingredients.length === 0) {
          throw new Error('ingredients array cannot be empty')
        }
        return await this.promiseInput(getDrinksByIngredientsJSON.default)
        .then((data) => this.paginateData(data,offset,limit))
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
          .then((data) => this.paginateData(data,offset,limit))
      } catch (error) {
        console.log('Request failed', error)
      }
    }
  }

  getGlassesAll = async (offset=0,limit=50) => {
    if (this.dev) {
      try {
      return await this.promiseInput(getGlassesAllJSON.default)
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?g=list')
      return await response.json()
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }

  getCategoriesAll = async (offset=0,limit=50) => {
    if (this.dev) {
      try {
      return await this.promiseInput(getCategoriesAllJSON.default)
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    } else {
      try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list')
      return await response.json()
      .then((data) => this.paginateData(data,offset,limit))
    } catch (error) {
      console.log('Request failed', error)
    }
    }
  }


}

export default DataHandlerComponent