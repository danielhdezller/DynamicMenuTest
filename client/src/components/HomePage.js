import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

function HomePage () {

  const {restaurantName} = useParams();
  console.log( '----------> restaurantName:', restaurantName);


  return (
    <div>

<div className="btn-group">
          <NavLink to="/" className="btn" activeClassName="active">
            Logout
          </NavLink>
          {/* <NavLink to="/register" className="btn" activeClassName="active">
            Register
          </NavLink> */}
        </div>
        <hr />
      <h1>{restaurantName}</h1>

    </div>
  )
}

export default HomePage;