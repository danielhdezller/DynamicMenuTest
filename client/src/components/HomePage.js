import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../assets/css/homePage.css'
function HomePage () {

  const {email} = useParams();

  return (
    <div className="container">

      <header>
        <div >
          <img src={require('../assets/LOGO.png')} alt="LOGO" className="img-logo"/>
        </div>
        <div className="btn-group"> 
          <Link to="/" className="btn" activeClassName="active">
            Logout
          </Link>
          <br/>
          <Link to={`/homepage/${email}/userprofile`} className="btn" activeClassName="active">
            User Profile
          </Link>
        </div>
      </header>

      <div className="btn-homepage-group">
        <Link to={`/homepage/${email}/mymenu`} className="btn-homepage" activeClassName="active">
          My Menu
        </Link>
        <Link to={`/homepage/${email}/menuform`} className="btn-homepage" activeClassName="active">
          Edit Menu
        </Link>
        <Link to={`/homepage/${email}/qrcodegenerator`} className="btn-homepage" activeClassName="active">
          QR Code
        </Link>
      </div>
    </div>
  )
}

export default HomePage;