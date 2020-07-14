import { userService } from "../_services";
import { history } from "../_helpers";
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

const login = (email, password) => async (dispatch) => {
  dispatch(userLoginRequest());
  try {
    const user = await userService.login(email, password);
    dispatch(userLoginSuccess(user));
    history.push("/Registration");
  } catch (error) {
    dispatch(userLoginFailure(error));
    dispatch(alertError(error));
  }
};

const logout = () => {
  userService.logout();
  return userLogout();
};

const register = (user) => async (dispatch) => {
  dispatch(userRegisterRequest(user));
  try {
    await userService.register(user);
    dispatch(userRegisterSuccess(user));
    history.push("/Registration/login");
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
