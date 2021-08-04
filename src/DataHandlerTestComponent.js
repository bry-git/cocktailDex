import React, {useState, useEffect} from "react"
import DataHandlerComponent from './DataHandlerComponent';

const DataHandlerTestComponent = (props) => {

  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  
  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    dataHandler.getDrinksPopular().then((data) => setData(data)).then(() => setIsLoading(false))
  });

  const loadingText = () => {
    return (<div>Loading</div>)
  }

  const outputText = () => {
    return (<div>Output</div>)
  }

  return (
    props.isLoading ? loadingText() : outputText()
  )

}

export default DataHandlerTestComponent