import userServices from "../../APIs/userServices";
import {
  EDIT_USER_FAIL,
  EDIT_USER_REQ,
  EDIT_USER_SUCCESS,
  USER_DETAILS,
  EDIT_PASSWORD_REQ,
  EDIT_PASSWORD_FAIL,
  EDIT_PASSWORD_SUCCESS,
} from "./types";
import { toast } from "react-toastify";
import { updatePass, updateUser } from "../../constants/APIConstants";

// Get User Details
export const editUserDetailsAction = (value) => {
  return {
    type: USER_DETAILS,
    data: value,
  };
};

// Edit User Details
export const editUserAction = (values) => async (dispatch) => {
  dispatch({ type: EDIT_USER_REQ });

  try {
    const userListResponse = await userServices.postRequest(updateUser, values);
    toast.success("User Details Updaed Successfully !");
    dispatch({
      type: EDIT_USER_SUCCESS,
      data: userListResponse.data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: EDIT_USER_FAIL,
      data: {
        status: error.response.status,
        message: error.response.data.message,
      },
    });
  }
};

// Edit Password
export const editUserPassword = (value) => async (dispatch) => {
  dispatch({ type: EDIT_PASSWORD_REQ });
  try {
    const updatePassword = await userServices.postRequest(updatePass, value);
    toast.success("User Password upated successfully !");
    dispatch({
      type: EDIT_PASSWORD_SUCCESS,
      data: updatePassword.data,
    });
  } catch (error) {
    toast.success(error.response.data.message);
    dispatch({
      type: EDIT_PASSWORD_FAIL,
      data: {
        status: error.response.status,
        message: error.response.data.message,
      },
    });
  }
};
