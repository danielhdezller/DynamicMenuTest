import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

function MyMenu () {

  const {userName} = useParams();

  return (
    <div>
      <h1>MyMenu</h1>
      <div className="btn-group">
        <NavLink to={`/homepage/${userName}`} className="btn" activeClassName="active">
          Back
        </NavLink>
        </div>
    </div>
  )
}

export default MyMenu;