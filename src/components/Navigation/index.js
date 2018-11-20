import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.js';

const Navigation = () =>

//<div style={css.}></div>
<div style={css.container}>
  <ul style={css.noBullet}>
    <li style={css.item}>
      <Link to={'/'}>home <span></span> </Link>
    </li>
    <li style={css.item}>
      <Link to={'/signup'}>signup <span></span> </Link>
    </li>
    <li style={css.item}>
      <Link to={'/ftp'}>ftp <span></span> </Link>
    </li>
  </ul>
</div>

export default Navigation;
