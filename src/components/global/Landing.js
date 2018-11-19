import React from 'react';
import Ftp from '../ftp/Ftp';
import Auth from '../auth/Auth';
//import { connect } from 'react-redux';

const Landing = ({ userAuth }) => {
  return (
    <div>
    { userAuth ? <Ftp/> : <Auth/> }
    </div>
  )

}


/*
const mapStateToProps = (state) => ({
  userAuth: state.sessionState.userAuth
});
*/

export default Landing;
