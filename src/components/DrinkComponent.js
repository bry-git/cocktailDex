import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom";
import DataHandlerComponent from '../DataHandlerComponent';
import './DrinkComponent.css'

const DrinkComponent = (props) => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    const drinkId = props.match.params.drinkid;
    if (drinkId) {
      dataHandler.getDrinkByID(parseInt(drinkId))
        .then((data) => setData(data))
        .then(() => setIsLoading(false))
    }
  }, [props.match.params.drinkid]);

  const DrinkDetailsPage = (props) => {

      var ingredients = []

      for(let i = 1; i <= 15; i++) {
        if(props.drink[`strIngredient${i}`] == null) {
          break;
        }
        ingredients.push(props.drink[`strIngredient${i}`])
      }

      var measures = []

      for(let i = 1; i <= 15; i++) {
        if(props.drink[`strMeasure${i}`] == null) {
          break;
        }
        measures.push(props.drink[`strMeasure${i}`])
      }

      return(
        <div className="details-container">
          <div className="details-image">
            <img src={props.drink.strDrinkThumb}></img>
          </div>
          <div className="details">
            <h2>{props.drink.strDrink}</h2>
            <p>Instructions: {props.drink.strInstructions}</p>
            <div className="ingredient-container">
            <div>Ingredients: {ingredients.map(ingredient => <p>{ingredient}</p>)}
            </div>
            <div>Measures: {measures.map(measure => <p>{measure}</p>)}</div>
            </div>
          </div>
        </div>
      )
  }

  return (
    <>
      <p>drink component{props.match.params.drinkid}</p>
      {isLoading ? ( <p>loading...</p>
      ) : (
        <div>
          <DrinkDetailsPage drink={data.drinks[0]}/>
          </div>)}
      </>
      )
}



      export default withRouter(DrinkComponent)