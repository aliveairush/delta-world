import React from "react";
import './Header.scss';
import { FaRegImages, FiUsers } from "react-icons/all";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import {
  LOGIN_ROUTE, POSTS_ROUTE, REGISTRATION_ROUTE, USERS_ROUTE,
} from "../../constants/routes";

const Header = () => (
  <header className="header page-layout__header header custom-container">
    <div className="header__logo">
      <img src={logo} alt="er" />
      <span>Delta World</span>
    </div>
    <div className="header__center">
      <Link to={USERS_ROUTE} className="link">
        <FiUsers />
        <span>Пользователи</span>
      </Link>
      <Link to={POSTS_ROUTE} className="link">
        <FaRegImages />
        <span>Посты</span>
      </Link>
    </div>
    <div className="header__auth">
      <Link to={LOGIN_ROUTE} className="link">Вход</Link>
      <Link to={REGISTRATION_ROUTE} className="link">Регистрация</Link>
    </div>
  </header>
);

export default Header;
