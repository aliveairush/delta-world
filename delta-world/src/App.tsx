import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import 'antd/dist/antd.css';
// import UsersForm from "./forms/users/UsersForm";
// import PostsForm from "./forms/posts/PostsForm";
// import Modal from "./components/modal/Modal";
// import Post from "./components/post/Post";
import ProfileForm from "./forms/profile/ProfileForm";
// import LoginForm from "./forms/login/LoginForm";
// import RegistrationForm from "./forms/registration/RegistrationForm";
// const [show, setShow] = useState(false); (
const App = () => (
  <div className="App page-layout">
    <Header />
    {/* <RegistrationForm /> */}
    {/* <LoginForm /> */}
    {/* <UsersForm /> */}
    {/* <PostsForm /> */}
    {/* <button onClick={() => setShow(true)} type="button">Show modal </button> */}
    {/* <Modal show={show} onClose={() => setShow(false)}> */}
    {/*  <Post /> */}
    {/* </Modal> */}
    <ProfileForm />
    <Footer />
  </div>
);
export default App;
