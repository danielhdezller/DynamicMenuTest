import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

import DynamicForm from './DynamicForm'

function MenuForm () {
  const {userName} = useParams();

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src={require('../assets/LOGO.png')} alt="LOGO" className="img-logo"/>
        </div>
        <div className="btn-group">
          <NavLink to={`/homepage/${userName}`} className="btn" activeClassName="active">
            Back
          </NavLink>
          </div>
      </header>
          <DynamicForm />

    </div>
  )
}

export default MenuForm;