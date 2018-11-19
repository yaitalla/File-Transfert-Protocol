import React from 'react';
import { Link } from 'react-router-dom';

const Ftp = () => (
  <div className="signupForm">
    <form method="post" action="/ftp/upload" encType="multipart/form-data">
      <button className="join-btn" type="file" name="" value="dfile">upload file</button>
    </form>
    <form method="post"  encType="multipart/form-data">
      <button className="join-btn" type="file" name="" value="dfile">download picture</button>
    </form>
  </div>
)


export default Ftp;
