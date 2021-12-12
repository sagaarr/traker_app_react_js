import {
  EDIT_USER_FAIL,
  EDIT_USER_REQ,
  EDIT_USER_SUCCESS,
  USER_DETAILS,
  EDIT_PASSWORD_REQ,
  EDIT_PASSWORD_FAIL,
  EDIT_PASSWORD_SUCCESS,
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  data: undefined,
  error: true,
};

const INITIAL_USER_DETAILS = {
  user: undefined,
};

export const userDetailsReducer = (state = INITIAL_USER_DETAILS, action) => {
  const { type, data } = action;
  switch (type) {
    case USER_DETAILS:
      return {
        ...state,
        user: data,
      };

    default:
      return state;
  }
};

export const editUserReducer = (state = INITIAL_STATE, action) => {
  const { type, data } = action;
  switch (type) {
    case EDIT_USER_REQ:
      return {
        ...state,
        loading: true,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: data,
        error: false,
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        loading: false,
        data: data,
        error: true,
      };
    default:
      return state;
  }
};

export const editPasswordReducer = (state = INITIAL_STATE, action) => {
  const { type, data } = action;
  switch (type) {
    case EDIT_PASSWORD_REQ:
      return {
        ...state,
        loading: true,
      };
    case EDIT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: data,
        error: false,
        isLoggedIn: true,
      };
    case EDIT_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        data: data,
        error: true,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
