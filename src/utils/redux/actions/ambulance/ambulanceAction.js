import userServices from "../../../APIs/userServices";
import { appointCrew, createAmbulance, getAllAmbulances } from "../../../constants/APIConstants";
import { toast } from "react-toastify";
import {createAmbulanceCrewType, createAmbulanceType, getAmbulanceType} from "./types";
import { loadingType } from "../types";

export const getAmbulanceAction = () => async dispatch => {
    dispatch({type:getAmbulanceType.REQUEST});

    try {
        const userListResponse = await userServices.getRequest(getAllAmbulances);
        dispatch({
            type:getAmbulanceType.SUCCESS,
            data:userListResponse.data
        });
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong!")
        dispatch({
            type:getAmbulanceType.ERROR,
            data:{
                status:error.response.status,
                message:error.response.data.message
            }
        })
        
    }
}

export const createAmbulanceCrewAction = (payload) => async dispatch =>  {
    dispatch({type:createAmbulanceCrewType.REQUEST});

    try {
        const response = await userServices.postRequest(appointCrew, payload);
        toast.success(response.data.message)
        dispatch({
          type: createAmbulanceCrewType.SUCCESS,
          data: response.data,
        });
      } catch (error) {
        toast.error(error.response.data.message);
        dispatch({
          type: createAmbulanceCrewType.ERROR,
          data: {
            status: error.response.status,
            message: error.response.data.message,
          },
        });
      }
}

export const createAmbulanceAction = (payload) => async dispatch =>  {
  dispatch({type:createAmbulanceType.REQUEST});
  dispatch({type:loadingType.START})
  try {
      const response = await userServices.postRequest(createAmbulance, payload);
      toast.success(response.data.message)
      dispatch({type:loadingType.STOP})
      dispatch({
        type: createAmbulanceType.SUCCESS,
        data: response.data,
      });
    } catch (error) {
      dispatch({type:loadingType.STOP})
      toast.error(error.response.data.message);
      dispatch({
        type: createAmbulanceType.ERROR,
        data: {
          status: error.response.status,
          message: error.response.data.message,
        },
      });
    }
}