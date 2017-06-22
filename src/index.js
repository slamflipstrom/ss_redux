// React
import React from "react";
import ReactDOM from "react-dom";

// React Router
import { Router, Route, IndexRoute } from "react-router";

// Redux
import { Provider } from "react-redux";
import store, { history } from "./store";

// import CSS
import "./index.css";

import App from "./App";
import GameComponent from "./components/gameComponent";
import BiddingComponent from "./components/biddingComponent";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/bid" component={BiddingComponent} />
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
