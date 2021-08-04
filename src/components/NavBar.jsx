import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { StylesProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useStyles from './NavBar.styles'
import './NavBar.css'

const Navbar = () => {
    const classes = useStyles();

    return (
     <StylesProvider injectFirst>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>

          <img src="../icons/cocktail-solid(1).svg"></img>

            <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">
              CocktailDex
              </Link>
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/drink/1">
              Drink
              </Link>
            </Typography>


            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </StylesProvider>
    );
  }

  export default Navbar