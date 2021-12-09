import React from 'react';
import './RegistrationForm.scss';
import {
  Button,
  DatePicker, Form, Input, Radio,
} from "antd";

const RegistrationForm = () => (
  <main className="registration-page custom-container page-layout__content">
    <div className="registration-form">
      <div className="registration-form__title">Регистрация</div>
      <Form className="registration-form__content" layout="vertical">
        <Form.Item label="Имя:">
          <Input placeholder="Введите свое имя" />
        </Form.Item>
        <Form.Item name="radio-group" label="Пол:">
          <Radio.Group className="registration-form__content__radio">
            <Radio value="Мужской">Мужской</Radio>
            <Radio value="Женский">Женский</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="date-picker" label="Дата рождения:">
          <DatePicker className="registration-form__content__datepicker" />
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
      <div className="registration-form__login-link">Уже есть аккаунт? Войти</div>
    </div>

  </main>
);

export default RegistrationForm;
