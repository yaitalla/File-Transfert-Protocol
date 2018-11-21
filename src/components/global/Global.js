import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignupPage from '../signup/SignupPage';
import Auth from '../auth/Auth';
import Ftp from '../ftp/Ftp';
import Navigation from '../Navigation/';
import Home from '../Home';
import Maquette from '../maquettes/';

const Global = () =>
  <Router>
    <div>
      <Navigation/>
      <Maquette />
      <Route exact path={'/signup'} component={SignupPage}/>
      <Route exact path={'/login'} component={Auth}/>
      <Route exact path={'/ftp'} component={Ftp}/>
      <Route exact path={'/maquette1'} component={Home}/>
      <Route exact path={'/maquette2'} component={Maquette}/>
    </div>
  </Router>

export default Global;
