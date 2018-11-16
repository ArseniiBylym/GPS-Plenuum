import {combineReducers} from 'redux';
import Constants from '../lib/constants'

const isAuth = (state = {isAuthenticated: false, inProgress: false}, action) => {
    switch (action.type) {
        case Constants.ActionTypes.LOGIN:
            return{
                isAuthenticated: false,
                inProgress: true
            }
        case Constants.ActionTypes.LOGIN_SUCCESS:
            window.localStorage.setItem('token', 'true')
            return{
                isAuthenticated: true,
                inProgress: false
            }
        case Constants.ActionTypes.LOGIN_FAILED:
            return{
                isAuthenticated: false,
                inProgress: false
            }
        case Constants.ActionTypes.LOGOUT_SUCCESS:
            window.localStorage.removeItem('token')
            return{
                isAuthenticated: false,
                inProgress: false
            }
        default: 
            return state
    }
}

const reducers = combineReducers({
    isAuth,
})

export default reducers;