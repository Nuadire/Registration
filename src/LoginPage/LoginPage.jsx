import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userActions } from "../_actions";
import "./LoginPage.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const LoginPage = ({ login, loggingIn }) => {
  const onFinish = ({ email, password }) => {
    login(email, password);
  };

  return (
    <Form {...layout} name="basic" onFinish={onFinish} className="login-form">
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loggingIn}>
          Login
        </Button>
        <Link className="login-form--signup" to="/Registration/signup">
          Registration
        </Link>
      </Form.Item>
    </Form>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  loggingIn: PropTypes.bool,
};
LoginPage.defaultProps = {
  loggingIn: false,
};

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };
