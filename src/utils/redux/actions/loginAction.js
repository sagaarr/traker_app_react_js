import {LOGIN_FAIL,LOGIN_REQ, LOGIN_SUCCESS} from './types';
import AuthService from '../../APIs/authUser';
import {loginUser} from '../../constants/APIConstants'

export const loginAction = (data) => async(dispatch) => {
   
    dispatch({type:LOGIN_REQ});
    try {
        const loginResponse = await AuthService.login(loginUser, data);
        dispatch({
            type:LOGIN_SUCCESS,
            data:loginResponse
        });
    } catch (error) {
        dispatch({
                type:LOGIN_FAIL,
                data:{
                    status:error.response.status,
                    message:error.response.data.message
                }
            })
    }
}

