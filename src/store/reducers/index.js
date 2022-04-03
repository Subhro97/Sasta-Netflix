import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const createRootReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
  });

export default createRootReducers;
