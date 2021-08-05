import React, { useEffect, useState } from 'react'
import DataHandlerComponent from '../DataHandlerComponent'
import { withRouter } from "react-router-dom";
import DrinkPreview from './DrinkPreview';
import './RelatedDrinks.css'

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



        const dataHandler = new DataHandlerComponent();
        dataHandler.getDrinksByIngredients(0, 50, ingredients)
            .then((data) => setData(data))
            .then(() => setIsLoading(false))
    }, []);

    return (
        <>
            {isLoading ? (
                <div> Loading...</div>
            ) : (
                <div className="related-root">
                <h4>You may also like:</h4>
                <div className="RelatedDrinksList">
                    {data.drinks.map((drink) => {
                        if(drink.idDrink !== props.drink.idDrink){
                            return <DrinkPreview drink={drink}/>}
                        })}
                </div>
                </div>
            )}
        </>
    )
}

export default withRouter(RelatedDrinks)