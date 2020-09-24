import React, { useState } from 'react';
import auth from '../utils/auth'
import apiService from './../ApiService';
import { useHistory } from "react-router-dom";


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
        auth.login(() => history.push(`/homepage/${state.userName}`)); //QUESTION

    };
  
    const validateForm = () => {
      return (
        !state.email || !state.password || !state.firstName || !state.lastName || !state.restaurants 
      );
    };

  return (
    <div>
      <h1>Register</h1>

      <form className="form" onSubmit={handleSubmit}>
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