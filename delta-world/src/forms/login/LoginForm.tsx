import React from 'react';
import '../../scss/authorization-form.scss';

import {
  Button, Form, Input,
} from "antd";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../actions/authorizationActions";

interface Props {
  loginAction: (userId: any, navigate?: Function) => void
}

const LoginForm = ({ loginAction } : Props) => {
  const navigate = useNavigate();

  return (
    <main className="auth-page custom-container page-layout__content">
      <div className="auth-form">
        <div className="auth-form__title">Вход</div>
        <Form
          onFinish={(form) => {
            loginAction(form, navigate);
          }}
          className="auth-form__content"
          layout="vertical"
        >
          <Form.Item name="userId" label="ID:">
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
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginAction: bindActionCreators(loginAction, dispatch),
});
export default connect(null, mapDispatchToProps)(LoginForm);
