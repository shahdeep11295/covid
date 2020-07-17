import { combineReducers } from "redux";
import homedata from './homedata.reducer';
import loder from './loder.reducer';
import statedata from "./statedata.reducer";

export default combineReducers({
    homedata,
    loder,
    statedata
})