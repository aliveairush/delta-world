/* eslint-disable */

import {applyMiddleware, combineReducers, createStore} from "redux";
import registrationReducer from "./reducers/regisrationReducer";
import thunk from "redux-thunk";
import userProfileReducer from "./reducers/userProfileReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import userListReducer from "./reducers/userListReducer";

const store = createStore(
  combineReducers({
    registration: registrationReducer,
    userProfile: userProfileReducer,
    userList: userListReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;