import * as constants from '../../actions/reportAction/type';


const INITIAL_STATE = {
    loading:false,
    data:[],
    success:false,
    message:'Please select start and end date to see the record!'
}

export const reportData = (state = INITIAL_STATE, action) => {
    const {type, data} = action;
    switch (type) {
        case constants.DAILY_REPORT_REQ:
            return {
                ...state,
                loading:true
            }
        case constants.DAILY_REPORT_SUCCESS:
            return {
                ...state,
                loading:false,
                data:data,
                success:true,
                message:data.length === 0 && 'No Record Found please try changing the date to see the result'
            }
        case constants.DAILY_REPORT_FAIL:
            return {
                ...state,
                loading:false,
                data:data,
                success:false,
            }
        default:
            return state
    }
}


export const patentReport = (state = INITIAL_STATE, action) => {
    const {type, data} = action;
    switch (type) {
        case constants.PATENT_REPORT_REQ:
            return {
                ...state,
                loading:true
            }
        case constants.PATENT_REPORT_SUCCESS:
            return {
                ...state,
                loading:false,
                data:data,
                success:true,
                message:data.length === 0 && 'No Record Found please try changing the date to see the result'
            }
        case constants.PATENT_REPORT_FAIL:
            return {
                ...state,
                loading:false,
                data:data,
                success:false,
            }
        default:
            return state
    }
}