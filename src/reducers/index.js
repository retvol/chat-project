import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
  chatState: chatReducer,
  profileState: profileReducer,
  accountState: accountReducer,
});

export default rootReducer;
