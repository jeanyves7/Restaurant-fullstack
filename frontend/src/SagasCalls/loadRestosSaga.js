import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_RESTO,setResto} from "../actions/actions"
import {getRestos,getNRestos} from "../api/apiCalls";


export function* LoadRestosWatcher(){
    yield takeLatest(LOAD_RESTO,loadRestoFlow)
}

function* loadRestoFlow(action){
   let Resto;
   console.log(action);
    if(Object.keys(action.action).length===2){
        console.log(2);
        Resto= yield call(getRestos,{action});
        
   }
   else{
       Resto= yield call(getNRestos,{action})
   }
    console.log(Resto)
    yield put(setResto(Resto))
}