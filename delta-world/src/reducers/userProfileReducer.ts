import produce from "immer";
import { IActionPayload } from "../types/action";
import { IStateUserProfile } from "../types/state";
import {
  PROFILE_LOAD_ERROR,
  PROFILE_LOAD_SUCCESS,
  PROFILE_POSTS_LOAD_SUCCESS,
  PROFILE_SHOW_LOADING,
} from "../constants/actions";
import { PostsDataType, UserProfileType } from "../types/dummyApi";

const initialValue = {
  user: {},
  postsData: {},
  loading: false,
} as IStateUserProfile;

const loadUserDataSuccess = (draft: IStateUserProfile, userData: UserProfileType) => {
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

const userProfileReducer = (state = initialValue, action: IActionPayload) => produce(state, (draft: IStateUserProfile) => {
  console.log(action);
  switch (action.type) {
    case PROFILE_SHOW_LOADING: return state;
    case PROFILE_LOAD_SUCCESS: return loadUserDataSuccess(draft, action.payload);
    case PROFILE_LOAD_ERROR: return state;
    case PROFILE_POSTS_LOAD_SUCCESS: return loadUserPostsSuccess(draft, action.payload);
    default: return state;
  }
});

export default userProfileReducer;
