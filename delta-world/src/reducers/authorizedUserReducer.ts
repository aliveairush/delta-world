import produce from "immer";
import { IActionPayload } from "../types/action";
import { CLEAR_AUTHORIZED_USER_DATA, SAVE_AUTHORIZED_USER_DATA } from "../constants/actions";
import { IStateAuthUser } from "../types/state";

const initialValue = {
  authorizedUser: null,
} as IStateAuthUser;

const authorizedUserReducer = (state = initialValue, action: IActionPayload) => produce(state, (draft: IStateAuthUser) => {
  switch (action.type) {
    case SAVE_AUTHORIZED_USER_DATA: {
      draft.authorizedUser = action.payload;
      return draft;
    }
    case CLEAR_AUTHORIZED_USER_DATA: {
      draft.authorizedUser = null;
      return draft;
    }
    default: return state;
  }
});

export default authorizedUserReducer;
