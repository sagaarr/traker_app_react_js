import * as constants from "../../actions/dropdowns/type";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: true,
  success:false
}
  
  export const dropdownListReducer = (state = INITIAL_STATE, action) => {
    const { type, data } = action;
    switch (type) {
      case constants.DROPDOWN_LIST_REQ:
        return {...state,loading: true};
      case constants.DROPDOWN_LIST_SUCCESS:
        return {...state,loading: false,data: data,success:true};
      case constants.DROPDOWN_LIST_FAIL:        
        return {...state,loading: false,data: data,success:false};
      default:
        return state;
    }
  };
  