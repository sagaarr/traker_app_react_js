import * as constants from "../../actions/dropdowns/type";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: true,
  success: false
}

export const dropdownListReducer = (state = INITIAL_STATE, action) => {
  const { type, data } = action;
  switch (type) {
    case constants.DROPDOWN_LIST_REQ:
      return { ...state, loading: true };
    case constants.DROPDOWN_LIST_SUCCESS:
      return { ...state, loading: false, data: data, success: true };
    case constants.DROPDOWN_LIST_FAIL:
      return { ...state, loading: false, data: data, success: false };
    default:
      return state;
  }
};

export const dropdownStateListReducer = (state = INITIAL_STATE, action) => {
  const { type, data } = action;
  switch (type) {
    case constants.STATE_DROPDOWN_REQ:
      return { ...state, loading: true };
    case constants.STATE_DROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: data,
        error: false
      };
    case constants.DROPDOWN_LIST_FAIL:
      return { ...state, loading: false, data: data, error: true };
    default:
      return state;
  }
};

export const AmbulanceDropdownReducer = (state = INITIAL_STATE, action) => {
  const { type, data } = action;
  //console.log("In reducer")
  switch (type) {
    case constants.GET_AMBULANCE_DROPDOWN_REQUEST:
      return { ...state, loading: true };
    case constants.GET_AMBULANCE_DROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: data,
        error: false
      };
    case constants.GET_AMBULANCE_DROPDOWN_FAIL:
      return { ...state, loading: false, data: data, error: true };
    default:
      return state;
  }
};
