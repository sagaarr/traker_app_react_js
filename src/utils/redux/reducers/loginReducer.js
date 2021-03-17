import {LOGIN_FAIL,LOGIN_REQ, LOGIN_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    loading:false,
    data:undefined,
    error:true,
    isLoggedIn:false
} 

export const loginReducer = (state = INITIAL_STATE, action) => {

    const {type, data} = action;
    switch (type) {
        case LOGIN_REQ:
            return {
                ...state,
                loading:true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                data:data,
                error:false,
                isLoggedIn:true
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading:false,
                data:data,
                error:true,
                isLoggedIn:false
            }
        default:
            return state
    }
}