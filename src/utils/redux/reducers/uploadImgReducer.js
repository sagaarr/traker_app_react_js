import {
  IMG_UPLOAD_FAIL,
  IMG_UPLOAD_REQ,
  IMG_UPLOAD_SUCCESS,
  INITIAL_STATE,
} from "../actions/types";

export const uploadImgReducer = (state = INITIAL_STATE, action) => {
  const { type, data } = action;
  switch (type) {
    case IMG_UPLOAD_REQ:
      return {
        ...state,
        loading: true,
      };
    case IMG_UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: data,
        error: false,
      };
    case IMG_UPLOAD_FAIL:
      return {
        ...state,
        data: data,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
