import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userActions } from "../_actions";
import "./RegistrationPage.css";

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

const RegisterPage = ({ register, registering }) => {
  const onFinish = (user) => {
    register({ user });
  };

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      className="registration-form"
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

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
        <Button type="primary" htmlType="submit"
        loading={registering}
        >
          Register
        </Button>
        <Link to="/login" className="registration-form--signup">
          Cancel
        </Link>
      </Form.Item>
    </Form>
  );
};

RegisterPage.propTypes = {
  register: PropTypes.func.isRequired,
  registering: PropTypes.bool,
};
RegisterPage.defaultProps = {
  registering: false
};

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register,
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
