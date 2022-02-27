import { combineReducers } from "redux";
import { createUserReducer } from "./createUserReducer";
import {
  userDetailsReducer,
  editUserReducer,
  editPasswordReducer,
} from "./editUserReducers";
import {ambulanceReducer, createAmbulanceReducer, createCrewReducer} from './ambulanceReducer'
import { loginReducer } from "./loginReducer";
import { uploadImgReducer } from "./uploadImgReducer";
import { getAmbulanceAndUserDetailsReducer, userListReducer, userLocationsReducer } from "./userListReducer";
import { loadingReducer } from "./loadingReucer";
import { patentReport, reportData } from "./reportReducer";
import { dropdownListReducer , dropdownStateListReducer} from "./dropdownsReducer";
import { AmbulanceDropdownReducer } from "./dropdownsReducer";

const rootReducer = combineReducers({
  loadingReducer:loadingReducer,
  loginReducer: loginReducer,
  userListReducer: userListReducer,
  userDetailsReducer: userDetailsReducer,
  editUserReducer: editUserReducer,
  editPasswordReducer: editPasswordReducer,
  uploadImgReducer: uploadImgReducer,
  createUserReducer: createUserReducer,
  ambulanceReducer:ambulanceReducer,
  createCrewReducer:createCrewReducer,
  createAmbulanceReducer:createAmbulanceReducer,
  reportData:reportData,
  patentReport:patentReport,
  dropdownListReducer:dropdownListReducer,
  // locations 
  userLocationsReducer:userLocationsReducer,
  getAmbulanceAndUserDetailsReducer:getAmbulanceAndUserDetailsReducer,
  dropdownStateListReducer:dropdownStateListReducer,
  AmbulanceDropdownReducer: AmbulanceDropdownReducer
});

export default rootReducer;
