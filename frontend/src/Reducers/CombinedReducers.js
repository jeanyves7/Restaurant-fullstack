import VisitedReducer from "./VisitedReducer";
import Restos from "./RestaurantReducer";
import {combineReducers} from "redux";

const allReducers =combineReducers({
    Restaurants: Restos,
    Visited: VisitedReducer
})

export default allReducers;