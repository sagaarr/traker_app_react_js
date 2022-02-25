import * as constants from './type';
import userServices from "../../../APIs/userServices";
import {DELETEGroup} from '../../../constants/APIConstants';
import { toast } from 'react-toastify';


export const deleteGroupAction = (payload) => async dispatch => {
    dispatch({type:constants.DELETE_USER_REQUEST});
    try {
        const deleteGroup = await userServices.postRequest(`${DELETEGroup}`, {_id:payload});
        toast.success(deleteGroup.data.message)
        dispatch({
            type:constants.DELETE_USER_SUCCESS,
            data:deleteGroup.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type:constants.DELETE_USER_FAIL,
            data:{
                status:error.response,
                message:error.response.data.message
            }
        })
        
    }
}
