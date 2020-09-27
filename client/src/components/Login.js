import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import apiService from '../ApiService';
import auth from '../utils/auth'

const initialState = {
  email: '',
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
    const { email, password } = state;
    const user = { email, password };
    const res = await apiService.login(user);
      if (res) { //QUESTION res.error 
        alert(`${res.message}`);
        setState(initialState);
      } else {
        auth.login(() => history.push(`/homepage/${state.email}`));

      }
  };

  const validateForm = () => {
    return (
    !state.password || !state.email
    );
  };

  return (
    <div className="container">
      <header>
        <div><img src={require('../assets/LOGO.png')} alt="LOGO" className="img-logo"/></div>
        <div className="btn-group">
          <NavLink to={`/`} className="btn" activeClassName="active">
            Back
          </NavLink>
        </div>
      </header>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <button className="form-submit" type="submit" disabled={validateForm()}>
        &nbsp;Login&nbsp;
        </button>
      </form>
    </div>
  )
}

export default Login;