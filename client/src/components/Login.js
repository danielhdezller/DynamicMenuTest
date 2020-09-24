import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import apiService from '../ApiService';

const initialState = {
  userName: '',
  password: '',
};

function Login () {
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
    !state.password || !state.userName
    );
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="form-container">

        <form>
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          value={state.userName}
          onChange={handleChange}
        />
          <input
          type="password"
          placeholder="supersecretthingy"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
          <Link to={`/homepage/${state.userName}`}>
          <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Register&nbsp;
          </button>
        </Link>
        </form>
      </div>
    </div>
  )
}

export default Login;