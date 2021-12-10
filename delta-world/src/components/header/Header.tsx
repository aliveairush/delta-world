import React from "react";
import './Header.scss';
import { FaRegImages, FiUsers } from "react-icons/all";
import logo from '../../assets/images/logo.png';

const Header = () => (
  <header className="header page-layout__header header custom-container">
    <div className="header__logo">
      <img src={logo} alt="er" />
      <span>Delta World</span>
    </div>
    <div className="header__center">
      <div>
        <FiUsers />
        <span>Пользователи</span>
      </div>
      <div>
        <FaRegImages />
        <span>Посты</span>
      </div>
    </div>
    <div className="header__auth">
      <span>Вход</span>
      <span>Регистрация</span>
    </div>
  </header>
);

export default Header;
