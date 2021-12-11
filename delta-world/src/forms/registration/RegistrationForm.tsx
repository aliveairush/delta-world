import React from 'react';
import '../../scss/authorization-form.scss';
import {
  Button,
  DatePicker, Form, Input, Radio,
} from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from 'react-router-dom';
import { IStoreRegistration } from "../../types/state";
import * as actions from '../../actions/registrationActions';
import Gender from "../../types/Gender";

interface Props {
  name: string,
  gender: Gender,
  // eslint-disable-next-line react/no-unused-prop-types
  dateOfBirth: string,
  email: string,
  phone: string,
  error: string,
  handleInputChangeAction: (e: any) => void,
  handleDatePickAction: (e: any) => void,
  registerUserAction: (e: any, history: any) => void,
}

const RegistrationForm = ({
  name, gender, error, email, phone, handleInputChangeAction, handleDatePickAction, registerUserAction,
} : Props) => {
  const navigate = useNavigate();

  return (
    <main className="auth-page custom-container page-layout__content">
      {error && (
      <div className="error-message">
        Error:
        {' '}
        {error}
      </div>
      )}

      <div className="auth-form">
        <div className="auth-form__title">Регистрация</div>
        <Form onFinish={(form) => registerUserAction(form, navigate)} className="auth-form__content" layout="vertical">
          <Form.Item name="name" initialValue={name} label="Имя:">
            <Input name="name" onChange={handleInputChangeAction} placeholder="Введите свое имя" />
          </Form.Item>
          <Form.Item name="gender" label="Пол:">
            <Radio.Group
              name="gender"
              defaultValue={gender}
              value={gender}
              onChange={handleInputChangeAction}
              className="auth-form__content__radio"
            >
              <Radio value="male">Мужской</Radio>
              <Radio value="female">Женский</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="dateOfBirth" label="Дата рождения:">
            <DatePicker
              name="dateOfBirth"
              onChange={handleDatePickAction}
              className="auth-form__content__datepicker"
            />
          </Form.Item>
          <Form.Item name="email" initialValue={email} label="Email:">
            <Input name="email" onChange={handleInputChangeAction} placeholder="anonim@example.com" />
          </Form.Item>
          <Form.Item name="phone" label="Телефон:">
            <Input
              name="phone"
              defaultValue={phone}
              value={phone}
              onChange={handleInputChangeAction}
              placeholder="+79991234567"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
        <div className="auth-form__login-link">Уже есть аккаунт? Войти</div>
      </div>
    </main>
  );
};

export default connect((state: IStoreRegistration) => ({
  name: state.registration.name,
  gender: state.registration.gender,
  dateOfBirth: state.registration.dateOfBirth,
  email: state.registration.email,
  phone: state.registration.phone,
  error: state.registration.error,
}), (dispatch) => bindActionCreators(actions, dispatch))(RegistrationForm);
