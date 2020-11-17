import {SET_TYPE} from "../actions/actions"

const initalState={
    types:"All"
}
const TypeReducer =(state=initalState,action)=>{
    switch(action.type){
        case SET_TYPE:
            console.log(action.payload);
            return {...state,types:action.payload}
        default:
            return state;
    }
}

export default TypeReducer;