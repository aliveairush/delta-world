import React from 'react';
import { EditOutlined } from "@ant-design/icons";
import EditProfile from "../../edit-profile/EditProfile";
import Modal from "../../modal/Modal";
import { UserProfileType } from "../../../types/dummyApi";

interface Props {
  userData: UserProfileType,
  showModal: boolean,
  setShowModal: Function,
}

const EditProfileBtn = ({ userData, showModal, setShowModal }: Props) => (
  <div style={{ cursor: "pointer" }}>
    <EditOutlined />
    <span onClick={() => setShowModal(!showModal)}>Редактировать</span>
    <Modal show={showModal} onClose={() => setShowModal(!showModal)}>
      <EditProfile userData={userData} />
    </Modal>

  </div>
);

export default EditProfileBtn;
