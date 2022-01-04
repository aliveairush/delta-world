import Gender from "./Gender";
import {
  ICommentListDataType,
  IPost,
  IPostListDataType, PostsDataType, UserListDataType, UserProfileType,
} from "./dummyApi";

export interface IStateRegistration {
  name: string,
  gender: Gender,
  dateOfBirth: string,
  email: string,
  phone: string,
  error: string,
}

export interface IStoreRegistration {
  registration: IStateRegistration
}

export interface IStateUserProfile {
  user: UserProfileType,
  postsData: PostsDataType,
  loading: boolean,
  showModal: boolean
}

export interface IStoreUserProfile {
  userProfile: IStateUserProfile;
}

export interface IStateUserList {
  loading: boolean,
  userListData: UserListDataType,
}

export interface IStoreUserList {
  userList: IStateUserList,
}

export interface IStatePostList {
  loading: boolean,
  postListData: IPostListDataType
}

export interface IStatePost {
  showPostModal: boolean,
  loadingCommentList: boolean,
  post: IPost,
  commentListData: ICommentListDataType,
}

export interface IStateAuthUser{
  authorizedUser: UserProfileType | null
}

export interface IStore {
  postList: IStatePostList
  postModal: IStatePost,
  userList: IStateUserList,
  userProfile: IStateUserProfile;
  registration: IStateRegistration
  authorizedUser: IStateAuthUser

}
