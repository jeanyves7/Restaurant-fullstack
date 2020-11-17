import VisitedReducer from "./VisitedReducer";
import Restos from "./RestaurantReducer";
import {combineReducers} from "redux";
import Type from "./TypeReducer";

const allReducers =combineReducers({
    Restaurants: Restos,
    Visited: VisitedReducer,
    Type:Type
})

export default allReducers;