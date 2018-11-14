import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Home from './Home';
import Login from './Login';

const App = () =>
<Router>
  <Landing authUser={}/>
  <Route exact path={'/home'} component={Home}/>
  <Route exact path={'/landing'} component={Landing}/>
</Router>

export default App;
