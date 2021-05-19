import { api } from "../config/constants/axiosParam";
import { GET_USER_LIST } from "../config/constants/userConstants";

export function getUsers(params) {
  return async (dispatch) => {
    return await api.get(params).then(({ data }) => {
      if (data) {
        dispatch({
          type: GET_USER_LIST,
          payload: data,
        });
      }
    });
  };
}
