import './App.css';
import './components/NavBar'
import Navbar from './components/NavBar';
import DataHandlerTestComponent from './DataHandlerTestComponent';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <DataHandlerTestComponent />
    </div>
  );
}

export default App;
