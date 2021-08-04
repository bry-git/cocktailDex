import React, {useState, useEffect} from "react"
import DataHandlerComponent from './DataHandlerComponent';

const DataHandlerTestComponent = (props) => {
  
  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    dataHandler.getDrinksPopular().then((data) => props.setData(data)).then(() => props.setIsLoading(false))
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