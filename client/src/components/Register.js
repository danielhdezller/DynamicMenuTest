import React, { useState } from 'react';
import { useHistory, NavLink } from "react-router-dom";

import apiService from './../ApiService';
import auth from '../utils/auth'

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    restaurants: '',
  };
  
  const Register = () => {
    const [state, setState] = useState(initialState);
  
    const history = useHistory();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
        state && await apiService.register(state);
        auth.login(() => history.push(`/homepage/${state.email}`)); 
    };
  
    const validateForm = () => {
      return (
        !state.email || !state.password || !state.firstName || !state.lastName || !state.restaurants 
      );
    };

  return (
    <div className="container">
      <header>
        <div><img src={require('../assets/LOGO.png')} alt="LOGO" className="img-logo"/></div>
        <div>
          <NavLink to={`/`} className="btn" activeClassName="active">
            Back
          </NavLink>
        </div>
      </header>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="firstName"
          name="firstName"
          value={state.userName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="lastName"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="supersecretthingy"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="restaurants"
          name="restaurants"
          value={state.restaurants}
          onChange={handleChange}
        />
          <button className="form-submit" type="submit" disabled={validateForm()}>
            &nbsp;Register&nbsp;
          </button>
      </form>
    </div>
  );
};

export default Register;