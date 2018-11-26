import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.js';
import { btnStyle, btnStyles, btn } from './styles';

const Navigation = () =>

//<div style={css.}></div>
<div style={css.container}>
  <div>
  </div>
  <ul style={css.noBullet}>

    <li style={css.item}>
      <Link to={'/ftp'}><button style={btnStyles}> ftp </button> </Link>
    </li>
    <li style={css.item}>
      <Link to={'/signup'}><button style={btnStyle}> signup </button> </Link>
    </li>
    <li style={css.item}>
      <Link to={'/menu'}><button style={btn}>maquettes</button> </Link>
    </li>

  </ul>
</div>

export default Navigation;
