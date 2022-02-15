import userServices from "../../../APIs/userServices";
import * as constants from "./type"
import {GETDailyReport, GETPantentReport} from '../../../constants/APIConstants';
import moment from 'moment';


export const getDailyReport = (payload) => async dispatch => {
    dispatch({type:constants.DAILY_REPORT_REQ});
    let {startDate, zone, state} = payload;
    startDate = moment(startDate).format('DD-MM-YYYY')
    try {
        const report = await userServices.getRequest(`${GETDailyReport}/${startDate}/${zone}/${state}`);
        console.log(report.data);
        dispatch({
            type:constants.DAILY_REPORT_SUCCESS,
            data:report.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type:constants.DAILY_REPORT_FAIL,
            data:{
                status:error.response,
                message:error.response.data.message
            }
        })
        
    }
}

export const getPatentReport = (payload) => async dispatch => {
    dispatch({type:constants.PATENT_REPORT_REQ});
    const {startDate, endDate} = payload;
    try {
        const report = await userServices.getRequest(`${GETPantentReport}/${startDate}/${endDate}`);
        dispatch({
            type:constants.PATENT_REPORT_SUCCESS,
            data:report.data
        });
    } catch (error) {
        dispatch({
            type:constants.PATENT_REPORT_FAIL,
            data:{
                status:error.response,
                message:error.response.data.message
            }
        })
        
    }
}