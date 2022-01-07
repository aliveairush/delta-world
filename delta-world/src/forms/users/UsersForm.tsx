import React, { useEffect } from 'react';
import "./UsersForm.scss";
import { Pagination } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserCard from '../../components/user-card/UserCard';
import { IStoreUserList } from "../../types/state";
import * as actions from '../../actions/userListActions';
import { UserListDataType } from "../../types/dummyApi";
import { ShowIdHelper } from "../../wrappers/ShowIdHelper";

interface Props {
  loading: boolean,
  userListData: UserListDataType,
  loadUserListAction: (page?: number, limit?: number) => void,
}

const UsersForm = ({ loading, userListData, loadUserListAction }: Props) => {
  useEffect(() => {
    loadUserListAction(0, 6);
  }, []);

  return (
    <div className="users-form custom-container page-layout__content">
      <div>
        {loading ? 'true' : 'false'}
        {userListData.data?.length}
      </div>
      <div className="cards">
        {userListData.data?.map((elem) => (
          <ShowIdHelper id={elem.id} key={elem.id}>
            <UserCard
              picture={elem.picture}
              firstName={elem.firstName}
              lastName={elem.lastName}
              title={elem.title}
              id={elem.id}
              key={elem.id}
            />
          </ShowIdHelper>
        ))}
      </div>
      <div className="users-form__pagination">
        <Pagination
          defaultCurrent={1}
          onChange={(pageNumber) => {
            loadUserListAction(pageNumber - 1, userListData.limit);
          }}
          defaultPageSize={userListData.limit}
          current={userListData.page + 1}
          total={userListData.total}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default connect((state: IStoreUserList) => ({
  loading: state.userList.loading,
  userListData: state.userList.userListData,
}), ((dispatch) => bindActionCreators(actions, dispatch)))(UsersForm);
