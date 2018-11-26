import React from 'react';
import { Link } from 'react-router-dom';
import { container, item, btnWrapper, btn, input } from './style';


const Ftp = () => (
  <div style={container}>
    <h2 >File Transfert</h2>
    <form style={btnWrapper} method="post" action="/ftp/upload" encType="multipart/form-data">
      <button style={btn} type="submit" >upload file</button>
      <input style={input} type="file" name="sampleFile"/>
    </form>
    <form method="post" action="/ftp/download" encType="multipart/form-data">
      <button style={btn} type="file" name="" value="dfile">download picture</button>
    </form>
    <form method="gett" action="/ftp/getUploadedFiles" encType="multipart/form-data">
      <button style={btn} type="file" name="" value="dfile">get files</button>
    </form>
  </div>
)


export default Ftp;
