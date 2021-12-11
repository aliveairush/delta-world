import Gender from "./Gender";

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
