import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import reduxThunk from "redux-thunk";

import firebase from "../../firebase";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

export default store;
