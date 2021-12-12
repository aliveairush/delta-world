import React from 'react';
import './Posts.scss';
import { Pagination } from "antd";
import { Post } from "../../types/dummyApi";

interface Props {
  posts: Array<Post>
  currentPage: number,
  limit: number,
  totalElements: number,
  handlePageChange: Function,
}

const Posts = ({
  posts, currentPage, limit, totalElements, handlePageChange,
} : Props) => (
  <section>
    <div className="post-cards">
      {posts && posts.map((post) => (
        <div className="post-card">
          <img
            className="post-card__img"
            alt="post"
            src={post.image}
          />
          <span className="post-card__desc">{post.text}</span>
        </div>
      ))}
    </div>
    <div className="posts-form__pagination">
      <Pagination
        className="pagination"
        size="small"
        onChange={(pageNumber) => {
          handlePageChange(pageNumber - 1);
        }}
        defaultCurrent={1}
        defaultPageSize={limit}
        current={currentPage + 1}
        total={totalElements}
      />
    </div>
  </section>
);

export default Posts;
