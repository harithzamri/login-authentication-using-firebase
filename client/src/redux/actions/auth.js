import { getFirebase } from "react-redux-firebase";

export function signup(email, password) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS", payload: request });
      });
  };
}
