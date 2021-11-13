import Cookies from "js-cookie";
import { loginFailed, loginSuccess, loginRequest, logoutRequest } from "redux";

export const usersServices = {
  login,
  logout
}

const login = (username, password) => {
  return (dispatch) => {
    dispatch(loginRequest());

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    };

    fetch(`api-url`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response.error)
          dispatch(loginFailed(response.error));
        else {
          dispatch(loginSuccess(response));
          Cookies.set('user', response);
        }
      })
      .catch((error) => console.error(error))
  }
}

const logout = () => {
  dispatch(logoutRequest())
  Cookies.remove('user');
}