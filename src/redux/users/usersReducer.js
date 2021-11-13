import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_REQUEST } from "./usersTypes";
import Cookies from "js-cookie";

const userToLog = Cookies.get('user');
const initialState = userToLog !== undefined ?
  {
    user: { userToLog },
    loading: false,
    logedIn: true,
    error: ''
  } :
  {
    user: {},
    loading: false,
    logedIn: false,
    error: ''
  }

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
        logedIn: true
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        user: {},
        logedIn: false
      };

    default:
      return state;
  }
}