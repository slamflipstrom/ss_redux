import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { createBrowserHistory } from "history";

import rootReducer from "./reducers";

export const defaultState = {
  game: {
    playerCount: 0
  }
};

const browserHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
