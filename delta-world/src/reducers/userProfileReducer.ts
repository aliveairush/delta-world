import produce from "immer";
import { IActionPayload } from "../types/action";
import { IStateUserProfile } from "../types/state";
import {
  PROFILE_LOAD_ERROR,
  PROFILE_LOAD_SUCCESS,
  PROFILE_POSTS_LOAD_SUCCESS,
  PROFILE_SHOW_LOADING, PROFILE_UPDATE_DATA_SUCCESS, SET_SHOW_MODAL_EDIT_PROFILE,
} from "../constants/actions";
import { PostsDataType, UserProfileType } from "../types/dummyApi";

const initialValue = {
  user: {},
  postsData: {},
  loading: false,
  showModal: false,
} as IStateUserProfile;

const loadUserDataSuccess = (draft: IStateUserProfile, userData: UserProfileType) => {
  draft.user.id = userData.id;
  draft.user.firstName = userData.firstName;
  draft.user.lastName = userData.lastName;
  draft.user.email = userData.email;
  draft.user.registerDate = userData.registerDate;
  draft.user.title = userData.title;
  draft.user.dateOfBirth = userData.dateOfBirth;
  draft.user.phone = userData.phone;
  draft.user.picture = userData.picture;
  draft.user.gender = userData.gender;
  return draft;
};

const loadUserPostsSuccess = (draft: IStateUserProfile, postsData : PostsDataType) => {
  draft.postsData = postsData;
  return draft;
};

const updateUserData = (draft: IStateUserProfile, newUserData: UserProfileType) => {
  draft.user.firstName = newUserData.firstName;
  draft.user.lastName = newUserData.lastName;
  draft.user.phone = newUserData.phone;
  draft.user.picture = newUserData.picture;
  draft.user.dateOfBirth = newUserData.dateOfBirth;
  return draft;
};

const setShowModal = (draft: IStateUserProfile, showModal: boolean) => {
  draft.showModal = showModal;
  return draft;
};

const userProfileReducer = (state = initialValue, action: IActionPayload) => produce(state, (draft: IStateUserProfile) => {
  console.log(action);
  switch (action.type) {
    case PROFILE_SHOW_LOADING: return state;
    case PROFILE_LOAD_SUCCESS: return loadUserDataSuccess(draft, action.payload);
    case PROFILE_LOAD_ERROR: return state;
    case PROFILE_POSTS_LOAD_SUCCESS: return loadUserPostsSuccess(draft, action.payload);
    case PROFILE_UPDATE_DATA_SUCCESS: return updateUserData(draft, action.payload);
    case SET_SHOW_MODAL_EDIT_PROFILE: return setShowModal(draft, action.payload);
    default: return state;
  }
});

export default userProfileReducer;
