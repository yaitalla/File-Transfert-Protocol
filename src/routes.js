import Landing from './js/components/container/Landing';
import App from './components/container/App';
import Ftp from './components/container/Ftp';
import AuthPage from './components/container/AuthPage';

const routes = {
  component: App,
  childRoutes: [
    {
      path: '/ftp',
      component: Ftp
    },
    {
      path: '/home',
      component: Landing
    },
    {
      path: '/login',
      component: AuthPage
    }
  ]
}
