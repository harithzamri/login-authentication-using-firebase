export const signIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    console.log(creds);
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(creds.Email, creds.Password)
      .then(() => {
        dispatch({ type: "SIGN_IN" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_IN_ERR" }, err);
      });
  };
};

export const signup = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(creds.Email, creds.Password)
      .then(() => {
        dispatch({ type: "SIGN_UP" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_UP_ERR" }, err);
      });
  };
};
