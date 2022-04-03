import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider, ReactReduxContext } from "react-redux";
import "./index.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from "./App";
import configureStore, { history } from "./store";
import { ConnectedRouter } from "connected-react-router";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
