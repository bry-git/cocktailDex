import React, { useEffect, useState } from "react"
import DataHandlerComponent from "../DataHandlerComponent";
import './DrinksComponent.css'
import { withRouter } from "react-router-dom";
import DrinkPreview from "./DrinkPreview";


const DrinksComponent = (props) => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    dataHandler.getDrinksPopular().then((data) => setData(data)).then(() => setIsLoading(false))
  }, []);

  const DrinkPreview = (data) => {
    console.log(data);
    return (
      <div className="drink-preview">
        <img src={data.drink.strDrinkThumb} alt=""></img>
        <p>{data.drink.strDrink}</p>
      </div>
    )
  }

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