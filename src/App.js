import React, {useState} from 'react';
import './App.css';
import './components/NavBar'
import { Switch, Route} from "react-router-dom";
import Navbar from './components/NavBar';
import DrinksComponent from './components/DrinksComponent'
import DrinkComponent from './components/DrinkComponent'
import DataHandlerTestComponent from './DataHandlerTestComponent';

function App() {

  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  return (
    <div className="App">
      <Navbar/>
      <DataHandlerTestComponent setData={setData} setIsLoading={setIsLoading} isLoading={isLoading} />
      <Switch >
          <Route exact path="/" >
            <DrinksComponent drinks={data.drinks} isLoading={isLoading} />
          </Route>
          <Route exact path="/drink/:drinkid">
            <DrinkComponent drinks={data} />
          </Route>
          <Route exact path="/random">
          </Route>
      </Switch>

    </div>
  );
}

export default App;
