import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.js';

const Navigation = () =>

//<div style={css.}></div>
<div style={css.container}>
  <div>
  </div>
  <ul style={css.noBullet}>
    <li style={css.item}>
      <Link to={'/'}><span> home </span> </Link>
    </li>
    <li style={css.item}>
      <Link to={'/signup'}><span> signup </span> </Link>
    </li>
    <li style={css.item}>
      <Link to={'/ftp'}><span> ftp </span> </Link>
    </li>
  </ul>
</div>

export default Navigation;
