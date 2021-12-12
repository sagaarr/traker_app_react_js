import userServices from "../../APIs/userServices";
import { createUser } from "../../constants/APIConstants";
import { toast } from "react-toastify";
import {
  CREATE_USER_FAIL,
  CREATE_USER_REQ,
  CREATE_USER_SUCCESS,
  loadingType,
} from "./types";

export const createUserAction = (values) => async (dispatch) => {
  dispatch({ type: CREATE_USER_REQ });
  dispatch({type:loadingType.START})
  delete values["myFile"];

  try {
    const response = await userServices.postRequest(createUser, values);
    toast.success("User Created Successfully!");
    dispatch({type:loadingType.STOP})
    dispatch({
      type: CREATE_USER_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({type:loadingType.STOP})
    dispatch({
      type: CREATE_USER_FAIL,
      data: {
        status: error.response.status,
        message: error.response.data.message,
      },
    });
  }
};
