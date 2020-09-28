import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

function UserProfile () {

  const {email} = useParams();

  return (
    <div>
      <h1>UserProfile</h1>
      <div className="btn-group">
        <NavLink to={`/homepage/${email}`} className="btn" activeClassName="active">
          Back
        </NavLink>
        </div>
    </div>
  )
}

export default UserProfile;