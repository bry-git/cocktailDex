import './App.css';
import './components/NavBar'
import { Switch, Route} from "react-router-dom";
import Navbar from './components/NavBar';
import DrinksComponent from './components/DrinksComponent'
import DrinkComponent from './components/DrinkComponent'
import DataHandlerTestComponent from './DataHandlerTestComponent';

function App() {
  return (
    <div className="App">
      <DataHandlerTestComponent />
      <Navbar/>
      <Switch >
          <Route exact path="/" >
            <DrinksComponent />
          </Route>
          <Route exact path="/drink/:drinkid">
            <DrinkComponent />
          </Route>
      </Switch>

    </div>
  );
}

export default App;
