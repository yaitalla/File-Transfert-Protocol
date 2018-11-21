import React from 'react';
import { flexContainer, flexUl, item, btnStyle} from './style';

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
    <li style={btnStyle}>
      <button>Button</button>
    </li>
  </ul>
</div>

export default Box;
