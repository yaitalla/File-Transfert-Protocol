import React from 'react';
import { flexContainer, flexUl, item, btnStyle, btnStyles, flexHeader, flexBody} from './style';

const Maquette = () =>
<div style={flexContainer}>

  <div style={flexHeader}>
    <button style={btnStyles}> Back</button>
    <h1>Regardez toutes ces belles maquettes</h1>
  </div>

  <div style={flexBody}>
      <ul style={flexUl}>
        <li style={item}>
          <h4>Ecrivez des trucs</h4>
        </li>
        <li style={item}>
          <div>
            <input style={{"height": "80px", "width": "400px"}} type="textarea"/>
          </div>
        </li>
        <br/>
        <li style={item}>
          <input type="checkbox" /> I accept Terms of services<br/>
        </li>
        <li style={item}>
          <button style={btnStyle}>Button</button>
        </li>
      </ul>
  </div>

</div>

export default Maquette;
