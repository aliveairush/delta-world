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
