import React, {useEffect, useState} from 'react';
import { useParams, NavLink } from 'react-router-dom';

import apiService from '../ApiService';
import '../assets/css/userProfile.css';

function UserProfile () {

  const {email} = useParams();
  const [user, setEvents] = useState([]);
  
  useEffect( () =>{
    apiService.getMenu()
    .then(user => setEvents(user)) 
  }, [])
  
  console.log( '----------> user:', user);

  let name,
  lasttName,
  restauranttName,
  emaill;

  if (user.length) {
    name = user[0].firstName;
    lasttName = user[0].lastName;
    emaill = user[0].email;
    restauranttName = user[0].restaurantName;
  }

  return (
    <div>
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
      <div className="user-profile-conten">
        <div>
          <h1>UserProfile</h1>
          <h4>User Name: {name}</h4> 
          <h4>Last Name: {lasttName}</h4> 
          <h4>Restaurant Name: {restauranttName}</h4> 
          <h4>Email: {emaill}</h4> 
        </div>
      </div>
    </div>
  )
}

export default UserProfile;