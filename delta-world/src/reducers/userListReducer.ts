import produce from "immer";
import { IActionPayload } from "../types/action";
import { IStateUserList } from "../types/state";
import { USER_LIST_SHOW_LOADING, USER_LIST_SUCCESS } from "../constants/actions";
import { UserListDataType } from "../types/dummyApi";

const initialValue = {
  loading: true,
  userListData: {
  },
} as IStateUserList;

// eslint-disable-next-line
const loadUserListSuccess = (draft: IStateUserList, userListData: UserListDataType) => {
  draft.loading = false;
  draft.userListData = userListData;
  return draft;
};

const userListReducer = (state = initialValue, action: IActionPayload) => produce(state, (draft: IStateUserList) => {
  console.log(action);
  switch (action.type) {
    case USER_LIST_SHOW_LOADING: return state;
    case USER_LIST_SUCCESS: return loadUserListSuccess(draft, action.payload);
    default: return state;
  }
});

export default userListReducer;
