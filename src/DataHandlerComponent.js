import * as getDrinksPopularJSON from './mockData/getDrinksPopular.json';
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
}

export default DataHandlerComponent