import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, IndexLink } from 'react-router';

const App = ({ children }) => (
  <div>
  <div className="top-bar">
    <div className="top-bar-left">
      <IndexLink to="/">Whis</IndexLink>
    </div>
    <div className="top-bar-right">
      <Link to="/login">Log In</Link>
      <Link to="/home">Home</Link>
    </div>
  </div>
  {children}
</div>
)

export default App;
