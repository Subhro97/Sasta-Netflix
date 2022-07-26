import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

import createRootReducers from "./reducers";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory({basename:'https://subhro97.github.io/Sasta-Netflix/'});

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducers(history),
    preloadedState,
    applyMiddleware(thunk, routerMiddleware(history))
  );

  return store;
}
