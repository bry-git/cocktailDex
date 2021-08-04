import React, {useState, useEffect} from "react"
import DataHandlerComponent from './DataHandlerComponent';

const DataHandlerTestComponent = (props) => {
  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    //dataHandler.getDrinksPopular().then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getDrinksRandom().then((data) => setData(data)).then(() => setIsLoading(false))
    dataHandler.getDrinkRandom().then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getIngredientsAll().then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getGlassesAll().then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getCategoriesAll().then((data) => setData(data)).then(() => setIsLoading(false))
  }, []);

  const loadingText = () => {
    return (<div>Loading</div>)
  }

  const outputText = () => {
    return (<div>Output</div>)
  }

  return (
    isLoading ? loadingText() : outputText()
  )

}

export default DataHandlerTestComponent