import './App.css';
import MoviesContainer from './components/MoviesContainer';
import MovieDetails from './components/MovieDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {  
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/movie/:idx">
            <MovieDetails />
          </Route>        
          <Route path="/">
            <MoviesContainer />
          </Route>
        </Switch>    
    </Router>        
    </div>
  );
}

export default App;
