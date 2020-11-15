import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_RESTO,setResto} from "../actions/actions"
import {getRestos} from "../api/apiCalls";


export function* LoadRestosWatcher(){
    yield takeLatest(LOAD_RESTO,loadRestoFlow)
}

function* loadRestoFlow(action){
   
    const Resto= yield call(getRestos,{action});
    console.log(Resto)
    yield put(setResto(Resto))
}