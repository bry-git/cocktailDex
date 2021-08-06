import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Button from '@material-ui/core/Button';
import { StylesProvider } from "@material-ui/core/styles";
import useStyles from './NavBar.styles'
import { useHistory } from 'react-router-dom'
import './NavBar.css'


const Navbar = (props) => {
  const history = useHistory()
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('')

  const classes = useStyles();

  const handleSearchInputChange = (event) => {
    //console.log('Search', event.target.value);
    setSearchQuery(event.target.value);
  }
  const handleSearchClick = () => {
    //props.setSearchCallback(searchQuery);
    props.setDisplayModeCallback({ mode: 'search', query: searchQuery, limit: 15, offset: 0, page: 1});
    history.push(`/`);
  }

  const handleRandomizeClick = () => {
    //props.setSearchCallback('');
    props.setDisplayModeCallback({ mode: 'randomize', query: '', limit: 15, offset: 0, page: 1});
    history.push(`/`);
  }

  const handleLogoClick = () => {
    //props.setSearchCallback('');
    props.setDisplayModeCallback({ mode: 'default', query: '', limit: 15, offset: 0, page: 1});
    history.push(`/`);
  }

  const handleGetByIngredient = (query) => {
    props.setDisplayModeCallback({ mode: 'mainingredient', query: [query], limit: 15, offset: 0, page: 1});
    history.push(`/`);
  }

  useEffect(() => {
    if (props.displayMode.mode !== 'mainingredient') {
      setSearchQuery(props.displayMode.query)
    }
  }, [props.displayMode]);

  return (
    <StylesProvider injectFirst>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className="top-left">
              <IconButton color="inherit" onClick={handleLogoClick}>
                <LocalBarIcon />
              </IconButton>
              <Button color="inherit" className={classes.title} variant="h6" onClick={handleLogoClick}>
                CocktailDex
              </Button>
              <Button color="inherit" className={classes.title} variant="h8" onClick={handleRandomizeClick}>
                Randomize
              </Button>
            </div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">filter by</InputLabel>
                <Select
                  native
                  value={filter}
                  onChange={(event) => {
                    setFilter(event.target.value)
                    handleGetByIngredient(event.target.value)
                  }}
                  label="Filter">
                  <option className="option" aria-label="None" value="" />
                  <option className="option" value={'vodka'}>Vodka</option>
                  <option className="option" value={'gin'}>Gin</option>
                  <option className="option" value={'rum'}>Rum</option>
                  <option className="option" value={'whiskey'}>Whiskey</option>
                </Select>
              </FormControl>

              <IconButton color="inherit" onClick={handleSearchClick} aria-label="search-button">
                <SearchIcon/>
              </IconButton>
              <div className={classes.search}>
                {/* <div className={classes.searchIcon}> */}
                {/*TODO: fix this search button in the search bar something really wrong*/}
                {/* <SearchIcon /> */}
                {/* </div> */}
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onChange={handleSearchInputChange}
                  value={searchQuery}
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