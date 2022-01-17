import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./Redux/Reducer/combineReducer";
import thunk from "redux-thunk";
// import reducer from "./Redux/Reducer/reducer";

const store = createStore(reducers,  applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
