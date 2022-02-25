import * as constants from '../../actions/Users/type';
  
  const INITIAL_STATE = {
    loading: false,
    data: undefined,
    error: true,
  }

  export const deleteGroupReducer = (state = INITIAL_STATE, action) => {
    const { type, data } = action;
    switch (type) {
      case constants.DELETE_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case constants.DELETE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          data: data,
          error:false
        };
      case constants.DELETE_USER_FAIL:
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
  