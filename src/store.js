import { createStore } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { createBrowserHistory } from "history";

import rootReducer from "./reducers";

export const defaultState = {
  game: {
    phase: 0,
    playerCount: 0
  }
};

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const browserHistory = createBrowserHistory();

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
