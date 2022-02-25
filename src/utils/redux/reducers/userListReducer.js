import * as constants from '../actions/types';


const INITIAL_STATE = {
    loading:false,
    data:[],
    error:true
}

export const userListReducer = (state = INITIAL_STATE, action) => {
    const {type, data} = action;
    switch (type) {
        case constants.USER_LIST_REQ:
            return {
                ...state,
                loading:true
            }
        case constants.USER_LIST_SUCCESS:
            return {
                ...state,
                loading:false,
                data:data,
                error:false,
            }
        case constants.USER_LIST_FAIL:
            return {
                ...state,
                loading:false,
                data:data,
                error:true,
            }
        default:
            return state
    }
}


const INITIAL_LOCATION_STATE = {
    loading:false,
    data:[],
    error:true
}

export const userLocationsReducer = (state = INITIAL_LOCATION_STATE, action) => {
    const {type, data} = action;
    switch (type) {
        case constants.GET_LOCATIONS_REQ:
            return {
                ...state,
                loading:true
            }
        case constants.GET_LOCATIONS_SUCCESS:
            return {
                ...state,
                loading:false,
                data:data,
                error:false,
            }
        case constants.GET_LOCATIONS_FAIL:
            return {
                ...state,
                loading:false,
                data:data,
                error:true,
            }
        default:
            return state
    }
}

const INITIAL_AMBULANCE_LOCATION = {
    loading:false,
    data:[],
    error:true
}


export const getAmbulanceAndUserDetailsReducer = (state = INITIAL_AMBULANCE_LOCATION, action) => {
    const {type, data} = action;
    switch (type) {
        case constants.GET_USERS_AMBULANCE_REQ:
            return {
                ...state,
                loading:true
            }
        case constants.GET_USERS_AMBULANCE_SUCCESS:
            return {
                ...state,
                loading:false,
                data:data,
                error:false,
            }
        case constants.GET_USERS_AMBULANCE_FAIL:
            return {
                ...state,
                loading:false,
                data:data,
                error:true,
            }
        default:
            return state
    }
}

