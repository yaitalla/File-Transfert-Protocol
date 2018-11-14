import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>
<div style="container">
  <form method="post" action="/ftp/upload" enctype="multipart/form-data">
    <button type="file" name="" value="dfile">upload file</button>
  </form>
  <form method="post" action="/auth/login" enctype="multipart/form-data">
    <button type="file" name="" value="dfile">download picture</button>
  </form>
</div>

export default Home;
