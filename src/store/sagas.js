import { delay } from 'redux-saga'
import { put, takeLatest, all } from 'redux-saga/effects'
import Constants from '../lib/constants'

export default function* rootSaga() {
    console.log('saga is running')
   yield all([
       loginWatcher(),
   ])
}


//authentification
export function* loginWorker(action){
        try {
            yield put({type: Constants.ActionTypes.LOGIN_SUCCESS})
         } catch {
             yield put({type: Constants.ActionTypes.LOGIN_FAILED})
         }
    
}
export function* loginWatcher() {
    yield takeLatest(Constants.ActionTypes.LOGIN_SAGA, loginWorker)
}