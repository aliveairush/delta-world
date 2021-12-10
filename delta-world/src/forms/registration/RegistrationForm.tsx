import React from 'react';
import '../../scss/authorization-form.scss';
import {
  Button,
  DatePicker, Form, Input, Radio,
} from "antd";
import { connect } from "react-redux";
import { IStateRegistration, IStoreRegistration } from "../../types/state";

const RegistrationForm = ({ myTestValue } : IStateRegistration) => {
  console.log(myTestValue);
  return (
    <main className="auth-page custom-container page-layout__content">
      <div className="auth-form">
        <div className="auth-form__title">Регистрация</div>
        <Form className="auth-form__content" layout="vertical">
          <Form.Item label="Имя:">
            <Input placeholder="Введите свое имя" />
          </Form.Item>
          <Form.Item name="radio-group" label="Пол:">
            <Radio.Group className="auth-form__content__radio">
              <Radio value="Мужской">Мужской</Radio>
              <Radio value="Женский">Женский</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="date-picker" label="Дата рождения:">
            <DatePicker className="auth-form__content__datepicker" />
          </Form.Item>
          <Form.Item label="Email:">
            <Input placeholder="anonim@example.com" />
          </Form.Item>
          <Form.Item label="Телефон:">
            <Input placeholder="+79991234567" />
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

const mapStateToProps = (state: IStoreRegistration) => ({
  myTestValue: state.registration.myTestValue,
});

export default connect(mapStateToProps)(RegistrationForm);
