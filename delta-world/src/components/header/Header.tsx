/* eslint-disable */
import React, {useState} from "react";
import {FaRegImages, FiUsers} from "react-icons/all";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import logo from '../../assets/images/logo.png';

import {LOGIN_ROUTE, POSTS_ROUTE, REGISTRATION_ROUTE, USERS_ROUTE,} from "../../constants/routes";
import {IStore} from "../../types/state";
import {UserProfileType} from "../../types/dummyApi";
import {logoutAction} from "../../actions/authorizationActions";
import defaultAvatar from '../../assets/images/default-avatar.png';
import styles from './Header.module.scss';
import {MenuOutlined} from "@ant-design/icons";

interface Props {
  authorizedUser: UserProfileType | null
  logoutAction: () => void
}

const pageLinkList = [
  {
    url: USERS_ROUTE,
    icon: <FiUsers/>,
    text: 'Пользователи'
  },
  {
    url: POSTS_ROUTE,
    icon: <FaRegImages/>,
    text: 'Посты'
  }
]


const Header = ({authorizedUser, logoutAction}: Props) => {
  const [isMobileNavDisplayed, setIsMobileNavDisplayed] = useState(false);

  return (
    <div className={`${styles.header} `}>
      <div
        className={styles.header__hamburgerIcon}
        onClick={() => setIsMobileNavDisplayed(!isMobileNavDisplayed)}
      >
        <MenuOutlined />
      </div>
      <nav onClick={()=> setIsMobileNavDisplayed(false)} className={`${styles.header__nav} ${isMobileNavDisplayed && styles.header__nav_active}`}>

        <div  className={styles.header__nav__logo}>
          <img src={logo} alt="er"/>
          <span>Delta World</span>
        </div>
        <div className={styles.header__nav__pages}>
          {pageLinkList.map(pageLink => {
              return <Link to={pageLink.url} className="link">
                {pageLink.icon}
                <span>{pageLink.text}</span>
              </Link>
            })
          }
        </div>
        {authorizedUser ? (
          <div className={styles.header__nav__auth}>
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
          <div className={styles.header__nav__auth}>
            <Link to={LOGIN_ROUTE} className="link">Вход</Link>
            <Link to={REGISTRATION_ROUTE} className="link">Регистрация</Link>
          </div>
        )}
      </nav>
    </div>

    // <div>
    //   <header className="header page-layout__header custom-container">
    //     <nav className="header__nav">
    //       <div className="header__logo">
    //         <img src={logo} alt="er" />
    //         <span>Delta World</span>
    //       </div>
    //       <div className="header__center">
    //         <Link to={USERS_ROUTE} className="link">
    //           <FiUsers />
    //           <span>Пользователи</span>
    //         </Link>
    //         <Link to={POSTS_ROUTE} className="link">
    //           <FaRegImages />
    //           <span>Посты</span>
    //         </Link>
    //       </div>
    //       <div className="header__hamburger-icon">
    //         <MenuOutlined />
    //       </div>
    //       {authorizedUser ? (
    //         <div className="header__auth">
    //           <Link to={`${USERS_ROUTE}/${authorizedUser.id}`} className="link">
    //             <img src={authorizedUser.picture || defaultAvatar} alt={authorizedUser.firstName} />
    //             <span>{authorizedUser.firstName}</span>
    //           </Link>
    //           <Link
    //             to={LOGIN_ROUTE}
    //             onClick={() => {
    //               logoutAction();
    //             }}
    //             className="link"
    //           >
    //             Выход
    //           </Link>
    //         </div>
    //       ) : (
    //         <div className="header__auth">
    //           <Link to={LOGIN_ROUTE} className="link">Вход</Link>
    //           <Link to={REGISTRATION_ROUTE} className="link">Регистрация</Link>
    //         </div>
    //       )}
    //     </nav>
    //
    //   </header>
    //   <div className="mobile-nav">
    //     <div>
    //       <span>Hello</span>
    //     </div>
    //     <div>
    //       <span>Hello</span>
    //     </div>
    //   </div>
    // </div>

  );
};

export default connect((state: IStore) => ({
  authorizedUser: state.authorizedUser.authorizedUser,
}), ((dispatch) => ({logoutAction: bindActionCreators(logoutAction, dispatch)})))(Header);
