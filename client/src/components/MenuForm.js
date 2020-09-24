import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

function MenuForm () {

  const {userName} = useParams();

  return (
    <div>
      <h1>MenuForm</h1>
      <div className="btn-group">
        <NavLink to={`/homepage/${userName}`} className="btn" activeClassName="active">
          Back
        </NavLink>
        </div>
    </div>
  )
}

export default MenuForm;