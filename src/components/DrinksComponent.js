import React, { useEffect, useState } from "react"
import DataHandlerComponent from "../DataHandlerComponent";


const DrinksComponent = (props) => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    dataHandler.getDrinksPopular().then((data) => setData(data)).then(() => setIsLoading(false))
  }, []);

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h1>Drinks Component</h1>
          {data.drinks.map((drink) => { return  <p>{drink.strDrink}</p>})}
        </div>
        )}
    </>  
  )};

export default DrinksComponent