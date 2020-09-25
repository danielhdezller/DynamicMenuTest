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
  let listMenu = [];
  if (menus.length) {
    listMenu = menus[0].restaurant.map((menu, index) =>
    <li key={index}>{menu.dish} {menu.price}€</li>
    );
  }

  return (
    <div>
      <h1>MyMenu</h1>
      <div className="btn-group">
        <NavLink to={`/homepage/${userName}`} className="btn" activeClassName="active">
          Back
        </NavLink>
        </div>
        <div>
          <h2>Main Dishes</h2>
          <ul>{listMenu}</ul>
        </div>
    </div>
  )
}

export default MyMenu;