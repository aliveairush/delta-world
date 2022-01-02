import { Dispatch } from "redux";
import { POST_LIST_LOAD_SUCCESS } from "../constants/actions";
import { apiGetPostList } from "../api/dummyApi";

export const loadPostListAction = (page?: number, limit?: number) => (dispatch: Dispatch) => {
  apiGetPostList(page, limit).then((resp) => {
    console.log(resp);
    dispatch({
      type: POST_LIST_LOAD_SUCCESS,
      payload: resp,
    });
  });
};
