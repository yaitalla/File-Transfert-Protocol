import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignupPage from '../signup/SignupPage';
import Auth from '../auth/Auth';
import Ftp from '../ftp/Ftp';
import Navigation from '../Navigation/';

const Global = () =>
  <Router>
    <div>
      <Navigation/>
      <hr/>
      <Route exact path={'/signup'} component={SignupPage}/>
      <Route exact path={'/login'} component={Auth}/>
      <Route exact path={'/ftp'} component={Ftp}/>
    </div>
  </Router>

export default Global;
