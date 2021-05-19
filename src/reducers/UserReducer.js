import { GET_USER_LIST } from "../config/constants/userConstants";

const INIT_STATE = {
  userListData: [],
};
const UserReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER_LIST: {
      return {
        ...state,
        userListData: action.payload,
      };
    }
    default:
      return state;
  }
};
export default UserReducer;
