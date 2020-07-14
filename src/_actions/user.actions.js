import { userService } from "../_services";
// import { browserHistory } from 'react-router-dom';
// import { history } from "../_helpers";
import {
  alertSuccess,
  alertError,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFailure,
  userLogout,
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
} from "./actions";

const login = (email, password, history) => async (dispatch) => {
  dispatch(userLoginRequest());
  try {
    const user = await userService.login(email, password);
    dispatch(userLoginSuccess(user));
    history.push("/");
  } catch (error) {
    dispatch(userLoginFailure(error));
    dispatch(alertError(error));
  }
};

const logout = () => (dispatch) => {
  userService.logout();
  dispatch(userLogout()); ;
};

const register = (user, history) => async (dispatch) => {
  dispatch(userRegisterRequest(user));
  try {
    await userService.register(user);
    dispatch(userRegisterSuccess(user));
    history.push("/login");
    dispatch(alertSuccess("Registration successful"));
  } catch (error) {
    dispatch(userRegisterFailure(error));
    dispatch(alertError(error));
  }
};

export const userActions = {
  login,
  logout,
  register,
};
