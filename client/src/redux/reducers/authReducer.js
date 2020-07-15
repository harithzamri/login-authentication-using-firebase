const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      alert("Welcome back");
      return state;
    case "SIGN_IN_ERR":
      alert("Sign in error...");
      return state;
    case "SIGN_OUT":
      alert("You signed out..");
      return state;
    case "SIGN_UP":
      alert("Welcome..");
      return state;
    case "SIGN_UP_ERR":
      alert("Sign up error...");
      return state;
    default:
      return state;
  }
};

export default authReducer;
