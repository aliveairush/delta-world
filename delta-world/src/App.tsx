import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import 'antd/dist/antd.css';
import LoginForm from "./forms/login/LoginForm";
// import RegistrationForm from "./forms/registration/RegistrationForm";

const App = () => (
  <div className="App page-layout">
    <Header />
    {/* <RegistrationForm /> */}
    <LoginForm />
    <Footer />
  </div>
);

export default App;
