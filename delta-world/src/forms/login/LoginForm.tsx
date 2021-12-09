import React from 'react';
import '../../scss/authorization-form.scss';

import {
  Button, Form, Input,
} from "antd";

const LoginForm = () => (
  <main className="auth-page custom-container page-layout__content">
    <div className="auth-form">
      <div className="auth-form__title">Вход</div>
      <Form className="auth-form__content" layout="vertical">
        <Form.Item label="ID:">
          <Input placeholder="Введите свой ID" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
      <div className="auth-form__help-info">Еще нет аккаунта, Зарегистрироваться</div>
    </div>
  </main>
);

export default LoginForm;
