import React from 'react';
import { Link } from 'react-router-dom';
import { container, item, btn } from './style';


const Ftp = () => (
  <div style={container}>
    <h2 style={item}>File Transfert</h2>
    <form method="post" action="/ftp/upload" encType="multipart/form-data">
      <button style={btn} type="file" name="" value="dfile">upload file</button>
    </form>
    <form method="post"  encType="multipart/form-data">
      <button style={btn} type="file" name="" value="dfile">download picture</button>
    </form>
  </div>
)


export default Ftp;
