import userServices from "../../../APIs/userServices";
import * as constants from "./type"
import {GETDropdown} from '../../../constants/APIConstants';


export const getDropdownList = (payload) => async dispatch => {
    dispatch({type:constants.DROPDOWN_LIST_REQ});
    // const {zone} = payload;
    try {
        const report = await userServices.getRequest(`${GETDropdown}/${payload}`);
        console.log(report);
        dispatch({
            type:constants.DROPDOWN_LIST_SUCCESS,
            data:report.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type:constants.DROPDOWN_LIST_FAIL,
            data:{
                status:error.response,
                message:error.response.data.message
            }
        })
        
    }
}