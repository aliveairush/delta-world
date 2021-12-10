/* eslint-disable */
import React from 'react';
import './EditProfile.scss';
import {
  DatePicker, Form, Input, Select,
} from "antd";

const { Option } = Select;

const EditProfile = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 10 },
      // sm: { span: 0, offset: 0 },
    },
    wrapperCol: {
      xs: { span: 0, offset: 0 },
      // sm: { span: 12, offset: 12 },
    },
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-modal__img">
        <img
          src="https://thumbs.dreamstime.com/b/wild-gray-tabby-cat-bright-orange-eyes-lies-outdoors-square-photo-instagram-format-194924047.jpg"
          alt="vat"
        />
      </div>
      <div className="edit-profile-modal__edit-img-btns">
        <span>Обновить фоторографию</span>
        <span>Удалить фоторографию</span>
      </div>
      <div className="edit-profile-modal__form">

        <Form labelAlign="left" colon labelCol={formItemLayout.labelCol} wrapperCol={formItemLayout.wrapperCol} className="edit-profile-modal__form">
          <Form.Item className="edit-profile-modal__input" label="Имя">
            <Input value="HELLO" />
          </Form.Item>
          <Form.Item  className="edit-profile-modal__input"  label="Пол">
            <Select className="edit-profile-modal__input">
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Option value="jack">Jack</Option>
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>
          <Form.Item  className="edit-profile-modal__input" label="Дата рождения">
              <DatePicker className="auth-form__content__datepicker" />
          </Form.Item>
          <Form.Item  className="edit-profile-modal__input"  label="Дата регистрации">
            <Input disabled value="HELLO" />
          </Form.Item>
          <Form.Item   className="edit-profile-modal__input" label="Email">
            <Input value="aliveairush@gmail.com" />
          </Form.Item>
          <Form.Item   className="edit-profile-modal__input"  label="Телефон">
            <Input value="+7999876544" />
          </Form.Item>
        </Form>

      </div>
      <div className="edit-profile-modal__save">
        <span>
          Cохранить
        </span>
      </div>
    </div>
  );
};

export default EditProfile;
