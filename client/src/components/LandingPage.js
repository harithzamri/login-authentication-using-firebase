import React from "react";
import Input from "./Input";

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

export default LandingPage;
