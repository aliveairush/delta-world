/* eslint-disable */
import React, {useState} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import 'antd/dist/antd.css';
import RegistrationForm from "./forms/registration/RegistrationForm";
import {BrowserRouter , Routes, Route } from "react-router-dom";
import LoginForm from "./forms/login/LoginForm";
import UsersForm from "./forms/users/UsersForm";
import PostsForm from "./forms/posts/PostsForm";
import ProfileForm from "./forms/profile/ProfileForm";
import {LOGIN_ROUTE, POSTS_ROUTE, USERS_ROUTE} from "./constants/routes";
// const [show, setShow] = useState(false); (
const App = () => {
  const [show, setShow] = useState(false);

  return (
    <BrowserRouter>
      <div className="App page-layout">
        <Header/>
        <Routes>
          <Route path={LOGIN_ROUTE} element={<LoginForm />}/>
          <Route path="/users/:id" element={<ProfileForm />}/>
          <Route path={USERS_ROUTE} element={<UsersForm />}/>
          <Route path={POSTS_ROUTE} element={<PostsForm />}/>
          <Route path="/" element={<RegistrationForm />}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};
export default App;
