import React from "react";
import LandingPage from "./components/LandingPage";
import { Switch, Route } from "react-router-dom";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/successpage" component={SuccessPage} />
    </Switch>
  );
}

export default App;
