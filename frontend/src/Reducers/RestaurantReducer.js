import {SET_RESTO,LOADING_RESTO_DATA} from "../actions/actions";

const initial ={
    Restos:[],
    loading:true,
}

const RestaurantsReducer = (state=initial,action)=>{
    switch(action.type){
        case SET_RESTO:{
            return{...state,Restos:action.payload}
        }
        case LOADING_RESTO_DATA:
            return {...state,loading:action.payload}
        default:
            return state;
    }
}

export default RestaurantsReducer;
