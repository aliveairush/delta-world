import React, { useState } from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import 'antd/dist/antd.css';
// import UsersForm from "./forms/users/UsersForm";
// import PostsForm from "./forms/posts/PostsForm";
import Modal from "./components/modal/Modal";
import Post from "./components/post/Post";
// import LoginForm from "./forms/login/LoginForm";
// import RegistrationForm from "./forms/registration/RegistrationForm";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App page-layout">
      <Header />
      {/* <RegistrationForm /> */}
      {/* <LoginForm /> */}
      {/* <UsersForm /> */}
      {/* <PostsForm /> */}
      <button onClick={() => setShow(true)} type="button">Show modal </button>
      <Modal show={show} onClose={() => setShow(false)}>
        <Post />
      </Modal>
      <Footer />
    </div>
  );
};

export default App;
