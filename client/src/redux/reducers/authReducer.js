//import action-types
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
} from "../constants";

//initialize state
const INITIAL_STATE = {
  authMsg: "",
};
//reducer
const authReducer = (state = INITIAL_STATE, action) => {
  //write conditional to handle action-response
  if (action.type === SIGNIN_SUCCESS || action.type === SIGNOUT_SUCCESS) {
    return { ...state, authMsg: "" };
  } else if (
    action.type === SIGNUP_SUCCESS ||
    action.type === SIGNUP_ERROR ||
    action.type === SIGNIN_ERROR ||
    action.type === SIGNOUT_ERROR
  ) {
    return { ...state, authMsg: action.payload };
  } else {
    return state;
  }
};

export default authReducer;
