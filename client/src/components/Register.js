import React, { useState } from 'react';
import auth from '../utils/auth';
import apiService from '../ApiService';



  const initialState = {
    userName: '',
    restaurantName: '',
    email: '',
    password: '',
  };
  
  const Register = (props) => {
    const [state, setState] = useState(initialState);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
        state && apiService.register(state);
        //FIX
        //call apiService to send state 
        // This sets isAuthenticated = true and redirects to profile
        // props.setIsAuthenticated(true);
        // auth.login(() => props.history.push('/profile')); //QUESTION
        
    };
  
    const validateForm = () => {
      return (
        !state.email || !state.password || !state.userName || !state.restaurantName
      );
    };

  return (
    <div>
      <h1>Register</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          value={state.userName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Restaurant Name"
          name="restaurantName"
          value={state.restaurantName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
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
        <button className="form-submit" type="submit" disabled={validateForm()}>
        &nbsp;Register&nbsp;
        </button>
      </form>

    </div>
  );
};

export default Register;