import React from 'react';
import {
  flexContainer, flexUl, item,
  btnStyle, btnStyles, title, input,
  flexHeader, flexBody } from './style';

const Bonus1 = () =>
<div style={flexContainer}>

  <div style={flexHeader}>
    <button style={btnStyles}> Back</button>
    <h2 style={title}>Enter your seedphrase in the box below.</h2>
  </div>

  <div style={flexBody}>
      <ul style={flexUl}>
        <li style={item}>
          <div>
            <h4>↓ Your password is different</h4>

            <input style={input} type="textarea"/>
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
