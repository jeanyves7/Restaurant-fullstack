import {call,all} from 'redux-saga/effects'
import {LoadRestosWatcher} from "./loadRestosSaga";
import {LoadVRestosWatcher} from "./loadVRestoSaga";
import {saveRestoWatcher} from "./saveVRestos";

export function* rootSaga(){
    yield all([
        call(LoadRestosWatcher),
        call(LoadVRestosWatcher),
        call(saveRestoWatcher)
    ]);
}