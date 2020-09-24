import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import QRCode from 'qrcode.react'


function QrCodeGenerator () {

  const {userName} = useParams();
  const URLpath = `http://localhost:3000/homepage/${userName}/mymenu`
  console.log( '----------> URLpath:', URLpath);



  return (
    <div>
      <h1>QrCodeGenerator</h1>
      <div className="btn-group">
        <NavLink to={`/homepage/${userName}`} className="btn" activeClassName="active">
          Back
        </NavLink>
        </div>
        <div className="qrcode">
          <QRCode value={URLpath} alt={URLpath}/>
        </div>
    </div>
  )
}

export default QrCodeGenerator;