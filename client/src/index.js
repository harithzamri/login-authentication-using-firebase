import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
// import { createFirestoreInstance } from "redux-firestore";

import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import firebase from "./firebase";

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

const rrfConfig = {
  userProfile: "users",
};

ReactDOM.render(
  <Provider
    store={store(
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rrfConfig}
      dispatch={store.dispatch}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
