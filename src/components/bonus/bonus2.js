import React from 'react';
import {
  flexContainer, flexUl, item, flexinput,
  btnStyle, btnStyles, flexdiv,
  flexHeader, flexBody, h2style } from './style';

const Bonus2 = () =>
<div style={flexContainer}>

  <div style={flexHeader}>
    <button style={btnStyles}> Back</button>
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
          <input style={flexinput} type="password"/>
          <input style={flexinput} type="password"/>
        </div>

        <br/>

        <li>
          <button style={btnStyle}>Validate</button>
        </li>
      </ul>
  </div>

</div>

export default Bonus2;
