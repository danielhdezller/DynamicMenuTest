import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import QRCode from 'qrcode.react'


function QrCodeGenerator () {

  const {userName} = useParams();


  return (
    <div>
      <h1>QrCodeGenerator</h1>
      <div className="btn-group">
        <NavLink to={`/homepage/${userName}`} className="btn" activeClassName="active">
          Back
        </NavLink>
        </div>
        <div className="qrcode">
          <QRCode value="http://facebook.github.io/react/" />
        </div>
    </div>
  )
}

export default QrCodeGenerator;