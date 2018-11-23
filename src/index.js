import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/scss/bootstrap.scss';
import './customStyles/index_custom.scss';
import './index.scss';
import '../node_modules/leaflet/dist/leaflet.css'
import '../node_modules/leaflet/dist/leaflet.js'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './store/reducers';
import rootSaga from './store/sagas'


const sagaMiddleware = createSagaMiddleware()

// let store = createStore(reducers, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware)));
let store = createStore(reducers, compose( applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
