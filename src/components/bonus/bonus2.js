import React from 'react';
import { Link } from 'react-router-dom';
import {
  flexContainer, flexUl, item, flexinput,
  btnStyle, btnStyles, flexdiv, title,
  flexHeader, flexBody, h2style } from './style';

const Bonus2 = () =>
<div style={flexContainer}>

  <div style={flexHeader}>
    <Link to={'/menu'}><button style={btnStyles}> Back</button></Link>
    <h2 style={h2style}>Create a secure password to encrypt your wallet.</h2>
  </div>

  <div>
    <p style={{"textAlign": "center"}}>(cette maquette est en cours de flexage)</p>
      <ul style={flexUl}>
        <li>
          <h4>your password must contain one of the following characters:</h4>
          <div style={flexBody}>
            <div  style={item}>capital letter</div>
            <div style={item}>special character</div>
            <div style={item} >number</div>
          </div>
        </li>
        <div style={flexdiv}>
          <h5>↓ Your password is different</h5>
          <input style={flexinput} type="password" placeholder='  Password'/>
          <h5>↓ Your password is different</h5>
          <input style={flexinput} type="password"placeholder='  Confirm your Password'/>
        </div>

        <br/>

        <li>
          <button style={btnStyle}>Validate</button>
        </li>
      </ul>
  </div>

</div>

export default Bonus2;
