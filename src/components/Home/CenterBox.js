import React from 'react';
import { flexContainer, flexUl, item, btnStyle, btnStyles} from './style';

const Box = () =>
<div style={flexContainer}>
  <ul style={flexUl}>
    <li style={item}>
      <h2>Title</h2>
    </li>
    <li style={item}>
      <div>Buy & sell crypto for cash.</div>
      <div>Spend it at physical stores.</div>
    </li>
    <br/>
    <li style={item}>
      <input type="checkbox" /> I accept Terms of services<br/>
    </li>
    <li style={item}>
      <button style={btnStyle}>Button</button>
    </li>
    <li style={item}>
      <button style={btnStyles}>other Button</button>
    </li>
  </ul>
</div>

export default Box;
