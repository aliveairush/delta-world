import Gender from "./Gender";
import { PostsDataType, UserProfileType } from "./dummyApi";

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
  // firstName: string,
  // lastName: string,
  // email: string,
  // registerDate: string,
  // title: string,
  // dateOfBirth: string,
  // phone: string,
  // picture: string,
  // gender: Gender,
}

export interface IStoreUserProfile {
  userProfile: IStateUserProfile;
}
