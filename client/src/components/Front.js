import React from 'react';
import { NavLink } from 'react-router-dom';
import Lottie from "lottie-react";
import restaurantAnimation from "../assets/lottie/restaurantAnimation.json"
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
          
          <NavLink to="/register" className="btn" activeClassName="active">
            Register
          </NavLink>
          </div>
      </header>
      <div className ="front-description">
        <div className="description">
          <p>
            The Dynamic Menu is designed to adapt your Restaurant Menu at any time in just a few minutes.<br/>
            It is ideal for restaurants that change their menu depending on the season. <br/>
            Join us and try it for free!<br/>
          </p>
          <div className="lottie">
            <Lottie className="lottie" animationData={storeIcon}/>
          </div>
        </div>
        <div className="description">
          <div className="lottie">
            <Lottie className="lottie" animationData={scanMenu}/>
          </div>
          <p>
          Desde nuestra plataforma podrás generar tu propio codigo QR de forma facil y sencilla"
          </p>
        </div>
        <div className="description">
          <p>
          Protege a tus clientes con un Menú 100% digital<br/>
          Evita el uso de menús físicos con esta herramienta,<br/>
          que hace que tus clientes accedan a tu menú desde sus dispositivos moviles.
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