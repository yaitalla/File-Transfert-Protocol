//import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import routes from './routes';
import	{ browserHistory, Router } from 'react-router';

//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('root'));

//registerServiceWorker();
