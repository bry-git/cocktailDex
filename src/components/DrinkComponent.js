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
        if(props.drink[`strIngredient${i}`] == null || props.drink[`strMeasure${i}`] == null) {
          break;
        }
        ingredients.push(<tr><td>{props.drink[`strIngredient${i}`]}</td><td>{props.drink[`strMeasure${i}`]}</td></tr>)
      }

      return(
        <div className="details-container">
          <div className="details-image">
            <img src={props.drink.strDrinkThumb}></img>
          </div>
          <div className="details">
            <h2>{props.drink.strDrink}</h2>
            <p><b>Category: </b>{props.drink.strCategory}</p>
            <p><b>Tags:</b> {props.drink.strTags}</p>
            <p><b>Instructions:</b> {props.drink.strInstructions}</p>
            <div className="ingredient-container">
            <table>
              <tr><th>Ingredients</th><th>Measures</th></tr>
              {ingredients}
            </table>
            </div>
          </div>
        </div>
      )
  }

  return (
    <>
      {isLoading ? ( <p>loading...</p>
      ) : (
        <div>
          <DrinkDetailsPage drink={data.drinks[0]}/>
          </div>)}
      </>
      )
}



      export default withRouter(DrinkComponent)