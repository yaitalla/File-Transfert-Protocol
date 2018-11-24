import React from 'react';
import { Link } from 'react-router-dom';
import { flexContainer, input, flexUl, item, btnStyle, btnStyles, flexHeader, title} from './style';

const Maquette = () =>
<div style={flexContainer}>

  <div style={flexHeader}>
    <Link to={'/menu'}><button style={btnStyles}> Back</button></Link>
    <h2 style={title}>Enter your seedphrase in the box below.</h2>
  </div>

  <div>
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

export default Maquette;
