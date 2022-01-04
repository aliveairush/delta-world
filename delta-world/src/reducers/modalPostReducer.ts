import produce from "immer";
import { IActionPayload } from "../types/action";
import { IStatePost } from "../types/state";
import { POST_MODAL_HIDE_MODAL, POST_MODAL_SHOW_COMMENTS, POST_MODAL_SHOW_MODAL } from "../constants/actions";

const initialValue = {
  showPostModal: false,
  loadingCommentList: true,
  post: {},
  commentListData: {},
} as IStatePost;

const modalPostReducer = (state = initialValue, action: IActionPayload) => produce(state, (draft: IStatePost) => {
  switch (action.type) {
    case POST_MODAL_SHOW_MODAL: {
      draft.showPostModal = true;
      draft.post = action.payload;
      return draft;
    }
    case POST_MODAL_SHOW_COMMENTS: {
      draft.loadingCommentList = false;
      draft.commentListData = action.payload;
      return draft;
    }
    case POST_MODAL_HIDE_MODAL: {
      draft.showPostModal = false;
      return draft;
    }
    default: return state;
  }
});

export default modalPostReducer;
