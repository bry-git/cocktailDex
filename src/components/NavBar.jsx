import  React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { StylesProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import useStyles from './NavBar.styles'
import {useHistory} from 'react-router-dom'
import './NavBar.css'

const Navbar = (props) => {
  const history = useHistory()
  const [searchQuery, setSearchQuery] = useState('');
  const classes = useStyles();
  const handleSearchInputChange = (event) => {
    //console.log('Search', event.target.value);
    setSearchQuery(event.target.value);
  }
  const handleSearchClick = () => {
    props.setSearchCallback(searchQuery);
    history.push(`/`);
  }

  const handleLogoClick = () => {
    props.setSearchCallback('');
    history.push(`/`);
  }

  return (
    <StylesProvider injectFirst>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <IconButton color="inherit" onClick={handleLogoClick}>
            <LocalBarIcon />
          </IconButton>
            <Typography className={classes.title} variant="h6" onClick={handleLogoClick} noWrap>
                CocktailDex
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

            <IconButton color="inherit" onClick={handleSearchClick}>
                    <SearchIcon />
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