import React from 'react';
import { NavLink } from 'react-router-dom';
import Lottie from "lottie-react";
import scanMenu from "../assets/lottie/scan-menu.json"
import storeIcon from "../assets/lottie/store-icon.json"
import '../assets/css/front.css'

function Front () {

  return (
    <div  >
      <header>
        <div className="logo">
          <img src={require('../assets/LOGO.png')} alt="LOGO" className="img-logo"/>
        </div>
        <div className="btn-group">
          <NavLink to="/login" className="btn" activeClassName="active">
            Login
          </NavLink>
          <br/>
          <NavLink to="/register" className="btn" activeClassName="active">
            Register
          </NavLink>
          </div>
      </header>
      <div className ="front-description">
        <div className="description">
          <p>
            The Dynamic Menu is designed to adapt your Restaurant Menu at any time in just a few minutes.<br/>
            <br/>
            It is ideal for restaurants that change their menu depending on the season. <br/>
            Join us and try it for free!<br/>
          </p>
          <div className="lottie-front">
            <Lottie className="lottie-front" animationData={storeIcon}/>
          </div>
        </div>
        <div className="description">
          <div className="lottie-front">
            <Lottie className="lottie-front" animationData={scanMenu}/>
          </div>
          <p>
          Via our platform you can generate your own QR Code easily and simply!<br/>
          <br/>
          Protect your customers with a 100% Digital Menu. <br/>
          With this app you can avoid the use of physical menus, <br/>
          which makes it simple for your customers to access your menu from their mobile devices. <br/>
          </p>
        </div>

      </div>
      <footer>
        <p>Author: Daniel Hernández Llerena</p>
        <p><a href="mailto:dhdezllerena@gmail.com">dhdezllerena@gmail.com</a></p>
      </footer>
    </div>
  )
}

export default Front;