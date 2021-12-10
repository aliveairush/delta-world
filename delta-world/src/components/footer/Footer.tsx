import React from 'react';
import './Footer.scss';
import { Switch } from "antd";

const Footer = () => (
  <div className="page-layout__footer footer custom-container">
    <a href="https://github.com/aliveairush/delta-world">
      <span>
        Github link
      </span>
    </a>
    <div>
      <span>Темная тема</span>
      <Switch />
    </div>
  </div>
);

export default Footer;
