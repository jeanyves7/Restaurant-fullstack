import {ADD_VRESTO, SET_VRESTO} from "../actions/actions";

const initialState ={
    Visited:[]
}

const VisitedReducer = (state=initialState,action) =>{
    switch(action.type){
        case SET_VRESTO:
            return {...state,Visited:action.payload};
        default:
            return state;
    }
}

export default VisitedReducer;