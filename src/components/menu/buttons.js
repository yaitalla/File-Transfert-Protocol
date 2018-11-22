import React from 'react';
import { oneBTNstyle, btndiv, lstyle } from './style';
import { Link } from 'react-router-dom';

const ButtonDiv = () =>
<div>
  <div style={btndiv}>
    <button style={oneBTNstyle}>Cuisine</button>
    <Link to={'/maquette1'}>
      <button style={lstyle}>Sucette</button>
    </Link>
    <button style={oneBTNstyle}>Guitare</button>
  </div>

  <div style={btndiv}>
    <button style={oneBTNstyle}>Tasse</button>
    <Link to={'/maquette2'}>
      <button style={lstyle}>Cafe</button>
    </Link>
    <button style={oneBTNstyle}>Train</button>
    <button style={oneBTNstyle}>Balcon</button>
  </div>

  <div style={btndiv}>
    <button style={oneBTNstyle}>Voiture</button>
    <Link to={'/bonus'}>
      <button style={lstyle}>Bateaux</button>
    </Link>
    <button style={oneBTNstyle}>Avion</button>
  </div>

  <div style={btndiv}>
    <button style={oneBTNstyle}>Telephone</button>
    <button style={oneBTNstyle}>Fourchette</button>
  <br/>
  </div>

  </div>

export default ButtonDiv;
