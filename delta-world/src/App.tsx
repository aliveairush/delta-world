/* eslint-disable */
import React, { useState } from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import 'antd/dist/antd.css';
import EditProfile from "./components/edit-profile/EditProfile";
import UsersForm from "./forms/users/UsersForm";
import PostsForm from "./forms/posts/PostsForm";
import Post from "./components/post/Post";
import ProfileForm from "./forms/profile/ProfileForm";
import LoginForm from "./forms/login/LoginForm";
import RegistrationForm from "./forms/registration/RegistrationForm";
import Modal from "./components/modal/Modal";
// const [show, setShow] = useState(false); (
const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="App page-layout">
      <Header />
       <RegistrationForm />
      <Footer />
    </div>
  );
};
export default App;
