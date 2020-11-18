import {SET_TYPE,SET_PAGE} from "../actions/actions"

const initalState={
    types:"All",
    page:1
}
const TypeReducer =(state=initalState,action)=>{
    switch(action.type){
        case SET_TYPE:
            return {...state,types:action.payload}
            case SET_PAGE:
                console.log(action.payload);
                return {...state,page:action.payload}
        default:
            return state;
    }
}

export default TypeReducer;