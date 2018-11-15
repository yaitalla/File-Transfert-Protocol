import axios from 'axios';

const url = 'http://localhost:4000/';

export const userAuth = (data) => ({
  return (dispatch) => {
    axios.post(`${url}users`, data).then((res) => {
      let user = data;
      localStorage.setItem('Authentication', JSON.stringify(user));
      dispatch({type: 'SET_USER', user}).
    }).catch((err) => console.log('AXIOS POST ERROR'+err))
  }
});
