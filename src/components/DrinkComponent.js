import React, {} from "react"
import { withRouter } from "react-router-dom";

const DrinkComponent = (props) => {


  //props.match.params.movieid

  return (
    <>
      <p>drink component{props.match.params.drinkid}</p>
    </>
  )
}

export default withRouter(DrinkComponent)