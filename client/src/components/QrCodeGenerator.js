import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import QRCode from 'qrcode.react';
import ReactToPdf from 'react-to-pdf';

import '../assets/css/qrCodeGenerator.css'

const ref = React.createRef();

function QrCodeGenerator () {

  const {userName} = useParams();
  const URLpath = `http://localhost:3000/homepage/${userName}/mymenu`

  return (
    <div className="container">
      <header>
        <h1 className="header-title">QrCodeGenerator</h1>
        <div className="btn-group">
          <NavLink to={`/homepage/${userName}`} className="btn" activeClassName="active">
            Back
          </NavLink>
        </div>
      </header>
      <div ref={ref} id="QR-Code" className="qrcode">
        <h1>{userName}</h1>
        <QRCode  value={URLpath} alt={URLpath}/>
      </div>
      <div className="qrcode">
        <ReactToPdf targetRef={ref} filename={userName}>
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
        </ReactToPdf>
      </div>
    </div>
  )
}

export default QrCodeGenerator;