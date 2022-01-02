import produce from "immer";
import { IActionPayload } from "../types/action";
import { IStatePostList } from "../types/state";
import { POST_LIST_LOAD_SUCCESS } from "../constants/actions";
import { IPostListDataType } from "../types/dummyApi";

const initialValue = {
  loading: true,
  postListData: {},
} as IStatePostList;

const loadPostListSuccess = (draft: IStatePostList, newPostListData: IPostListDataType) => {
  draft.loading = false;
  draft.postListData = newPostListData;
  return draft;
};

const postListReducer = (state = initialValue, action: IActionPayload) => produce(state, (draft: IStatePostList) => {
  console.log(action);
  switch (action.type) {
    case POST_LIST_LOAD_SUCCESS: return loadPostListSuccess(draft, action.payload);
    default: return state;
  }
});

export default postListReducer;
