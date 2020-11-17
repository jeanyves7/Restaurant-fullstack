import {takeLatest, call, put,all,fork} from 'redux-saga/effects'
import {LoadRestosWatcher} from "./loadRestosSaga";
import {LoadVRestosWatcher} from "./loadVRestoSaga";
import {saveRestoWatcher} from "./saveVRestos";

export function* rootSaga(){
    yield all([
       fork(LoadRestosWatcher),
        fork(LoadVRestosWatcher),
        fork(saveRestoWatcher)
    ]);
}