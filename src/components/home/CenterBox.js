import React from 'react';
import { flexContainer, pstyle, flexUl, item,
  btnStyle, btnStyles, flexdiv, bolder, grey
} from './style';

const Box = () =>
<div style={flexContainer}>

  <ul style={flexUl}>

    <li style={item}>
    <div style={flexdiv}>
    <p style={pstyle}>BETA</p>
    </div>
      <h1>Dether.</h1>
    </li>
    <li style={item}>
      <div style={bolder}>Buy & sell crypto for cash.</div>
      <div>Spend it at physical stores.</div>
    </li>
    <br/>
    <li style={item}>
      <div style={grey}>
        <input type="checkbox" /> I accept Terms of services..<br/>
        <a href="/">Read the terms</a>
      </div>
      <br/>
    </li>
    <li style={item}>
      <button style={btnStyle}>Create your wallet</button>
    </li>
    <li style={item}>
      <button style={btnStyles}>other Button</button>
    </li>
  </ul>
</div>

export default Box;
