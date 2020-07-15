import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/actions/auth";

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
    dispatch(
      signup(datatosubmit).then((response) => {
        console.log(response);
      })
    );
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

export default Input;
