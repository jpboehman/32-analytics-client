import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  loginData,
  loginToken,
} from './userRedux';
import { generalRequest } from '../services/httpService';
import jwt_decode from 'jwt-decode';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    // LOCAL:
    // const res = await axios.post('http://localhost:8080/api/auth/signin', user);
    // PROD:
    const res = await generalRequest.post('/auth/signin', user);
    console.log(res);
    localStorage.setItem('user', JSON.stringify(res.data.accessToken));
    const TOKEN = JSON.parse(localStorage.getItem('user'));
    const decoded = jwt_decode(TOKEN);
    if (decoded) {
      dispatch(loginToken(TOKEN));
      dispatch(loginData(res.data));
      setTimeout(function () {
        dispatch(loginSuccess(decoded));
        localStorage.removeItem('idx');
        localStorage.removeItem('ids');
        localStorage.removeItem('user');
        window.location.pathname = '/profile';
      }, 2000);
    }
  } catch (err) {
    dispatch(loginFailure(), logout());
  }
};
