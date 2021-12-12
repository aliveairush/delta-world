import Gender from "./Gender";

// raw form because fullName not splitted into firstname and lastname for api post request
export interface IRawFormUserRegistration {
  name: string,
  email: string,
  gender?: Gender,
  dateOfBirth?: string,
  phone?: string,
}

export interface IFormUserRegistration {
  firstName: string,
  lastName: string,
  email: string,
  gender?: Gender,
  dateOfBirth?: string,
  phone?: string,
}

export interface UserOverviewType {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  title: string
}

export interface UserProfileType {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
}

export interface PostsDataType {
  data: Array<Post>;
  limit: number,
  page: number,
  total: number,
}

export interface Post {
  id: string,
  image: string,
  likes: number,
  owner: UserOverviewType,
  publishDate: string,
  text: string
}
