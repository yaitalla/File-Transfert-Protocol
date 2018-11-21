import React from 'react';
import { flexContainer, flexUl, item, btnStyle, btnStyles, flexHeader, flexBody} from './style';

const Maquette = () =>
<div style={flexContainer}>

  <div style={flexHeader}>
    <button style={btnStyles}> Back</button>
    <h2 style={{"color": "rgb(70, 164, 201)"}}>Enter your seedphrase in the box below.</h2>
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
          <button style={btnStyle}>Validate</button>
        </li>
      </ul>
  </div>

</div>

export default Maquette;
