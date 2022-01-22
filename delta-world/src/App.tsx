/* eslint-disable */
import React, {useState} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import 'antd/dist/antd.css';
import RegistrationForm from "./forms/registration/RegistrationForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./forms/login/LoginForm";
import UsersForm from "./forms/users/UsersForm";
import PostsForm from "./forms/posts/PostsForm";
import ProfileForm from "./forms/profile/ProfileForm";
import {DEFAULT_ROUTER, LOGIN_ROUTE, POSTS_ROUTE, USER_PROFILE_ROUTE, USERS_ROUTE} from "./constants/routes";
import ThemeContextProvider, {ThemeContext} from "./context/ThemeContext";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {(context) => (
            <div className={`app page-layout ${context.isDarkThemeOn ? `app-dark-theme`: ''}`}>
              <Header/>
              <Routes>
                <Route path={LOGIN_ROUTE} element={<LoginForm/>}/>
                <Route path={USER_PROFILE_ROUTE} element={<ProfileForm/>}/>
                <Route path={USERS_ROUTE} element={<UsersForm/>}/>
                <Route path={POSTS_ROUTE} element={<PostsForm/>}/>
                <Route path={DEFAULT_ROUTER} element={<PostsForm/>}/>
                <Route path="/" element={<RegistrationForm/>}/>
              </Routes>
              <Footer/>
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeContextProvider>
    </BrowserRouter>
  );
};
export default App;
