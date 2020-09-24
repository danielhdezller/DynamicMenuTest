import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar () {
  return (
    <div>
      <h1>Navbar</h1>
      <div className="btn-group">
          <NavLink to="/login" className="btn" activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/register" className="btn" activeClassName="active">
            Register
          </NavLink>
        </div>
    </div>
  )
}

export default Navbar;