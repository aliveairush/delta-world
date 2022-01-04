import React, { useEffect } from 'react';
import './PostsForm.scss';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import moment from "moment";
import { IStore } from "../../types/state";
import { ICommentListDataType, IPost, IPostListDataType } from "../../types/dummyApi";
import 'moment/locale/ru';
import Posts from "../../components/posts/Posts";
import Modal from "../../components/modal/Modal";
import Post from "../../components/post/Post";
import { loadPostListAction } from "../../actions/postListActions";
import { hidePostModalAction, updateCurrentPostDataAction } from "../../actions/postActions";
import { EMPTY_FUNCTION } from "../../constants/common";

moment.locale('ru');

interface Props {
  postListData: IPostListDataType,
  showPostModal: boolean,
  post: IPost,
  commentListData: ICommentListDataType,
  loadPostListAction: (page?: number, limit?: number) => void;
  updateCurrentPostDataAction: Function;
  hidePostModalAction: EMPTY_FUNCTION;
}

const PostsForm = ({
  postListData, post, showPostModal, commentListData, loadPostListAction, updateCurrentPostDataAction,
  hidePostModalAction,
} : Props) => {
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
        handlePostClick={updateCurrentPostDataAction}
      />
      <Modal show={showPostModal} onClose={hidePostModalAction}>
        <Post post={post} commentListData={commentListData} />
      </Modal>
    </main>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadPostListAction: bindActionCreators(loadPostListAction, dispatch),
  updateCurrentPostDataAction: bindActionCreators(updateCurrentPostDataAction, dispatch),
  hidePostModalAction: bindActionCreators(hidePostModalAction, dispatch),
});

export default connect((state: IStore) => ({
  loading: state.postList.loading,
  postListData: state.postList.postListData,
  post: state.postModal.post,
  showPostModal: state.postModal.showPostModal,
  // loadingCommentList: state.postModal.loadingCommentList,
  commentListData: state.postModal.commentListData,
}), mapDispatchToProps)(PostsForm);
