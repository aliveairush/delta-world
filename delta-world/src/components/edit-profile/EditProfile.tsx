import React, { BaseSyntheticEvent, useRef, useState } from 'react';
import './EditProfile.scss';
import {
  DatePicker, Form, Input, Select,
} from "antd";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { UserProfileType } from "../../types/dummyApi";
import { updateUserProfileAction } from "../../actions/userProfileActions";
import defaultPicture from '../../assets/images/default-avatar.png';
import { convertFileToBase64 } from "../../utils/converters";

const { Option } = Select;

interface Props {
  userData: UserProfileType,
  updateUserProfileAction: (newUserData: UserProfileType) => void,
}

const EditProfile = ({ userData, updateUserProfileAction }: Props) => {
  const [editFormUserData, setEditFormUserData] = useState(userData);
  const fileInput = useRef<HTMLInputElement>(null);

  const formItemLayout = {
    labelCol: {
      xs: { span: 10 },
    },
    wrapperCol: {
      xs: { span: 0, offset: 0 },
    },
  };

  const handleNameChange = (event: BaseSyntheticEvent) => {
    const userFullNameArray = event.target.value.split(' ');
    setEditFormUserData({
      ...editFormUserData,
      firstName: userFullNameArray[1] ? userFullNameArray[1] : '',
      lastName: userFullNameArray[0],
    });
  };

  const handleGenderChange = (event: string) => {
    setEditFormUserData({
      ...editFormUserData,
      gender: event,
    });
  };

  const handlePhoneChange = (event: BaseSyntheticEvent) => {
    setEditFormUserData({
      ...editFormUserData,
      phone: event.target.value,
    });
  };

  const handleDateOfBirthChange = (event: any) => {
    setEditFormUserData({
      ...editFormUserData,
      dateOfBirth: event,
    });
  };

  const handleDeleteImageClick = () => {
    setEditFormUserData({
      ...editFormUserData,
      picture: defaultPicture,
    });
  };

  const handleUploadImage = async (e: BaseSyntheticEvent) => {
    const file = e.target.files[0];
    const imageBase64 : string = await convertFileToBase64(file);
    setEditFormUserData({
      ...editFormUserData,
      picture: imageBase64,
    });
  };

  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-modal__img">
        <img
          src={editFormUserData.picture}
          alt="UserAvatar"
        />
      </div>
      <div className="edit-profile-modal__edit-img-btns">
        <input
          style={{ display: "none" }}
          type="file"
          onChange={handleUploadImage}
          ref={fileInput}
        />
        <span
          className="edit-profile-modal__edit-img-btn"
          onClick={() => { fileInput.current?.click(); }}
        >
          Обновить фотографию
        </span>
        <span className="edit-profile-modal__edit-img-btn" onClick={handleDeleteImageClick}>Удалить фотографию</span>
      </div>
      <div className="edit-profile-modal__form">

        <Form labelAlign="left" colon labelCol={formItemLayout.labelCol} wrapperCol={formItemLayout.wrapperCol} className="edit-profile-modal__form">
          <Form.Item className="edit-profile-modal__input" label="Имя">
            <Input
              value={`${editFormUserData.lastName} ${editFormUserData.firstName}`}
              onChange={handleNameChange}
            />
          </Form.Item>
          <Form.Item className="edit-profile-modal__input" label="Пол">
            <Select onChange={handleGenderChange} value={editFormUserData.gender}>
              <Option value="male">Мужской</Option>
              <Option value="female">Женский</Option>
            </Select>
          </Form.Item>
          <Form.Item className="edit-profile-modal__input" label="Дата рождения">
            <DatePicker
              format="LL"
              defaultValue={moment(editFormUserData.dateOfBirth)}
              value={moment(editFormUserData.dateOfBirth)}
              className="auth-form__content__datepicker"
              onChange={handleDateOfBirthChange}
            />
          </Form.Item>
          <Form.Item className="edit-profile-modal__input" label="Дата регистрации">
            <Input disabled value={moment(editFormUserData.registerDate).format('LL')} />
          </Form.Item>
          <Form.Item className="edit-profile-modal__input" label="Email">
            <Input
              value={editFormUserData.email}
              disabled
            />
          </Form.Item>
          <Form.Item className="edit-profile-modal__input" label="Телефон">
            <Input
              value={editFormUserData.phone}
              onChange={handlePhoneChange}
            />
          </Form.Item>
        </Form>

      </div>
      <div className="edit-profile-modal__save">
        <span onClick={() => updateUserProfileAction(editFormUserData)}>
          Cохранить
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateUserProfileAction: bindActionCreators(updateUserProfileAction, dispatch),
});

export default connect(() => ({}), mapDispatchToProps)(EditProfile);
