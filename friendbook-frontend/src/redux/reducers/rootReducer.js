import { combineReducers } from "redux";
import { userReducer, userInfoReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  userInfo: userInfoReducer,
});

export default rootReducer;
