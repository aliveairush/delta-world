import { Dispatch } from "redux";
import { BaseSyntheticEvent } from "react";
import { InputData } from "../types/common";
import {
  REGISTRATION_DATE_OF_BIRTH_CHANGE,
  REGISTRATION_ERROR,
  REGISTRATION_INPUT_CHANGE,
  REGISTRATION_SUCCESS,
} from "../constants/actions";
import { apiPostCreateUser } from "../api/dummyApi";
import { IFormUserRegistration, IRawFormUserRegistration } from "../types/dummyApi";
import { USERS_ROUTE } from "../constants/routes";

export const handleInputChangeAction = (event: BaseSyntheticEvent) => (dispatch: Dispatch) => {
  dispatch({
    type: REGISTRATION_INPUT_CHANGE,
    payload: { name: event.target.name, value: event.target.value } as InputData,
  });
};

export const handleDatePickAction = (date: Object) => (dispatch: Dispatch) => {
  dispatch({
    type: REGISTRATION_DATE_OF_BIRTH_CHANGE,
    payload: date.valueOf(),
  });
};

const convertRawUserRegForm = (rawUserRegForm: IRawFormUserRegistration) : IFormUserRegistration => {
  const fullName = rawUserRegForm.name.split(' ');
  return {
    firstName: fullName[0],
    lastName: fullName[1],
    email: rawUserRegForm.email,
    gender: rawUserRegForm.gender,
    dateOfBirth: rawUserRegForm.dateOfBirth,
    phone: rawUserRegForm.phone,
  };
};

export const registerUserAction = (formUser : IRawFormUserRegistration, navigate: Function) => (dispatch: Dispatch) => {
  const apiRegUserBody = convertRawUserRegForm(formUser);

  apiPostCreateUser(apiRegUserBody)
    .then((resp) => {
      if (resp.error) throw new Error(resp.error);
      navigate(`${USERS_ROUTE}/${resp.id}`);
      localStorage.setItem('authorizedUser', JSON.stringify(resp));
      dispatch({
        type: REGISTRATION_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: REGISTRATION_ERROR,
        payload: error.message,
      });
    });
};
