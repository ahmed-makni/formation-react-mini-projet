import { api } from "../config/constants/axiosParam";
import { GET_USER_LIST, POP_OVER } from "../config/constants/userConstants";

export const getUsers = (params) => async (dispatch) => {
  try {
    const { data } = await api.get(params);
    if (data) {
      return dispatch({
        type: GET_USER_LIST,
        payload: data,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
export const popOverForm = (param) => async (dispatch) => {
  return dispatch({
    type: POP_OVER,
    payload: param,
  });
};
