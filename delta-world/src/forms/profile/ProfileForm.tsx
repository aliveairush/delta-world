import React, { useEffect } from 'react';
import './ProfileForm.scss';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import * as actions from '../../actions/userProfileActions';
import { IStoreUserProfile } from "../../types/state";
import { PostsDataType, UserProfileType } from "../../types/dummyApi";
import Posts from "../../components/posts/Posts";
import FieldValue from "../../components/field-value/FieldValue";
import 'moment/locale/ru';
import { localeGenderRu } from "../../utils/converters";
import EditProfileBtn from "../../components/user-profile-components/edit-profile-btn/EditProfileBtn";

moment.locale('ru');

interface Props {
  user: UserProfileType,
  postsData: PostsDataType,
  showModal: boolean,
  loadUserProfileAction: (userId: string) => void
  loadUserPostsAction: (userId: string, page: number, limit: number) => void
  setShowModalAction: (showModal: boolean) => void
}

const renderUserImage = (userPicture: string) => (userPicture ? (
  <div className="profile-userinfo__image">
    <img
      src={userPicture}
      alt="avatar"
    />
  </div>
) : <div />);

const renderUserInfoHeader = (user: UserProfileType, showModal: boolean, setShowModal: Function) => (user.title ? (
  <div className="profile-userinfo__info__header">
    <span
      className="profile-userinfo__info__header__username"
    >
      {`${user.title} ${user.firstName} ${user.lastName}`}
    </span>
    <EditProfileBtn showModal={showModal} setShowModal={setShowModal} userData={user} />
  </div>
) : <div />);

const renderUserInfoFooter = (userId: string) => (userId ? (
  <div className="profile-userinfo__info__footer">
    <FieldValue field="ID" value={userId} />
  </div>
) : <div />);

const renderUserAbout = (userInfo: UserProfileType) => {
  if (userInfo) {
    return (
      <div>
        <ul>
          <li><FieldValue field="Пол" value={localeGenderRu(userInfo.gender)} /></li>
          <li><FieldValue field="Дата рождения" value={moment(userInfo.dateOfBirth).format('LL')} /></li>
          <li><FieldValue field="Дата регистрации" value={moment(userInfo.registerDate).format('LL')} /></li>
          <li><FieldValue field="Email" value={userInfo.email} /></li>
          <li><FieldValue field="Телефон" value={userInfo.phone} /></li>
        </ul>
      </div>
    );
  }
  return <div />;
};

const ProfileForm = ({
  user, postsData, showModal, loadUserProfileAction, loadUserPostsAction, setShowModalAction,
}: Props) => {
  const { userId } = useParams() as any;

  useEffect(() => {
    loadUserProfileAction(userId);
    loadUserPostsAction(userId, 0, 6);
  }, []);

  const handlePageChange = (newPage: number) => loadUserPostsAction(userId, newPage, postsData.limit);

  return (
    <main className="profile-form custom-container page-layout__content">
      <div className="profile-userinfo">
        {renderUserImage(user.picture)}
        <div className="profile-userinfo__info">
          {renderUserInfoHeader(user, showModal, setShowModalAction)}
          {renderUserAbout(user)}
          {renderUserInfoFooter(userId)}
        </div>
      </div>
      <Posts
        handlePageChange={handlePageChange}
        posts={postsData.data}
        limit={postsData.limit}
        currentPage={postsData.page}
        totalElements={postsData.total}
      />
    </main>
  );
};

export default connect((state: IStoreUserProfile) => ({
  user: state.userProfile.user,
  postsData: state.userProfile.postsData,
  showModal: state.userProfile.showModal,
}), ((dispatch) => bindActionCreators(actions, dispatch)))(ProfileForm);
