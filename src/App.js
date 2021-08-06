import React, {useState} from 'react';
import './App.css';
import './components/NavBar'
import { Switch, Route} from "react-router-dom";
import Navbar from './components/NavBar';
import DrinksComponent from './components/DrinksComponent'
import DrinkComponent from './components/DrinkComponent'
import DataHandlerTestComponent from './DataHandlerTestComponent';

function App() {
  // {mode: 'default', query: ''}
  // {mode: 'search', query: 'query'}
  const [displayMode, setDisplayMode] = useState({mode: 'default', query: '', limit: 15, offset: 0, page: 1});

  return (
    <div className="App">
      <Navbar displayMode={displayMode} setDisplayModeCallback={(data) => setDisplayMode(data)} />
      <DataHandlerTestComponent />
      <Switch >
          <Route exact path="/" >
            <DrinksComponent displayMode={displayMode} setDisplayModeCallback={(data) => setDisplayMode(data)} />
          </Route>
          <Route exact path="/drink/:drinkid" >
            <DrinkComponent />
          </Route>
          <Route exact path="/random">
          </Route>
      </Switch>
    </div>
  );
}

export default App;
