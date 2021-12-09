import React from 'react';
import './App.scss';
import RegistrationForm from "./forms/RegistrationForm";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import 'antd/dist/antd.css';

const App = () => (
  <div className="App page-layout">
    <Header />
    <RegistrationForm />
    <Footer />
  </div>
);

export default App;
