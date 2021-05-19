import { api } from "../config/constants/axiosParam";
import { GET_USER_LIST } from "../config/constants/userConstants";

export const getUsers = (params) => async (dispatch) => {
  try {
    const { data } = await api.get(params);
    if (data) {
      console.log("users : " + JSON.stringify(data));
      console.log("users : " + data);
      return dispatch({
        type: GET_USER_LIST,
        payload: data,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
