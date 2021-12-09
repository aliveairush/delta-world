import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import 'antd/dist/antd.css';
import UsersForm from "./forms/users/UsersForm";
// import LoginForm from "./forms/login/LoginForm";
// import RegistrationForm from "./forms/registration/RegistrationForm";

const App = () => (
  <div className="App page-layout">
    <Header />
    {/* <RegistrationForm /> */}
    {/* <LoginForm /> */}
    <UsersForm />
    <Footer />
  </div>
);

export default App;
