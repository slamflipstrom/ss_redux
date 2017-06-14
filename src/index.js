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

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={GameComponent} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
