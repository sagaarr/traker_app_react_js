import {loadingType} from '../actions/types';


export const loadingReducer = (state = {loading:false}, action) => {
    const { type} = action;
    switch (type) {
      case loadingType.START:
        return {...state,loading: true};
      case loadingType.STOP:
        return {...state,loading: false};
      default:
        return state;
    }
  };
  