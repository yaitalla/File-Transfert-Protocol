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
      <Link to={'/'}><button style={btnStyle}> home </button> </Link>
    </li>
    <li style={css.item}>
      <Link to={'/signup'}><button style={btnStyles}> signup </button> </Link>
    </li>
    <li style={css.item}>
      <Link to={'/ftp'}><button style={btn}> ftp </button> </Link>
    </li>
    <li style={css.item}>
      <Link to={'/maquette1'}><button style={btn}>maket1</button> </Link>
    </li>
    <li style={css.item}>
      <Link to={'/maquette2'}><button style={btn}>maket2</button> </Link>
    </li>
  </ul>
</div>

export default Navigation;
