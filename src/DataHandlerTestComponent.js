import React, {useState, useEffect} from "react"
import DataHandlerComponent from './DataHandlerComponent';

const DataHandlerTestComponent = (props) => {
  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    //passing false to the DataHandlerComponentConstructor will swtich data from mock to live
    const dataHandler = new DataHandlerComponent();

    //does not need pagination (results will always be less than 50 drinks)

    //**getDrinkByID will only return IDs 11000 to 11020 in mock mode, if something is outside of this you will get 11000
    //dataHandler.getDrinkByID(11000).then((data) => setData(data)).then(() => setIsLoading(false))
    dataHandler.getDrinksPopular().then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getDrinkRandom().then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getDrinksRandom().then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getGlassesAll().then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getCategoriesAll().then((data) => setData(data)).then(() => setIsLoading(false))

    //results may be more than 50 drinks
    //does need pagination, first paramter is the 'offest' second parameter is the 'limit'
    //offset=0, limit=50, then the next would be offset=50, limit=50, this data is in the loaded object as well

    //**first letter will only return m in mock mode
    //dataHandler.getDrinksByFirstLetter(0,50,'m').then((data) => setData(data)).then(() => setIsLoading(false))

    //**search will only return margarita in mock mode
    //dataHandler.getDrinksBySearch(0,50,'margarita').then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getIngredientsAll(0, 50).then((data) => setData(data)).then(() => setIsLoading(false))

    //**byIngedients will only return ['vodka','gin'] in mock mode
    //dataHandler.getDrinksByIngredients(0,50,['vodka','gin']).then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getDrinksAll(0,50).then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getDrinksByGlass(0,50,'cocktail_glass').then((data) => setData(data)).then(() => setIsLoading(false))

  }, []);

  const loadingText = () => {
    return (<div hidden>Loading</div>)
  }

  const outputText = () => {
    return (<div hidden>Output</div>)
  }

  return (
    isLoading ? loadingText() : outputText()
  )

}

export default DataHandlerTestComponent