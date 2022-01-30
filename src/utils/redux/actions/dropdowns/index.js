import userServices from "../../../APIs/userServices";
import * as constants from "./type"
import {GETDropdown, GETStateDropdown} from '../../../constants/APIConstants';


export const getDropdownList = (payload) => async dispatch => {
    dispatch({type:constants.DROPDOWN_LIST_REQ});
    // const {zone} = payload;
    try {
        const report = await userServices.getRequest(`${GETDropdown}/${payload}`);
        // console.log(report);
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

export const getStateList = () => async dispatch => {
    console.log("Helllo")
    dispatch({type:constants.STATE_DROPDOWN_REQ});
    try {
        const states = await userServices.getRequest(`${GETStateDropdown}`);
        console.log(states);
        dispatch({
            type:constants.STATE_DROPDOWN_SUCCESS,
            data:states.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type:constants.STATE_DROPDOWN_FAIL,
            data:{
                status:error.response,
                message:error.response.data.message
            }
        })
        
    }
}