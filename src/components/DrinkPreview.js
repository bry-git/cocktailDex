import React, {} from "react";
import {useHistory} from 'react-router-dom'

const DrinkPreview = (props) => {

    const history = useHistory()

    const handleClick = () => {
        history.push(`/drink/${props.drink.idDrink}`);
    }

    return (
        <div className="drink-preview" onClick={handleClick}>
            <img src={props.drink.strDrinkThumb} alt=""></img>
            <p>{props.drink.strDrink}</p>
        </div>
    )
}

export default DrinkPreview