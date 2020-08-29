import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
  chatState: chatReducer,
  profileState: profileReducer,
});

export default rootReducer;
