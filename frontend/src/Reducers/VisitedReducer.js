import { SET_VRESTO,SET_VISITED_ERROR,LOADING_VRESTO_DATA} from "../actions/actions";

//visited restaurants initial states
const initialState ={
    Visited:[],
    loading:true,
    error:false,
    
}

const VisitedReducer = (state=initialState,action) =>{
    switch(action.type){
        case LOADING_VRESTO_DATA:
            return {...state,loading:action.payload}
        case SET_VRESTO:
            return {...state,Visited:action.payload};
        case SET_VISITED_ERROR:
            return {...state,error:action.payload};
        default:
            return state;
    }
}

export default VisitedReducer;