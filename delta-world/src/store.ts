/* eslint-disable */

import {applyMiddleware, combineReducers, createStore} from "redux";
import registrationReducer from "./reducers/regisrationReducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    registration: registrationReducer
  }),
  applyMiddleware(thunk)
)

export default store;