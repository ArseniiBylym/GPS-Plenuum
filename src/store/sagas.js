import { delay } from 'redux-saga'
import { put, takeLatest, all } from 'redux-saga/effects'
import Constants from '../lib/constants'

export default function* rootSaga() {
   yield all([
       loginWatcher(),
   ])
}


//authentification
export function* loginWorker(action){
    // yield put({type: Constants.ActionTypes.LOGIN})
    // setTimeout(()=> {
        try {
            yield put({type: Constants.ActionTypes.LOGIN_SUCCESS})
         } catch {
             yield put({type: Constants.ActionTypes.LOGIN_FAILED})
         }
    // },2000)
    
}
export function* loginWatcher() {
    yield takeLatest(Constants.ActionTypes.LOGIN_SAGA, loginWorker)
}