import { Dispatch } from "redux";
import { apiGetUserPosts, apiGetUserProfile } from "../api/dummyApi";
import { PROFILE_LOAD_SUCCESS, PROFILE_POSTS_LOAD_SUCCESS, PROFILE_SHOW_LOADING } from "../constants/actions";

export const loadUserProfileAction = (userId: string) => (dispatch: Dispatch) => {
  dispatch({
    type: PROFILE_SHOW_LOADING,
  });

  apiGetUserProfile(userId)
    .then((resp) => {
      dispatch({
        type: PROFILE_LOAD_SUCCESS,
        payload: resp,
      });
    });
};

export const loadUserPostsAction = (userId: string, page?: number, limit?:number) => (dispatch: Dispatch) => {
  apiGetUserPosts(userId, page, limit).then((resp) => {
    dispatch({
      type: PROFILE_POSTS_LOAD_SUCCESS,
      payload: resp,
    });
  });
};
