import React, {} from "react"

const DrinkComponent = (props) => {
  console.log('drink comp props: ', props)
  return (
    <>
    <p>{props.drink.strDrink}</p>
    </>
  )
}

export default DrinkComponent