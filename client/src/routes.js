import Home from './components/Home';
import App from './components/App';
import Ftp from './components/Ftp';
import Login from './components/Login';

const routes = {
  component: App,
  childRoutes: [
    {
      path: '/ftp',
      component: Ftp
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ]
}
