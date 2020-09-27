import React, {useEffect, useState} from 'react';
import { useParams, NavLink } from 'react-router-dom';
import apiService from '../ApiService';

function MyMenu () {

  const [menus, setEvents] = useState([]);
  const {userName} = useParams();
  
  useEffect( () =>{
    apiService.getMenu()
    .then(menus => setEvents(menus)) 
  }, [])
  
  let listMain,  
    listStarters,
    listDessert,
    listDrinks;

  if (menus.length) {

    listMain = menus[0].restaurant.main.map((menu, index) =>
    <li key={index}>{menu.dish} {menu.price}€</li>
    );
    listStarters = menus[0].restaurant.starters.map((menu, index) =>
    <li key={index}>{menu.dish} {menu.price}€</li>
    );
    listDessert = menus[0].restaurant.dessert.map((menu, index) =>
    <li key={index}>{menu.dish} {menu.price}€</li>
    );
    listDrinks = menus[0].restaurant.drinks.map((menu, index) =>
    <li key={index}>{menu.drink} {menu.price}€</li>
    );
  }

  return (
    <div className="container">
    <header>
      <h1>MyMenu</h1>
      <div className="btn-group">
        <NavLink to={`/homepage/${userName}`} className="btn" activeClassName="active">
          Back
        </NavLink>
      </div>
    </header>
    <div className="menu">
      <div>
        <h2>Starters</h2>
        <ul>{listStarters}</ul>
      </div>
      <div>
        <h2>Main Dishes</h2>
        <ul>{listMain}</ul>
      </div>
      <div>
        <h2>Dessert</h2>
        <ul>{listDessert}</ul>
      </div>
      <div>
        <h2>Drinks</h2>
        <ul>{listDrinks}</ul>
      </div>
    </div>
    </div>
  )
}

export default MyMenu;