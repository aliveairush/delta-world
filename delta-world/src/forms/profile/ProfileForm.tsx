import React from 'react';
import './ProfileForm.scss';
import '../posts/PostsForm.scss';
import { Pagination } from "antd";
import { EditOutlined } from "@ant-design/icons";

const ProfileForm = () => (
  <main className="profile-form custom-container page-layout__content">
    <div className="profile-form__userinfo">
      <div className="profile-form__userinfo__image">
        <img src="https://thumbs.dreamstime.com/b/wild-gray-tabby-cat-bright-orange-eyes-lies-outdoors-square-photo-instagram-format-194924047.jpg" alt="cat" />
      </div>
      <div className="profile-form__userinfo__content">
        <div className="profile-form__userinfo__content__header">
          <span className="profile-form__userinfo__content__header__username">Name</span>
          <div>
            <EditOutlined />
            <span>Редактировать</span>
          </div>
        </div>
        <div className="profile-form__userinfo__content__content">
          <div>INfo</div>
        </div>
        <div className="profile-form__userinfo__content__footer">
          <span>Id :123</span>
        </div>
      </div>
    </div>
    <div className="posts">
      <div className="post">
        <img className="post__img" alt="cats" src="https://static.remove.bg/remove-bg-web/54743c30904cc98f30bb79359718a5ffd69392cd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        <span className="post__desc">Товарищи! рамки и место обучения кадров представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач.  </span>
      </div>
      <div className="post">
        <img className="post__img" alt="cats" src="https://static.remove.bg/remove-bg-web/54743c30904cc98f30bb79359718a5ffd69392cd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        <span className="post__desc">Товарищи! рамки и место обучения кадров представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач.  </span>
      </div>
      <div className="post">
        <img className="post__img" alt="cats" src="https://static.remove.bg/remove-bg-web/54743c30904cc98f30bb79359718a5ffd69392cd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        <span className="post__desc">Товарищи! рамки и место обучения кадров представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач.  </span>
      </div>
    </div>
    <div className="posts-form__pagination">
      <Pagination defaultCurrent={1} total={50} />
    </div>
  </main>
);

export default ProfileForm;
