import React from 'react';
import './Posts.scss';
import { Pagination } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import { Post } from "../../types/dummyApi";
import { USERS_ROUTE } from "../../constants/routes";

interface Props {
  showAuthor?: boolean
  posts: Array<Post>
  currentPage: number,
  limit: number,
  totalElements: number,
  handlePageChange: Function,
}

const Posts = ({
  showAuthor = true, posts, currentPage, limit, totalElements, handlePageChange,
} : Props) => (
  <section>
    <div className="post-cards">
      {posts && posts.map((post) => (
        <div className="post" key={post.id}>
          {showAuthor && post.owner && (
          <div className="post__created-by">
            <Link to={`${USERS_ROUTE}/${post.owner.id}`}>
              <img className="post__created-by__img" src={post.owner.picture} alt={post.owner.firstName} />
            </Link>
            <Link to={`${USERS_ROUTE}/${post.owner.id}`}>
              <span className="post__created-by__username">{`${post.owner.title} ${post.owner.firstName}`}</span>
            </Link>
            <span className="post__created-by__date">{moment(post.publishDate).format('LL')}</span>
          </div>
          )}

          <img className="post__img" alt="Post img" src={post.image} />
          <span className="post__desc">{post.text}</span>
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
        showSizeChanger={false}
      />
    </div>
  </section>
);

Posts.defaultProps = {
  showAuthor: true,
};

export default Posts;
