import React, { useEffect, useState } from 'react'
import DataHandlerComponent from '../DataHandlerComponent'
import { withRouter } from "react-router-dom";

const RelatedDrinks = (props) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        var ingredients = []

        for (let i = 1; i <= 2; i++) {
            if (props.drink[`strIngredient${i}`] == null) {
                break;
            }
            ingredients.push(props.drink[`strIngredient${i}`])
        }

        console.log(ingredients)

        const dataHandler = new DataHandlerComponent(false);
        dataHandler.getDrinksByIngredients(0, 50, ingredients)
            .then((data) => setData(data))
            .then(() => setIsLoading(false))

            console.log('data', data)
    }, []);




    return (
        <div className="RelatedDrinksList">
            <p>RELATED DRINKS</p>
        </div>
    )
}

export default withRouter(RelatedDrinks)