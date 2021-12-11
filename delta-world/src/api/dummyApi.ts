import { IFormUserRegistration } from "../types/dummyApi";
import {
  APP_ID_HEADER,
  APP_ID_VALUE,
  CONTENT_TYPE_HEADER,
  CONTENT_TYPE_VALUE,
  USER_CREATE_URL,
} from "../constants/dummyApi";
import { HTTP_POST } from "../types/common";

export const apiPostCreateUser = (formUserRegistration: IFormUserRegistration) => fetch(USER_CREATE_URL, {
  method: HTTP_POST,
  headers: new Headers({
    [APP_ID_HEADER]: APP_ID_VALUE,
    [CONTENT_TYPE_HEADER]: CONTENT_TYPE_VALUE,
  }),
  body: JSON.stringify(formUserRegistration),
})
  .then((resp) => (resp.json()));
