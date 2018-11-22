import React from 'react';
import { oneBTNstyle, btndiv } from './style';

const ButtonDiv = () =>
<div>
  <div style={btndiv}>
    <button style={oneBTNstyle}>Cuisine</button>
    <button style={oneBTNstyle}>Sucette</button>
    <button style={oneBTNstyle}>Guitare</button>
  </div>
  <div style={btndiv}>
    <button style={oneBTNstyle}>Tasse</button>
    <button style={oneBTNstyle}>Cafe</button>
    <button style={oneBTNstyle}>Train</button>
    <button style={oneBTNstyle}>Balcon</button>
  </div>
  <div style={btndiv}>
    <button style={oneBTNstyle}>Voiture</button>
    <button style={oneBTNstyle}>Bateaux</button>
    <button style={oneBTNstyle}>Avion</button>
  </div>
  <div style={btndiv}>
    <button style={oneBTNstyle}>Telephone</button>
    <button style={oneBTNstyle}>Fourchette</button>
  <br/>
  </div>

  </div>

export default ButtonDiv;
