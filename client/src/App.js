import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Front from './components/Front';
import MenuForm from './components/MenuForm';
import QrCodeGenerator from './components/QrCodeGenerator';
import UserProfile from './components/UserProfile';
import MyMenu from './components/MyMenu';

function App() {


  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/homepage/:userName/mymenu" exact>
            <MyMenu/>
          </Route>
          <Route path="/homepage/:userName/userprofile" exact>
            <UserProfile/>
          </Route>
          <Route path="/homepage/:userName/menuform" exact>
            <MenuForm/>
          </Route>
          <Route path="/homepage/:userName/qrcodegenerator" exact>
            <QrCodeGenerator/>
          </Route>
          <Route path="/homepage/:userName">
            <HomePage/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/" exact>
            <Front/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
