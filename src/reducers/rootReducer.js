import { combineReducers } from "redux";

const appReducer = combineReducers({
  users: UserReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
