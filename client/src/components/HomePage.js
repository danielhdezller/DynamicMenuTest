import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

function HomePage () {

  const {userName} = useParams();
  console.log( '----------> restaurantName:', userName);


  return (
    <div>
      <h1>{userName}</h1>
        <hr />
      <div className="btn-group">
        <NavLink to="/" className="btn" activeClassName="active">
          Logout
        </NavLink>
        <NavLink to={`/homepage/${userName}/userprofile`} className="btn" activeClassName="active">
          User Profile
        </NavLink>
        <NavLink to={`/homepage/${userName}/mymenu`} className="btn" activeClassName="active">
          My Menu
        </NavLink>
        <NavLink to={`/homepage/${userName}/menuform`} className="btn" activeClassName="active">
          Edit Menu
        </NavLink>
        <NavLink to={`/homepage/${userName}/qrcodegenerator`} className="btn" activeClassName="active">
          QR Code
        </NavLink>
      </div>
    </div>
  )
}

export default HomePage;