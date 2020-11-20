import {takeLatest, call, put} from 'redux-saga/effects'
import {ADD_VRESTO,setRestoError} from '../actions/actions'
import { postVRestos } from '../api/apiCalls'

//watchers for the add restaurants action
export function* saveRestoWatcher(){
  yield takeLatest(ADD_VRESTO, saveRestoFlow)
}

function* saveRestoFlow(action) {
  console.log(action.payload);
  try{
  //making the api call
  const dat=action.payload;
  yield call(postVRestos, dat);
  }
  // if an error occures we will show it using a snacKBar
  catch(error){
    yield put(setRestoError(true))
    return;
  }
}