import { GET_USER_LIST, POP_OVER } from "../config/constants/userConstants";

const INIT_STATE = {
  userListData: [],
  popOverUser: false,
};
const UserReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER_LIST: {
      return {
        ...state,
        userListData: action.payload,
      };
    }
    case POP_OVER: {
      return {
        ...state,
        popOverUser: action.payload,
      };
    }
    default:
      return state;
  }
};
export default UserReducer;
