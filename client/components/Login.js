import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  <div>
    <p>you are not authenticated</p>
    <div>
      <Link className="nav-link" to={'/'}>login<span className="sr-only">(current)</span></Link>
    </div>
  </div>
}

export default Login;
