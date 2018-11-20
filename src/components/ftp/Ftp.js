import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.js';


const Ftp = () => (
  <div style={css.container}>
    <form style={css.item} method="post" action="/ftp/upload" encType="multipart/form-data">
      <button type="file" name="" value="dfile">upload file</button>
    </form>
    <form style={css.item} method="post"  encType="multipart/form-data">
      <button type="file" name="" value="dfile">download picture</button>
    </form>
  </div>
)


export default Ftp;
