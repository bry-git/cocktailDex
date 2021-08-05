import React, { useEffect, useState } from "react"
import DataHandlerComponent from "../DataHandlerComponent";
import './DrinksComponent.css'
import { withRouter } from "react-router-dom";
import DrinkPreview from "./DrinkPreview";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const DrinksComponent = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //this loads getDrinksPopular (the default load)
  useEffect(() => {
    setIsLoading(true);
    const dataHandler = new DataHandlerComponent();
    dataHandler.getDrinksPopular().then((data) => setData(data)).then(() => setIsLoading(false))
  }, []);

  //this use effect handles changes in the search query
  useEffect(() => {
    setIsLoading(true);
    const searchQuery = props.searchQuery;
    const dataHandler = new DataHandlerComponent();
    if (searchQuery) {

      dataHandler.getDrinksBySearch(0,50,props.searchQuery)
      .then((data) => setData(data))
      .then(() => setIsLoading(false))
    } else {
      dataHandler.getDrinksPopular().then((data) => setData(data)).then(() => setIsLoading(false))
    }
  }, [props.searchQuery]);

  const displayDrinks = () => {
    if (data.drinks === 'No Drinks Found') {
      return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        //justify="center"
        //style={{ display: 'flex', minHeight: '100vh' }}
       >

      <Card>
        <CardContent>
          <Typography variant="h5">
            No Drinks found
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      )
    } else {
      return (
        data.drinks.map((drink, index) => {
          return <DrinkPreview drink={drink} key={index} />
        })
      )
    }
  }

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="drinks-component-root">
            {displayDrinks()}
        </div>
      )}
    </>
  )
};

export default withRouter(DrinksComponent)