import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_VRESTO,setVResto,loadingVResto,setVisitedError} from "../actions/actions"
import {getVRestos} from "../api/apiCalls";


//Loading visited restaurants watcher 
export function* LoadVRestosWatcher(){
    yield takeLatest(LOAD_VRESTO,LoadVRestoFlow)
}

function* LoadVRestoFlow(){
    let isLoading=true;
    // when a dispatch has been made we set the loaders to appear
    yield put(loadingVResto(isLoading));
    try{
    const Resto= yield call (getVRestos)
    //once data is received we want to hide the loaders and set the data to the store
    isLoading=false;
    yield put(setVResto(Resto))
    yield put(loadingVResto(isLoading));
    }
    // if an error occures we will show it using a snacKBar 
    catch(erro){
        isLoading=false;
        yield put(loadingVResto(isLoading));
        yield put(setVisitedError(true));
        return;
    }
}