import React from 'react';
import { flexContainer, flexUl, item, btnStyle, btnStyles} from './style';

const Box = () =>
<div style={flexContainer}>
  <ul style={flexUl}>
    <li style={item}>
      <h1>Title</h1>
    </li>
    <li style={item}>
      <div style={{"font": "bold"}}>Buy & sell crypto for cash.</div>
      <div>Spend it at physical stores.</div>
    </li>
    <br/>
    <li style={item}>
      <div style={{"backgroundColor": "rgb(242, 242, 242)", "borderRadius": "10px"}}>
        <input type="checkbox" /> I accept Terms of services..<br/>
        <a href="/">Read the terms</a>
      </div>
      <br/>
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
