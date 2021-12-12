export const INITIAL_STATE = {
  loading: false,
  data: undefined,
  error: true,
  success:false
};

/* Login types */
export const LOGIN_REQ = "LOGIN_REQ";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOG_OUT = "LOG_OUT";

/* UserList Type */
export const USER_LIST_REQ = "USER_LIST_REQ";
export const USER_LIST_SUCCESS = "USER_LIST_SUCCESS";
export const USER_LIST_FAIL = "USER_LIST_FAIL";

/* get user details */
export const USER_DETAILS = "USER_DETAILS";

/* Edit User Details */
export const EDIT_USER_REQ = "EDIT_USER_REQ";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAIL = "EDIT_USER_FAIL";

/* Edit User PASSWORD */
export const EDIT_PASSWORD_REQ = "EDIT_PASSWORD_REQ";
export const EDIT_PASSWORD_SUCCESS = "EDIT_PASSWORD_SUCCESS";
export const EDIT_PASSWORD_FAIL = "EDIT_PASSWORD_FAIL";

/* Image upload  */
export const IMG_UPLOAD_REQ = "IMG_UPLOAD_REQ";
export const IMG_UPLOAD_SUCCESS = "IMG_UPLOAD_SUCCESS";
export const IMG_UPLOAD_FAIL = "IMG_UPLOAD_FAIL";

/* Create Driver/user */
export const CREATE_USER_REQ = "CREATE_USER_REQ";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";


export const loadingType = {
  START:'START_LOADER',
  STOP:'STOP_LOADER',
}