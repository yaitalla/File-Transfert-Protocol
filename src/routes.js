import App from './components/global/App';
import SignupPage from './components/signup/SignupPage';


const routes = [
    {
      path: '/',
      component: App
    },
    {
      path: '/singup',
      component: SignupPage
    }/*,
    {
      path: '/login',
      component: Login
    }
    */
  ]

export default routes;
