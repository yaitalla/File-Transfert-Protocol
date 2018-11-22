import React from 'react';
import {
  flexContainer, flexUl, item,
  btnStyle, btnStyles,
  flexHeader, flexBody } from './style';

const Bonus1 = () =>
<div style={flexContainer}>

  <div style={flexHeader}>
    <button style={btnStyles}> Back</button>
    <h2 style={{"color": "rgb(70, 164, 201)"}}>Enter your seedphrase in the box below.</h2>
  </div>

  <div style={flexBody}>
      <ul style={flexUl}>
        <li style={item}>
          <div>
            <h4>🠻 Your password is different</h4>

            <input style={{"height": "80px", "width": "60%", "backgroundColor": "rgb(242, 242, 242)"}} type="textarea"/>
          </div>
        </li>
        <br/>

        <li style={item}>
          <button style={btnStyle}>Validate</button>
        </li>
      </ul>
  </div>

</div>

export default Bonus1;
