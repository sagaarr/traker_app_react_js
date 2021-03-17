import { USER_LIST_FAIL, USER_LIST_REQ, USER_LIST_SUCCESS} from '../actions/types';


const INITIAL_STATE = {
    loading:false,
    data:[],
    error:true
}

export const userListReducer = (state = INITIAL_STATE, action) => {
    const {type, data} = action;
    switch (type) {
        case USER_LIST_REQ:
            return {
                ...state,
                loading:true
            }
        case USER_LIST_SUCCESS:
            return {
                ...state,
                loading:false,
                data:data,
                error:false,
            }
        case USER_LIST_FAIL:
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