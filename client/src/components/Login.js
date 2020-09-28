import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import apiService from '../ApiService';
import auth from '../utils/auth'

const initialState = {
  restaurantName: '',
  password: '',
};

function Login () {
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
    const { restaurantName, password } = state;
    const user = { restaurantName, password };
    const res = await apiService.login(user);
      if (res) { 
        alert(`${res.message}`);
        setState(initialState);
      } else {
        auth.login(() => history.push(`/homepage/${state.restaurantName}`));

      }
  };

  const validateForm = () => {
    return (
    !state.password || !state.restaurantName
    );
  };

  return (
    <div className="container">
      <header>
        <div className="logo"><img src={require('../assets/LOGO.png')} alt="LOGO" className="img-logo"/></div>
        <div className="btn-group">
          <NavLink to={`/`} className="btn" activeClassName="active">
            Back
          </NavLink>
        </div>
      </header>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input 
          className="impt-login"
          type="text"
          placeholder="Restaurant Name"
          name="restaurantName"
          value={state.restaurantName}
          onChange={handleChange}
        />
        <input 
          className="impt-login"
          type="password"
          placeholder="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
        &nbsp;Login&nbsp;
        </button>
      </form>
    </div>
  )
}

export default Login;