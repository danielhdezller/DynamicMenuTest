import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import QRCode from 'qrcode.react';
import ReactToPdf from 'react-to-pdf';

import '../assets/css/qrCodeGenerator.css'

const ref = React.createRef();

function QrCodeGenerator () {

  const {email} = useParams();
  const URLpath = `http://localhost:3000/homepage/${email}/mymenu`

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
      <div className="qr-code-content">
      <br/>
      <h1 className="header-title">QrCodeGenerator</h1>
      <br/>
        <ReactToPdf targetRef={ref} filename={email}>
          {({toPdf}) => (
              <div className="btn-to-pdf" onClick={toPdf}>Generate pdf</div>
          )}
          </ReactToPdf>
        <br/>
          <div ref={ref} id="QR-Code" className="qrcode">
              <h3>This is your QR code</h3>
            <QRCode  value={URLpath} alt={URLpath}/>
          </div>
      </div>
    </div>
  )
}

export default QrCodeGenerator;