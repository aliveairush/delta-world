import Gender from "./Gender";
import {PostsDataType, UserListDataType, UserProfileType} from "./dummyApi";

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
