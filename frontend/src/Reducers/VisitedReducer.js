import {SAVE_VRESTO, SET_VRESTO} from "../actions/actions";

const initialState ={
    Visited:[],
    
}

const VisitedReducer = (state=initialState,action) =>{
    switch(action.type){
        case SAVE_VRESTO:
            return {...state,Visited:[...state.Visited,action.payload]}

        case SET_VRESTO:
            return {...state,Visited:action.payload};
        default:
            return state;
    }
}

export default VisitedReducer;