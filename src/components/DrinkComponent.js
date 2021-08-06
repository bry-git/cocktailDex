import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom";
import DataHandlerComponent from '../DataHandlerComponent';
import './DrinkComponent.css'
import RelatedDrinks from "./RelatedDrinks";
import Chip from '@material-ui/core/Chip';

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

  const displayTags = (strTags) => {
    if (strTags) {
    //"strTags": "IBA,ContemporaryClassic,Alcoholic,USA,Asia,Vegan,Citrus,Brunch,Hangover,Mild",
    const arrayOfTags = strTags.split(',');
    //break this string into an array, each element is one tag
    // <Chip label="Basic" variant="outlined" />
    const listOfTags = arrayOfTags.map((tag) => {
      return (
        <Chip label={tag} variant="outlined" />
      )
    })
    //use map to return a chip jsx component for each tag

    //render the array in the return

    return (
      <div><b>Tags:</b> {listOfTags}</div>
    )
    } else {
      return (
        <div><b>Tags:</b> </div>
      )
    }
  }

  const DrinkDetailsPage = (props) => {

      var ingredients = []
      for(let i = 1; i <= 15; i++) {
        if(props.drink[`strIngredient${i}`] == null || props.drink[`strMeasure${i}`] == null) {
          break;
        }
        ingredients.push(<tr><td>{props.drink[`strIngredient${i}`]}</td><td>{props.drink[`strMeasure${i}`]}</td></tr>)
      }

      return(
        <section className="drink-page-container">
        <div className="details-container">
          <div className="details-image">
            <img src={props.drink.strDrinkThumb} alt={props.drink.strDrink}></img>
          </div>
          <div className="details">
            <h2>{props.drink.strDrink}</h2>
            <p><b>Category: </b>{props.drink.strCategory}</p>
            <p>{displayTags(props.drink.strTags)}</p>
            <p><b>Instructions:</b> {props.drink.strInstructions}</p>
            <div className="ingredient-container">
            <table>
              <tr><th>Ingredients</th><th>Measures</th></tr>
              {ingredients}
            </table>
            </div>
          </div>
        </div>
        <RelatedDrinks drink={props.drink}/>
        </section>
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