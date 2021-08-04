import * as getDrinksPopularJSON from './mockData/getDrinksPopular.json';
import * as getDrinksRandomJSON from './mockData/getDrinksRandom.json';
import * as getDrinkRandomJSON from './mockData/getDrinkRandom.json';
import * as getDrinksByFirstLetterJSON from './mockData/getDrinksByFirstLetter.json';
import * as getIngredientsAllJSON from './mockData/getIngredientsAll.json';
import * as getGlassesAllJSON from './mockData/getGlassesAll.json';
import * as getCategoriesAllJSON from './mockData/getCategoriesAll.json';
//Runs the requsted API and returns a promise with the data
class DataHandlerComponent {
  constructor(dev=true) {
    this.dev = dev;
  }

  promiseInput = (input) => {
	  //the input parameter is in scope to the below promise now
    return new Promise(function(resolve, reject)
    {
      resolve(input);
    });
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