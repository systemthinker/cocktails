import React from 'react';
import Home from './components/Home'
import CocktailDetails from './components/CocktailDetails'
import CocktailImages from './components/CocktailsDisplay'
import CocktailList from './components/CocktailList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cocktaillist">CocktailList</Link>
          </li>
          <li>
            <Link to="/cocktailimages">Users</Link>
          </li>
          <li>
            <Link to="cocktaillist/:display">Display</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cocktaillist">
          <CocktailList />
        </Route>
        <Route path="/cocktaillist/:cocktailimages">
          <CocktailImages />
        </Route>
        <Route path="/cocktaildetails">
          <CocktailDetails />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
