import {combineReducers} from 'redux';
import Constants from '../lib/constants'
import {carsList, eventsList, zonesList} from './temp_test_store'

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

const mainMap = (state={map: null}, action) => {
    switch (action.type) {
        case Constants.ActionTypes.SET_MAP:
            return {
                map: action.elem
            }
        case Constants.ActionTypes.SET_MAP:{
            return{
                map: null
            }
        }
        default: 
            return state
    }
}

const allCars = (state = {...carsList}, action) => {
    switch (action.type) {
        case Constants.ActionTypes.CAR_SHOW: 
            let newCarsArrHidden = state.cars.slice()
            let currentCarHidden = newCarsArrHidden[action.index];
            currentCarHidden.isVisible = true;

            return {
                ...state,
                cars: newCarsArrHidden
            }
        case Constants.ActionTypes.CAR_HIDE: 

            let newCarsArrVisible = state.cars.slice()
            let currentCarVisible = newCarsArrVisible[action.index];
            currentCarVisible.isVisible = false;

            return {
               ...state,
               cars: newCarsArrVisible
            }
        default: 
            return state
    }
}

const allEvents = (state = {...eventsList}, action) => {
    switch (action.type) {
        case Constants.ActionTypes.ADD_EVENT:
            return state.concat(action.event);
        default: 
            return state;
    }
}

const allZones = (state = {...zonesList}, action) => {
    switch (action.type) {
        default: 
            return state
    }
}

const reducers = combineReducers({
    isAuth,
    allCars,
    mainMap,
    allEvents,
    allZones
})

export default reducers;