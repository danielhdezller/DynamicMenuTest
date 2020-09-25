import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import apiService from '../ApiService';
import Starters from './Starters'
import Main from './Main'

function MenuForm () {
  const {userName} = useParams();

  return (
    <div className="container">
      <header>
        <h1>MenuForm</h1>
        <div className="btn-group">
          <NavLink to={`/homepage/${userName}`} className="btn" activeClassName="active">
            Back
          </NavLink>
          </div>
      </header>
          <Starters />

    </div>
  )
}

export default MenuForm;