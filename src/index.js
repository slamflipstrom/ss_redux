// React
import React from "react";
import ReactDOM from "react-dom";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store, { history } from "./store";

// import CSS
import "./index.css";

import App from "./App";
import BiddingComponent from "./components/biddingComponent";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/bid" component={BiddingComponent} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
