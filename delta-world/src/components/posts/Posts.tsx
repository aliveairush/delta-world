import React from 'react';
import './Posts.scss';
import { Pagination } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import { IPost } from "../../types/dummyApi";
import { USERS_ROUTE } from "../../constants/routes";
import { ShowIdHelper } from "../../wrappers/ShowIdHelper";

interface Props {
  showAuthor?: boolean
  posts: Array<IPost>
  currentPage: number,
  limit: number,
  totalElements: number,
  handlePageChange: Function,
  handlePostClick?: Function,
}

const Posts = ({
  showAuthor = true, posts, currentPage, limit, totalElements, handlePageChange, handlePostClick,
} : Props) => {
  // TODO Refactor
  console.log("test");
  // const showModal = false;
  // const toggleShowModal = () => {
  //   showModal = !showModal;
  // };
  return (
    <section>
      <div className="post-cards">
        {posts && posts.map((post) => (

          <div className="post">
            {showAuthor && post.owner && (
            <ShowIdHelper id={post.id} key={post.id}>
              <div className="post__created-by">
                <Link to={`${USERS_ROUTE}/${post.owner.id}`}>
                  <img className="post__created-by__img" src={post.owner.picture} alt={post.owner.firstName} />
                </Link>
                <Link to={`${USERS_ROUTE}/${post.owner.id}`}>
                  <span className="post__created-by__username">{`${post.owner.title} ${post.owner.firstName}`}</span>
                </Link>
                <span className="post__created-by__date">{moment(post.publishDate).format('LL')}</span>
              </div>
            </ShowIdHelper>
            )}
            <div onClick={() => {
              // TODO Refactor
              console.log('hello');
              // @ts-ignore
              handlePostClick(post);
            }}
            >
              <img className="post__img" alt="Post img" src={post.image} />
              <span className="post__desc">{post.text}</span>
            </div>
          </div>

        ))}
      </div>
      <div className="posts-form__pagination">
        <Pagination
          className="pagination"
          size="small"
          onChange={(pageNumber) => {
            handlePageChange(pageNumber);
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
};

Posts.defaultProps = {
  showAuthor: true,
  handlePostClick: () => {},
};

export default Posts;
