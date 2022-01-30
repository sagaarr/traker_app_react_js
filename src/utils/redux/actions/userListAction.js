import userServices from "../../APIs/userServices";
import * as constants from "./types"
import {GETAmbulanceAndUsers, GETLocations, getUser} from '../../constants/APIConstants';



export const userListAction = () => async dispatch => {
    dispatch({type:constants.USER_LIST_REQ});

    try {
        const userListResponse = await userServices.getRequest(getUser);
        console.log(userListResponse);
        dispatch({
            type:constants.USER_LIST_SUCCESS,
            data:userListResponse.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type:constants.USER_LIST_FAIL,
            data:{
                status:error.response,
                message:error.response.data.message
            }
        })
        
    }
};

export const getLocationsAction = (value) => async dispatch => {
    dispatch({type:constants.GET_LOCATIONS_REQ});

    try {
        const userListResponse = await userServices.getRequest(`${GETLocations}${value}`);
        dispatch({
            type:constants.GET_LOCATIONS_SUCCESS,
            data:userListResponse.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type:constants.GET_LOCATIONS_FAIL,
            data:{
                status:error.response,
            }
        })
        
    }
};

export const getAmbulanceAndUserDetailsAction = (location) => async dispatch => {
    dispatch({type:constants.GET_USERS_AMBULANCE_REQ});

    try {
        const userListResponse = await userServices.getRequest(`${GETAmbulanceAndUsers}${location}`);
        dispatch({
            type:constants.GET_USERS_AMBULANCE_SUCCESS,
            data:userListResponse.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type:constants.GET_USERS_AMBULANCE_FAIL,
            data:{
                status:error.response,
            }
        })
        
    }
};