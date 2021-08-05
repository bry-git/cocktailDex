import React, { useEffect, useState } from "react"
import DataHandlerComponent from "../DataHandlerComponent";
import './DrinksComponent.css'
import { withRouter } from "react-router-dom";
import DrinkPreview from "./DrinkPreview";


const DrinksComponent = (props) => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //this loads getDrinksPopular (the default load)
  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    dataHandler.getDrinksPopular().then((data) => setData(data)).then(() => setIsLoading(false))
  }, []);

  useEffect(() => {
    const searchQuery = props.searchQuery;
    if (searchQuery) {
      const dataHandler = new DataHandlerComponent();
      dataHandler.getDrinksBySearch(0,50,props.searchQuery).then((data) => setData(data)).then(() => setIsLoading(false))
    }
  }, [props.searchQuery]);


  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="drinks-component-root">
            {data.drinks.map((drink, index) => {
              return <DrinkPreview drink={drink} key={index} />
            })}
        </div>
      )}
    </>
  )
};

export default withRouter(DrinksComponent)