import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './customStyles/index_custom.scss';
import './index.scss';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './store/reducers';
import rootSaga from './store/sagas'



// const sagaMiddleware = createSagaMiddleware()

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
