import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

export default () => {
  const store = createStore(rootReducer, applyMiddleware(logger, thunk));
  return store;
};
