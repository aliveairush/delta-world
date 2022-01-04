import { Dispatch } from "redux";
import { IPost } from "../types/dummyApi";
import { POST_MODAL_HIDE_MODAL, POST_MODAL_SHOW_COMMENTS, POST_MODAL_SHOW_MODAL } from "../constants/actions";
import { apiGetPostCommentList } from "../api/dummyApi";

export const updateCurrentPostDataAction = (post: IPost) => (dispatch: Dispatch) => {
  console.log("GOT AN UPDATE");
  console.log(post);
  dispatch({
    type: POST_MODAL_SHOW_MODAL,
    payload: post,
  });
  apiGetPostCommentList(post.id)
    .then((resp) => {
      dispatch({
        type: POST_MODAL_SHOW_COMMENTS,
        payload: resp.data,
      });
    });
};

export const hidePostModalAction = () => (dispatch: Dispatch) => {
  dispatch({
    type: POST_MODAL_HIDE_MODAL,
    payload: {},
  });
};
