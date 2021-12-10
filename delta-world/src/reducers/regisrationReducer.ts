/* eslint-disable */
import { IStateRegistration } from "../types/state";
import { IActionType } from "../types/action";

const initialValue = {
  myTestValue: 'Test',
} as IStateRegistration;

function registrationReducer(state = initialValue, action: IActionType) {
  return state;
}

export default registrationReducer;
