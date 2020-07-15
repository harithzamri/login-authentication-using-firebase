import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/actions/auth";
import { connect } from "react-redux";

function Input(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let datatosubmit = {
      Email,
      Password,
    };
    console.log(datatosubmit);
    props.signup(datatosubmit);
  };

  return (
    <form>
      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={Password}
        />
      </div>
      <button onClick={handleSubmit}>Button</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (creds) => dispatch(signup(creds)),
  };
};

export default connect(null, mapDispatchToProps)(Input);
