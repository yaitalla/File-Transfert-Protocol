import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Home from './Home';

const Landing = ({ userAuth }) =>
  <div>
    { userAuth ? <Home/> : <Login/> }
  </div>

const mapStateToProps = (state) => ({
  userAuth: state.sessionState.userAuth
});

export default connect(mapStateToProps)(Landing);
