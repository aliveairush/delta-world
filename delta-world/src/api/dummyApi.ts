import { IFormUserRegistration, UserProfileType } from "../types/dummyApi";
import {
  APP_ID_HEADER,
  APP_ID_VALUE, BASE_URL,
  CONTENT_TYPE_HEADER,
  CONTENT_TYPE_VALUE, LIMIT_QUERY_PARAM, PAGE_QUERY_PARAM, POST_URL,
  USER_CREATE_URL, USER_URL,
} from "../constants/dummyApi";
import { HTTP_GET, HTTP_POST, HTTP_PUT } from "../types/common";

const doGetRequest = (path: string, searchParams?: Record<string, any>) => {
  const url = new URL(path, BASE_URL);

  searchParams && Object.entries(searchParams).forEach((params) => {
    params[1] && url.searchParams.append(params[0], params[1].toString());
  });
  console.log(url);
  console.log(url.toString());

  return fetch(url.toString(), {
    method: HTTP_GET,
    headers: new Headers({
      [APP_ID_HEADER]: APP_ID_VALUE,
    }),
  }).then((resp) => resp.json());
};

export const apiPostCreateUser = (formUserRegistration: IFormUserRegistration) => fetch(USER_CREATE_URL, {
  method: HTTP_POST,
  headers: new Headers({
    [APP_ID_HEADER]: APP_ID_VALUE,
    [CONTENT_TYPE_HEADER]: CONTENT_TYPE_VALUE,
  }),
  body: JSON.stringify(formUserRegistration),
})
  .then((resp) => (resp.json()));

export const apiGetUserProfile = (userId: string) => fetch(`${USER_URL}/${userId}`, {
  method: HTTP_GET,
  headers: new Headers({
    [APP_ID_HEADER]: APP_ID_VALUE,
  }),
})
  .then((resp) => resp.json());

export const apiGetUserPosts = (userId: string, page?: number, limit?: number) => doGetRequest(`${USER_URL}/${userId}/post`, {
  [PAGE_QUERY_PARAM]: page,
  [LIMIT_QUERY_PARAM]: limit,
});

export const apiPutUserProfile = (newUserData: UserProfileType) => fetch(`${USER_URL}/${newUserData.id}`, {
  method: HTTP_PUT,
  headers: new Headers({
    [APP_ID_HEADER]: APP_ID_VALUE,
    [CONTENT_TYPE_HEADER]: CONTENT_TYPE_VALUE,
  }),
  body: JSON.stringify(newUserData),
}).then((resp) => (resp.json()));

export const apiGetUserList = (page?: number, limit?: number) => doGetRequest(USER_URL, {
  [PAGE_QUERY_PARAM]: page,
  [LIMIT_QUERY_PARAM]: limit,
});

export const apiGetPostList = (page?: number, limit?: number) => doGetRequest(POST_URL, {
  [PAGE_QUERY_PARAM]: page,
  [LIMIT_QUERY_PARAM]: limit,
});

export const apiGetPostCommentList = (postId: string) => doGetRequest(`${POST_URL}/${postId}/comment`);
