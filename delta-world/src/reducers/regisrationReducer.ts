import produce from "immer";
import { IStateRegistration } from "../types/state";
import { IActionPayload } from "../types/action";
import Gender from "../types/Gender";
import {
  REGISTRATION_DATE_OF_BIRTH_CHANGE,
  REGISTRATION_ERROR,
  REGISTRATION_INPUT_CHANGE,
  REGISTRATION_SUCCESS,
} from "../constants/actions";
import { InputData } from "../types/common";

const initialValue = {
  name: 'test test',
  gender: Gender.none,
  dateOfBirth: '',
  email: 'terser@gmail.com',
  phone: '',
  error: '',
} as IStateRegistration;

const updateForm = (draft: IStateRegistration, inputData: InputData) => {
  // @ts-ignore
  draft[inputData.name] = inputData.value;
  draft.error = initialValue.error;
  return draft;
};

const updateDateOfBirth = (draft: IStateRegistration, date: string) => {
  draft.dateOfBirth = date;
  return draft;
};

const setError = (draft: IStateRegistration, errorMessage: string) => {
  draft.error = errorMessage;
  return draft;
};

const clearState = (draft: IStateRegistration) => {
  draft.name = initialValue.name;
  draft.dateOfBirth = initialValue.dateOfBirth;
  draft.gender = initialValue.gender;
  draft.phone = initialValue.phone;
  draft.email = initialValue.email;
  draft.error = initialValue.error;
  return draft;
};

const registrationReducer = (
  state = initialValue,
  action: IActionPayload,
) => produce(state, (draft: IStateRegistration) => {
  console.log(action);
  switch (action.type) {
    case REGISTRATION_INPUT_CHANGE: return updateForm(draft, action.payload);
    case REGISTRATION_DATE_OF_BIRTH_CHANGE: return updateDateOfBirth(draft, action.payload);
    case REGISTRATION_SUCCESS: return clearState(draft);
    case REGISTRATION_ERROR: return setError(draft, action.payload);
    default: return state;
  }
});

export default registrationReducer;
