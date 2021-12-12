import {
  CREATE_USER_FAIL,
  CREATE_USER_REQ,
  CREATE_USER_SUCCESS,
  INITIAL_STATE,
} from "../actions/types";

export const createUserReducer = (state = INITIAL_STATE, action) => {
  const { type, data } = action;
  switch (type) {
    case CREATE_USER_REQ:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: data,
        success:true,
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        data: data,
        success: false,
      };
    default:
      return state;
  }
};
