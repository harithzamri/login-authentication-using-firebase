//import action-types
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
} from "../constants";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, register: action.payload };
    case SIGNIN_SUCCESS:
      return { ...state, login: action.payload };
    case SIGNOUT_SUCCESS:
      return { ...state, singout: action.payload };

    default:
      break;
  }
};
export default authReducer;
