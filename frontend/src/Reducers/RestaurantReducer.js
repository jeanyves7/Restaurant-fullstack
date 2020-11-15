import {SET_RESTO} from "../actions/actions";

const initial ={
    Restos:[]
}

const RestaurantsReducer = (state=initial,action)=>{
    switch(action.type){
        case SET_RESTO:{
            return{...state,Restos:action.payload}
        }
        default:
            return state;
    }
}

export default RestaurantsReducer;
