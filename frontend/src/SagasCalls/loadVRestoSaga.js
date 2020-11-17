import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_VRESTO,setVResto,loadingVResto} from "../actions/actions"
import {getVRestos} from "../api/apiCalls";

export function* LoadVRestosWatcher(){
    yield takeLatest(LOAD_VRESTO,LoadVRestoFlow)
}

function* LoadVRestoFlow(){
    let isLoading=true;
    yield put(loadingVResto(isLoading));
    try{
    const Resto= yield call (getVRestos)
    isLoading=false;
    yield put(loadingVResto(isLoading));
    yield put(setVResto(Resto))
    }catch(erro){
        isLoading=false;
        yield put(loadingVResto(isLoading));
        //to be treated 
        return;
    }
}