import React from "react";
import Input from "./Input";
import { connect } from "react-redux";

function LandingPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Authentication using firebase and redux</h3>
      <Input />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
};

export default connect(mapStateToProps)(LandingPage);
