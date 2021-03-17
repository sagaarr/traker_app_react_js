import { combineReducers } from "redux";
import {loginReducer} from './loginReducer'
import {userListReducer} from './userListReducer';

const rootReducer = combineReducers({
 
    loginReducer:loginReducer,
    userListReducer:userListReducer
});

export default rootReducer;
