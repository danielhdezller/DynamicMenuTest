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

function App({ setIsAuthenticated }) {
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
          <NavLink to="/login" className="btn" activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/register" className="btn" activeClassName="active">
            Register
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            este es la pagina de inicio
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route
          path="/register"
          // FIX
          render={(props) => (
            <Register {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
