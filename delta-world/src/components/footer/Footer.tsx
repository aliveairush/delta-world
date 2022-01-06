import React from 'react';
import './Footer.scss';
import { Switch } from "antd";
import { IThemeContext, ThemeContext } from '../../context/ThemeContext';

const Footer = () => (
  <ThemeContext.Consumer>
    {(context: IThemeContext) => (
      <div className="page-layout__footer footer custom-container">
        <a href="https://github.com/aliveairush/delta-world">
          <span>
            Github link
          </span>
        </a>
        <div>
          <span>Темная тема</span>
          <Switch onClick={context.toggleTheme} checked={context.isDarkThemeOn} />
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
);

export default Footer;
