import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import QRCode from 'qrcode.react'
import ReactToPdf from 'react-to-pdf'

const ref = React.createRef();
console.log( '----------> ref:', ref);

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
      <div ref={ref} id="QR-Code" className="qrcode">
        <h1>{userName}</h1>
        <QRCode  value={URLpath} alt={URLpath}/>
      
      </div>
      <hr/>
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