/* eslint-disable */

import {combineReducers, createStore} from "redux";
import registrationReducer from "./reducers/regisrationReducer";

const store = createStore(
  combineReducers({
    registration: registrationReducer
  })
)

export default store;