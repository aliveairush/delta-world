import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import registrationReducer from "./reducers/regisrationReducer";
import userProfileReducer from "./reducers/userProfileReducer";
import userListReducer from "./reducers/userListReducer";
import postListReducer from "./reducers/postListReducer";
import postModalReducer from "./reducers/modalPostReducer";
import authorizedUserReducer from "./reducers/authorizedUserReducer";
import { UserProfileType } from "./types/dummyApi";

function load() {
  console.log("Loading default state from local storage");
  const authorizedUser: UserProfileType | null = JSON.parse(localStorage.getItem('authorizedUser')!);
  const authorizedUserState = {
    authorizedUser,
  };
  return authorizedUserState;
}
const initialState = {
  authorizedUser: load(),
};

const store = createStore(
  combineReducers({
    registration: registrationReducer,
    userProfile: userProfileReducer,
    userList: userListReducer,
    postList: postListReducer,
    postModal: postModalReducer,
    authorizedUser: authorizedUserReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
