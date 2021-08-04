import React, { useEffect, useState } from "react"
import DataHandlerComponent from "../DataHandlerComponent";
import './DrinksComponent.css'
import { Link } from 'react-router-dom'


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
        {/* <Link to={"/drink/:drinkid"}></Link>  */}
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

export default DrinksComponent