import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS, LOG_OUT } from "./types";
import AuthService from "../../APIs/authUser";
import { loginUser } from "../../constants/APIConstants";
import { toast } from "react-toastify";

export const loginAction = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_REQ });
  try {
    const loginResponse = await AuthService.login(loginUser, data);
    toast.success("Successfully Logged In!");
    dispatch({
      type: LOGIN_SUCCESS,
      data: loginResponse,
    });
  } catch (error) {
    // toast.error(error.response.data.message);
    dispatch({
      type: LOGIN_FAIL,
      data: {
        status: error.response.status,
        message: error.response.data.message,
      },
    });
  }
};

export const logoutAction = () => {
  return {
    type: LOG_OUT,
    data: undefined,
  };
};
