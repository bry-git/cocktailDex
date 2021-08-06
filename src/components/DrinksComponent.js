import React, { useEffect, useState } from "react"
import DataHandlerComponent from "../DataHandlerComponent";
import './DrinksComponent.css'
import { withRouter } from "react-router-dom";
import DrinkPreview from "./DrinkPreview";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

const DrinksComponent = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)

  //handles data load based on props.displayMode
  // {mode: 'default', query: ''}
  // {mode: 'search', query: 'query'}
  //mode: 'default', query: '', limit: 50, offset: 0
  // {mode: 'randomize', query: ''}
  useEffect(() => {
    setIsLoading(true);
    const dataHandler = new DataHandlerComponent();
    const mode = props.displayMode.mode;
    const query = props.displayMode.query;
    const offset = props.displayMode.offset;
    const limit = props.displayMode.limit;
    const page = parseInt(props.displayMode.page);
    setPage(page)

    switch (mode) {
      case 'default':
        dataHandler.getDrinksPopular(offset,limit).then((data) => setData(data)).then(() => setIsLoading(false))
        break;
      case 'search':
        if (query) {
          dataHandler.getDrinksBySearch(offset,limit,query)
          .then((data) => setData(data))
          .then(() => setIsLoading(false))
        } else {
          dataHandler.getDrinksPopular(offset,limit).then((data) => setData(data)).then(() => setIsLoading(false))
        }
        break;
      case 'randomize':
        dataHandler.getDrinksRandom().then((data) => setData(data)).then(() => setIsLoading(false))
        break;
      case 'firstletter':
        dataHandler.getDrinksByFirstLetter(offset,limit,query).then((data) => setData(data)).then(() => setIsLoading(false))
        break;
      case 'mainingredient':
        dataHandler.getDrinksByIngredients(offset,limit,query).then((data) => setData(data)).then(() => setIsLoading(false))
        break;
      default:
        dataHandler.getDrinksPopular(offset,limit).then((data) => setData(data)).then(() => setIsLoading(false))
    }
  }, [props.displayMode.mode, props.displayMode.query, props.displayMode.offset, props.displayMode.limit, props.displayMode.page]);

  useEffect(() => {
    let totalPages = Math.ceil(parseInt(data.count) / parseInt(props.displayMode.limit))
    setPageCount(totalPages)
  }, [data.count, isLoading, props.displayMode.limit]);

  const handlePageChange = (event, value) => {
    console.log('page changer')
    let nextMode = props.displayMode;
    if (value > page && data.next.offset !== 'null') {
      nextMode.offset = data.next.offset
      nextMode.page = page+1
    }
    if (value < page && data.previous.offset !== 'null') {
      nextMode.offset = data.previous.offset
      nextMode.page = page-1
    }
    props.setDisplayModeCallback(nextMode);
    setPage(value);
  };

  const displayPagination = () => {
    return (
      <Pagination count={pageCount} page={page} onChange={handlePageChange} variant="outlined" shape="rounded" />
    )
  }

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
          <div className="">
            {/* TODO Turn this into a drop down for all the letters of the alphabet */}
            {/* <Button variant="contained" color="primary" onClick={() => handleGetByFirstLetter('m')}>
              Drinks that start with M
            </Button> */}
            {/* TODO Turn this into a drop down for all the main ingredients */}
            {/* Cognac, Tequila, Rum, Vodka, Whiskey, Gin, Bourbon */}
            {/* <Button variant="contained" color="primary" onClick={() => handleGetByIngredient('vodka')}>
              Vodka Drinks
            </Button> */}
          </div>
            {displayDrinks()}
            <div className="paginationarea">
            {displayPagination()}
          </div>
        </div>
      )}
    </>
  )
};

export default withRouter(DrinksComponent)