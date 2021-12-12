import {createAmbulanceCrewType, createAmbulanceType, getAmbulanceType} from "../../actions/ambulance/types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: true,
  success:false
}
  
  export const ambulanceReducer = (state = INITIAL_STATE, action) => {
    const { type, data } = action;
    switch (type) {
      case getAmbulanceType.REQUEST:
        return {...state,loading: true};
      case getAmbulanceType.SUCCESS:
        return {...state,loading: false,data: data,success:true};
      case getAmbulanceType.ERROR:
        return {...state,loading: false,data: data,success:false};
      default:
        return state;
    }
  };
  
  const CREW_INITIAL_DETAILS = {...INITIAL_STATE, data:undefined};

  export const createCrewReducer = (state = CREW_INITIAL_DETAILS, action) => {
    const { type, data } = action;
    switch (type) {
      case createAmbulanceCrewType.REQUEST:
        return {...state,loading: true};
      case createAmbulanceCrewType.SUCCESS:
        return {...state,loading: false,data: data,success:true};
      case createAmbulanceCrewType.ERROR:
        return {...state,loading: false,data: data,success:false};
      default:
        return state;
    }
  }

  export const createAmbulanceReducer = (state = CREW_INITIAL_DETAILS, action) => {
    const { type, data } = action;
    switch (type) {
      case createAmbulanceType.REQUEST:
        return {...state,loading: true};
      case createAmbulanceType.SUCCESS:
        return {...state,loading: false,data: data,success:true};
      case createAmbulanceType.ERROR:
        return {...state,loading: false,data: data,success:false};
      default:
        return state;
    }
  }