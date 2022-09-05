import { combineReducers } from "redux";
import { Reducer } from "./Reducer";

const RootReducer = combineReducers({
    u_Data: Reducer
})

export default RootReducer;