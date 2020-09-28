import React, {useEffect, useState} from 'react';
import { useParams, NavLink } from 'react-router-dom';
import apiService from '../ApiService';

import '../assets/css/menu.css'

function MyMenu () {

  const [menus, setMenu] = useState([]);
  const {email} = useParams();
  
  useEffect( () =>{
    apiService.getMenu()
    .then(menus => setMenu(menus)) 
  }, [])
  
  console.log( '----------> menus:', menus);
  let listMain,  
    listStarters,
    listDessert,
    listDrinks,
    restName;

    if (menus.length) {
      
    restName = menus[0].restaurantName;
    listMain = menus[0].restaurantMenu.main.map((menu, index) =>
    <div key={menu.dish} className="listelement"> 
      <li> {menu.dish} </li>
      <div className="price"> {menu.price} € </div>
    </div> 
    );
    listStarters = menus[0].restaurantMenu.starters.map((menu, index) =>
    <div key={menu.dish} className="listelement"> 
      <li> {menu.dish} </li>
      <div className="price"> {menu.price} € </div>
    </div> 
    );
    listDessert = menus[0].restaurantMenu.dessert.map((menu, index) =>
    <div key={menu.dish} className="listelement"> 
      <li> {menu.dish} </li>
      <div className="price"> {menu.price} € </div>
    </div> 
    );
    listDrinks = menus[0].restaurantMenu.drinks.map((menu, index) =>
    <div  key={menu.drink} className="listelement"> 
      <li > {menu.drink} </li>
      <div className="price"> {menu.price} € </div>
    </div>  
    );
  }

  return (
    <div className="container">
      <header>
        <div >
          <img src={require('../assets/LOGO.png')} alt="LOGO" className="img-logo"/>
        </div>
        <div className="btn-group">
          <NavLink to={`/homepage/${email}`} className="btn" activeClassName="active">
            Back
          </NavLink>
        </div>
      </header>
      <div className="content">
      <div className="menu">
        <h1 className="header-title">{restName}</h1>
        <div className="menu-list-container">
          <h2 className="menu-list-title">Starters</h2>
          <ul className="menu-list-ul">{listStarters}</ul>
        </div>
        <div className="menu-list-container">
          <h2 className="menu-list-title">Main Dishes</h2>
          <ul className="menu-list-ul">{listMain}</ul>
        </div>
        <div className="menu-list-container">
          <h2 className="menu-list-title">Dessert</h2>
          <ul className="menu-list-ul">{listDessert}</ul>
        </div>
        <div className="menu-list-container">
          <h2 className="menu-list-title">Drinks</h2>
          <ul className="menu-list-ul">{listDrinks}</ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MyMenu;