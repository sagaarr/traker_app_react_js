import userServices from "../../APIs/userServices";
import { USER_LIST_FAIL, USER_LIST_REQ, USER_LIST_SUCCESS } from "./types"
import {getUser} from '../../constants/APIConstants';



export const userListAction = () => async dispatch => {
    dispatch({type:USER_LIST_REQ});

    try {
        const userListResponse = await userServices.getRequest(getUser);
        console.log(userListResponse.data)
        dispatch({
            type:USER_LIST_SUCCESS,
            data:userListResponse.data
        });
    } catch (error) {
        dispatch({
            type:USER_LIST_FAIL,
            data:{
                status:error.response.status,
                message:error.response.data.message
            }
        })
        
    }
}