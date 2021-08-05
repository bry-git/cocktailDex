import  React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { StylesProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import useStyles from './NavBar.styles'
import './NavBar.css'

const Navbar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const classes = useStyles();
  const handleSearchInputChange = (event) => {
    //console.log('Search', event.target.value);
    setSearchQuery(event.target.value);
  }
  const handleSearchClick = () => {
    props.setSearchCallback(searchQuery);
  }

  return (
    <StylesProvider injectFirst>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>

            <img src="../icons/cocktail-solid(1).svg" alt=""></img>

            <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/">
                CocktailDex
              </Link>
            </Typography>
            <Typography className={classes.title} variant="h8" noWrap>
              <Link to="/random">
                Randomize
              </Link>
            </Typography>
            {/* <Typography className={classes.title} variant="h8" noWrap>
              <Link to="/drink/1">
                Drink $MOVE-ME
              </Link>
            </Typography> */}

            <IconButton onClick={handleSearchClick}>
                    <SearchIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                {/*TODO: fix this search button in the search bar something really wrong*/}
                    <SearchIcon />
              </div>
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