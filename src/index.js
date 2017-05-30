// React
import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import configureStore from "./store";

// import CSS
import "./index.css";

// import App
import App from "./App";

// import React Router deps
import { BrowserRouter as Router, Route, Link } from "react-router";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
