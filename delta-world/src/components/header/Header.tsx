import React from "react";
import './Header.scss';
import { FaRegImages, FiUsers } from "react-icons/all";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from '../../assets/images/logo.png';
import defaultAvatar from '../../assets/images/default-avatar.png';

import {
  LOGIN_ROUTE, POSTS_ROUTE, REGISTRATION_ROUTE, USERS_ROUTE,
} from "../../constants/routes";
import { IStore } from "../../types/state";
import { UserProfileType } from "../../types/dummyApi";
import { logoutAction } from "../../actions/authorizationActions";

interface Props {
  authorizedUser: UserProfileType | null
  logoutAction: () => void
}

const Header = ({ authorizedUser, logoutAction } : Props) => {
  console.log(authorizedUser);
  return (
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
      {authorizedUser ? (
        <div className="header__auth">
          <Link to={`${USERS_ROUTE}/${authorizedUser.id}`} className="link">
            <img src={authorizedUser.picture || defaultAvatar} alt={authorizedUser.firstName} />
            <span>{authorizedUser.firstName}</span>
          </Link>
          <Link
            to={LOGIN_ROUTE}
            onClick={() => {
              logoutAction();
            }}
            className="link"
          >
            Выход
          </Link>
        </div>
      ) : (
        <div className="header__auth">
          <Link to={LOGIN_ROUTE} className="link">Вход</Link>
          <Link to={REGISTRATION_ROUTE} className="link">Регистрация</Link>
        </div>
      )}

    </header>
  );
};

export default connect((state: IStore) => ({
  authorizedUser: state.authorizedUser.authorizedUser,
}), ((dispatch) => ({ logoutAction: bindActionCreators(logoutAction, dispatch) })))(Header);
