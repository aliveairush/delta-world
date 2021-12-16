import { Dispatch } from "redux";
import { apiGetUserPosts, apiGetUserProfile, apiPutUserProfile } from "../api/dummyApi";
import {
  PROFILE_LOAD_SUCCESS,
  PROFILE_POSTS_LOAD_SUCCESS,
  PROFILE_SHOW_LOADING,
  PROFILE_UPDATE_DATA_SUCCESS, SET_SHOW_MODAL_EDIT_PROFILE,
} from "../constants/actions";
import { UserProfileType } from "../types/dummyApi";

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

export const updateUserProfileAction = (newUserData: UserProfileType) => (dispatch : Dispatch) => {
  apiPutUserProfile(newUserData).then((resp) => {
    dispatch({
      type: PROFILE_UPDATE_DATA_SUCCESS,
      payload: resp,
    });
    dispatch({
      type: SET_SHOW_MODAL_EDIT_PROFILE,
      payload: false,
    });
  });
};

export const setShowModalAction = (showModal: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SHOW_MODAL_EDIT_PROFILE,
    payload: showModal,
  });
};
