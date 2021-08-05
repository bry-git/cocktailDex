import React, {useState, useEffect} from "react"
import { withRouter } from "react-router-dom";
import DataHandlerComponent from '../DataHandlerComponent';

const DrinkComponent = (props) => {
  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  //this use effect will load the drink data for you, the critical varaible is the second parameter to use effect
  //anything in the second parameter array will cause a re-render of the given use effect.
  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    const drinkId = props.match.params.drinkid;
    if (drinkId) {
      dataHandler.getDrinkByID(11000)
        .then((data) => setData(data))
        .then(() => setIsLoading(false))
    }
  }, [props.match.params.drinkid]);

  //props.match.params.movieid

  return (
    <>
      <p>drink component{props.match.params.drinkid}</p>
      <p>{isLoading ? <p></p> : <div>{JSON.stringify(data.drinks[0])}</div>}</p>
    </>
  )
}

export default withRouter(DrinkComponent)