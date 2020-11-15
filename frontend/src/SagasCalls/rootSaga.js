import {fork} from 'redux-saga/effects'
import {LoadRestosWatcher} from "./loadRestosSaga";
import {LoadVRestosWatcher} from "./loadVRestoSaga";
import {saveRestoWatcher} from "./saveVRestos";

export function* rootSaga(){
    yield fork(LoadRestosWatcher);
    yield fork(LoadVRestosWatcher);
    yield fork(saveRestoWatcher);
}