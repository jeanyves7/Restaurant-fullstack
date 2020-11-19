

import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_RESTO,setResto,loadingResto,setRestoError,setTotalPages} from "../actions/actions"
import {getRestos,getNRestos} from "../api/apiCalls";


export function* LoadRestosWatcher(){
    yield takeLatest(LOAD_RESTO,LoadRestoFlow)
}

function* LoadRestoFlow(action){
   let Resto;
   let isloading=true;
   yield put(loadingResto(isloading));
   try{
    if(Object.keys(action.action).length!=1){
        Resto= yield call(getRestos,{action});
   }
   else{
       Resto= yield call(getNRestos,{action});
   }
    isloading=false;
    yield put(setResto(Resto.content));
    yield put(setTotalPages(Resto.totalPages))
    yield put(loadingResto(isloading));
   }catch (error){
    isloading=false;
    yield put(loadingResto(isloading));
    yield put(setRestoError(true));
    return;
   }
}