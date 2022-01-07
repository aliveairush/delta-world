import React from 'react';
import { Pagination } from "antd";
import styles from './Post.module.scss';
import { ICommentListDataType, IPost } from "../../types/dummyApi";
import { ShowIdHelper } from "../../wrappers/ShowIdHelper";

interface Props {
  post: IPost,
  commentListData: ICommentListDataType
}

const Post = ({ post, commentListData } : Props) => (
  <article className={styles.post}>
    <ShowIdHelper id={post.owner?.id}>
      <div className={styles.post__createdBy}>
        { /* TODO Add link */}
        <img className={styles.post__createdBy__authorImg} src={post.owner && post.owner.picture} alt="" />
        <span className={styles.post__createdBy__username}>{post.owner && `${post.owner.title} ${post.owner.firstName} ${post.owner.lastName}`}</span>
        <span className={styles.post__createdBy__date}>Date</span>
      </div>
    </ShowIdHelper>
    <div className={styles.post__img}>
      <img
        src={post?.image}
        alt="Fox"
      />
    </div>
    <div className={styles.post__text}>
      {post?.text}
    </div>
    {commentListData?.data?.length > 0 && (
    <div>
      <div className={styles.post__comments}>
        {commentListData?.data?.map((comment) => (
          <article className={styles.comment}>
            <div className={styles.comment__img}>
              <img src={comment.owner.picture} alt="" />
            </div>
            <div className={styles.comment__header}>
              <span className={styles.comment__headerUsername}>Username</span>
              <span className={styles.comment__headerDate}>Date</span>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate deleniti dolor
            </div>
          </article>
        ))}
      </div>
      <div className={styles.post__commentsPagination}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
    )}
  </article>
);

export default Post;
