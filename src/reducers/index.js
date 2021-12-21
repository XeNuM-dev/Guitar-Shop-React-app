import { combineReducers } from "redux";
import guitars from './guitars'
import cart from './cart'
import filter from "./filter";


export default combineReducers({
    guitars,
    cart,
    filter
})