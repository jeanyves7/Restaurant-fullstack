  
import {takeLatest, call} from 'redux-saga/effects'
import {ADD_VRESTO} from '../actions/actions'
import { postVRestos } from '../api/apiCalls'

export function* saveRestoWatcher(){
  yield takeLatest(ADD_VRESTO, saveRestoFlow)
}

function* saveRestoFlow(action) {
  console.log(action.payload)
  const dat=action.payload;
  yield call(postVRestos, dat)
}