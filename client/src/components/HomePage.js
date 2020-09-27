import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import '../assets/css/homePage.css'
function HomePage () {

  const {userName} = useParams();

  return (
    <div className="container">

      <header>
        <div>
          <img src={require('../assets/LOGO.png')} alt="LOGO" className="img-logo"/>
        </div>
        <div className="btn-group"> 
          <NavLink to="/" className="btn" activeClassName="active">
            Logout
          </NavLink>
          <NavLink to={`/homepage/${userName}/userprofile`} className="btn" activeClassName="active">
            User Profile
          </NavLink>
        </div>
      </header>
      <hr />

      <div className="btn-homepage-group">
        <NavLink to={`/homepage/${userName}/mymenu`} className="btn-homepage" activeClassName="active">
          My Menu
        </NavLink>
        <NavLink to={`/homepage/${userName}/menuform`} className="btn-homepage" activeClassName="active">
          Edit Menu
        </NavLink>
        <NavLink to={`/homepage/${userName}/qrcodegenerator`} className="btn-homepage" activeClassName="active">
          QR Code
        </NavLink>
      </div>
    </div>
  )
}

export default HomePage;