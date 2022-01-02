import { Dispatch } from "redux";
// import { USER_LIST_SUCCESS } from "../constants/actions";
import { apiGetUserList } from "../api/dummyApi";
import { USER_LIST_SUCCESS } from "../constants/actions";

// eslint-disable-next-line
export const loadUserListAction = (page?: number, limit?: number) => (dispatch: Dispatch) => {

  apiGetUserList(page, limit).then((resp) => {
    console.log(resp);
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: resp,
    });
  });
  // console.log("DISPATCHING ACtion");
  // dispatch({
  //   type: USER_LIST_SUCCESS,
  //   payload: true,
  // });
};
