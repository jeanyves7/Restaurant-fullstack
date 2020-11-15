import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_VRESTO,setVResto} from "../actions/actions"
import {getVRestos} from "../api/apiCalls";

export function* LoadVRestosWatcher(){
    yield takeLatest(LOAD_VRESTO,loadVRestoFlow)
}

function* loadVRestoFlow(){
    const Resto= yield call (getVRestos)
    console.log(Resto);
    yield put(setVResto(Resto))
}