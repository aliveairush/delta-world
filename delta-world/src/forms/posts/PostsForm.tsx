import React, { useEffect } from 'react';
import './PostsForm.scss';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import { IStorePostList } from "../../types/state";
import { IPostListDataType } from "../../types/dummyApi";
import * as actions from '../../actions/postListActions';
import 'moment/locale/ru';
import Posts from "../../components/posts/Posts";

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
      <Posts
        posts={postListData.data}
        currentPage={postListData.page}
        limit={postListData.limit}
        totalElements={postListData.total}
        handlePageChange={(pageNumber: number) => {
          loadPostListAction(pageNumber - 1, postListData.limit);
        }}
      />
    </main>
  );
};

export default connect((state: IStorePostList) => ({
  loading: state.postList.loading,
  postListData: state.postList.postListData,
}), (dispatch) => bindActionCreators(actions, dispatch))(PostsForm);
