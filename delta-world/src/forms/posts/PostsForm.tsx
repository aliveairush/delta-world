import React from 'react';
import './PostsForm.scss';
import { Pagination } from "antd";

const PostsForm = () => (
  <main className="posts-form page-layout__content custom-container">
    <div className="posts">
      <div className="post">
        <div className="post__created-by">
          <img className="post__created-by__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvFeqHFVwTB7Y2MrniyyyiEgyLMJRC77JafPEhXFdvtTQKE97HmuGeP6kdga6re8o_Qg&usqp=CAU" alt="tony" />
          <span className="post__created-by__username">mr David </span>
          <span className="post__created-by__date">1 may 04:20</span>
        </div>
        <img className="post__img" alt="cats" src="https://static.remove.bg/remove-bg-web/54743c30904cc98f30bb79359718a5ffd69392cd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        <span className="post__desc">Товарищи! рамки и место обучения кадров представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач.  </span>
      </div>
      <div className="post">
        <div className="post__created-by">
          <img className="post__created-by__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvFeqHFVwTB7Y2MrniyyyiEgyLMJRC77JafPEhXFdvtTQKE97HmuGeP6kdga6re8o_Qg&usqp=CAU" alt="tony" />
          <span className="post__created-by__username">mr David </span>
          <span className="post__created-by__date">1 may 04:20</span>
        </div>
        <img className="post__img" alt="cats" src="https://static.remove.bg/remove-bg-web/54743c30904cc98f30bb79359718a5ffd69392cd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        <span className="post__desc">Тоия кадров представляет собой </span>
      </div>
      <div className="post">
        <div className="post__created-by">
          <img className="post__created-by__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvFeqHFVwTB7Y2MrniyyyiEgyLMJRC77JafPEhXFdvtTQKE97HmuGeP6kdga6re8o_Qg&usqp=CAU" alt="tony" />
          <span className="post__created-by__username">mr David </span>
          <span className="post__created-by__date">1 may 04:20</span>
        </div>
        <img className="post__img" alt="cats" src="https://static.remove.bg/remove-bg-web/54743c30904cc98f30bb79359718a5ffd69392cd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        <span className="post__desc">Товарищи! рамки и место обучения кадров представляет собой </span>
      </div>
      <div className="post">
        <div className="post__created-by">
          <img className="post__created-by__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvFeqHFVwTB7Y2MrniyyyiEgyLMJRC77JafPEhXFdvtTQKE97HmuGeP6kdga6re8o_Qg&usqp=CAU" alt="tony" />
          <span className="post__created-by__username">mr David </span>
          <span className="post__created-by__date">1 may 04:20</span>
        </div>
        <img className="post__img" alt="cats" src="https://static.remove.bg/remove-bg-web/54743c30904cc98f30bb79359718a5ffd69392cd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        <span className="post__desc">Товарищи! рамки и место обучения кадров представляет собой </span>
      </div>
      <div className="post">
        <div className="post__created-by">
          <img className="post__created-by__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvFeqHFVwTB7Y2MrniyyyiEgyLMJRC77JafPEhXFdvtTQKE97HmuGeP6kdga6re8o_Qg&usqp=CAU" alt="tony" />
          <span className="post__created-by__username">mr David </span>
          <span className="post__created-by__date">1 may 04:20</span>
        </div>
        <img className="post__img" alt="cats" src="https://static.remove.bg/remove-bg-web/54743c30904cc98f30bb79359718a5ffd69392cd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        <span className="post__desc">Товарищи! рамки и место обучения кадров представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач.  </span>
      </div>
    </div>
    <div className="posts-form__pagination">
      <Pagination defaultCurrent={1} total={50} />
    </div>
  </main>
);

export default PostsForm;
