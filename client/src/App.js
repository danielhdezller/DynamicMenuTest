import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="container">

        <hr />
        <Switch>
          <Route path="/homepage/:restaurantName">
            <HomePage/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register  />
          </Route>
          <Route path="/" exact>
            <Navbar/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
