import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

import Starters from './Starters'

function MenuForm () {
  const {userName} = useParams();

  return (
    <div className="container">
      <header>
      <h1>{userName}</h1>
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