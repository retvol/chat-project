import { combineReducers } from "redux";
import generalChat from "./generalChat";
import profile from "./profile";
import SupportChat from "./SupportChat";
import austreliaChat from "./austreliaChat";
import italyChat from "./italyChat";
import jobsChat from "./jobsChat";
import polandChat from "./polandChat";
import startupsChat from "./startupsChat";
import baliChat from "./baliChat";
import thailandChat from "./thailandChat";
import freelanceChat from "./freelanceChat";
import marketingChat from "./marketingChat";
const rootReducer = combineReducers({
  generalChat,
  profile,
  SupportChat,
  marketingChat,
  austreliaChat,
  italyChat,
  jobsChat,
  polandChat,
  startupsChat,
  baliChat,
  thailandChat,
  freelanceChat,
});
export default rootReducer;
