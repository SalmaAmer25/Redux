import { combineReducers } from "redux";
import {counterReducer} from "./reducers/counterReducer" 
import { userReducer } from "./reducers/userReducer";

export default combineReducers({
   counter : counterReducer,
   usersList : userReducer,
})