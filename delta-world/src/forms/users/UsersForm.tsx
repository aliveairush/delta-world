import React from 'react';
import "./UsersForm.scss";
import { Pagination } from "antd";

const UsersForm = () => (
  <div className="users-form custom-container page-layout__content">
    <div className="cards">
      <div className="card">
        <img className="card__img" alt="cats" src="https://fatcatart.com/wp-content/uploads/2011/02/Malevich_Black_Square-cat-sm1.jpg" />
        <span className="card__name">Name</span>
      </div>
      <div className="card">
        <img className="card__img" alt="cats" src="https://fatcatart.com/wp-content/uploads/2011/02/Malevich_Black_Square-cat-sm1.jpg" />
        <span className="card__name">Name</span>
      </div>
      <div className="card">
        <img className="card__img" alt="cats" src="https://fatcatart.com/wp-content/uploads/2011/02/Malevich_Black_Square-cat-sm1.jpg" />
        <span className="card__name">Name</span>
      </div>
      <div className="card">
        <img className="card__img" alt="cats" src="https://fatcatart.com/wp-content/uploads/2011/02/Malevich_Black_Square-cat-sm1.jpg" />
        <span className="card__name">Name</span>
      </div>
      <div className="card">
        <img className="card__img" alt="cats" src="https://fatcatart.com/wp-content/uploads/2011/02/Malevich_Black_Square-cat-sm1.jpg" />
        <span className="card__name">Name</span>
      </div>
    </div>
    <div className="users-form__pagination">
      <Pagination defaultCurrent={1} total={50} />
    </div>
  </div>
);

export default UsersForm;
