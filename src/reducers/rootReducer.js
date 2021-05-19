import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const appReducer = combineReducers({
  users: UserReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
