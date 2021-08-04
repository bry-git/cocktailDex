import React, { } from "react"
import DrinkComponent from "./DrinkComponent";


const DrinksComponent = (props) => {

  console.log(props)
  if(props.isLoading) {
    return <h1>Loading... please wait.</h1>
  }

  return (
        <div>
          <h1>Drinks Component</h1>
          {props.drinks.map((drink) => {return <DrinkComponent drink={drink}/>})}
        </div>
  );
};

export default DrinksComponent