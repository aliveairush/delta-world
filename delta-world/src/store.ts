/* eslint-disable */

import {applyMiddleware, combineReducers, createStore} from "redux";
import registrationReducer from "./reducers/regisrationReducer";
import thunk from "redux-thunk";
import userProfileReducer from "./reducers/userProfileReducer";

const store = createStore(
  combineReducers({
    registration: registrationReducer,
    userProfile: userProfileReducer
  }),
  applyMiddleware(thunk)
)

export default store;