import { Dispatch } from "redux";

import { apiGetUserProfile } from "../api/dummyApi";
import { CLEAR_AUTHORIZED_USER_DATA, SAVE_AUTHORIZED_USER_DATA } from "../constants/actions";
import { USERS_ROUTE } from "../constants/routes";

export const loginAction = (form: any, navigation?: Function) => (dispatch: Dispatch) => {
  apiGetUserProfile(form.userId).then((resp) => {
    console.log(resp);
    if (resp.error === undefined) {
      localStorage.setItem("authorizedUser", JSON.stringify(resp));
      dispatch({
        type: SAVE_AUTHORIZED_USER_DATA,
        payload: resp,
      });
      navigation && navigation(`${USERS_ROUTE}/${form.userId}`);
    } else {
      console.log("ERROR");
    }
  });
};

export const logoutAction = () => (dispatch: Dispatch) => {
  dispatch({
    type: CLEAR_AUTHORIZED_USER_DATA,
    payload: null,
  });
  localStorage.removeItem("authorizedUser");
};
