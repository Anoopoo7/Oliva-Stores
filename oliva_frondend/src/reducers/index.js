import setProductStates from "./counder";
import setLoginStates from './loginstate';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    setProductStates,
    user:setLoginStates, 
})
export default rootReducer;