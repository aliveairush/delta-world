import React, { useEffect } from 'react';
import './PostsForm.scss';
import { Pagination } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import { Link } from "react-router-dom";
import { IStorePostList } from "../../types/state";
import { IPostListDataType } from "../../types/dummyApi";
import * as actions from '../../actions/postListActions';
import 'moment/locale/ru';
import { USERS_ROUTE } from "../../constants/routes";

moment.locale('ru');

interface Props {
  postListData: IPostListDataType,
  loadPostListAction: (page?: number, limit?: number) => void;
}

const PostsForm = ({ postListData, loadPostListAction } : Props) => {
  useEffect(() => {
    loadPostListAction(0, 6);
  }, []);

  return (
    <main className="posts-form page-layout__content custom-container">
      <div className="posts">
        {postListData.data?.map((post) => (
          <div className="post" key={post.id}>
            <div className="post__created-by">
              <Link to={`${USERS_ROUTE}/${post.owner.id}`}>
                <img className="post__created-by__img" src={post.owner.picture} alt={post.owner.firstName} />
              </Link>
              <Link to={`${USERS_ROUTE}/${post.owner.id}`}>
                <span className="post__created-by__username">{`${post.owner.title} ${post.owner.firstName}`}</span>
              </Link>
              <span className="post__created-by__date">{moment(post.publishDate).format('LL')}</span>
            </div>
            <img className="post__img" alt="Post img" src={post.image} />
            <span className="post__desc">{post.text}</span>
          </div>
        ))}

      </div>
      <div className="posts-form__pagination">
        <Pagination
          defaultCurrent={1}
          onChange={(pageNumber) => {
            loadPostListAction(pageNumber - 1, postListData.limit);
          }}
          defaultPageSize={postListData.limit}
          current={postListData.page + 1}
          total={postListData.total}
          showSizeChanger={false}
        />
      </div>
    </main>
  );
};

export default connect((state: IStorePostList) => ({
  loading: state.postList.loading,
  postListData: state.postList.postListData,
}), (dispatch) => bindActionCreators(actions, dispatch))(PostsForm);
