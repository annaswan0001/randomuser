import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import App from './App.jsx'

import rootReducer from './redux/reducers'
// import {watchAuth, watchBurgerBuilder,watchMakeOrder} from './store/sagas/index'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = createSagaMiddleware()
//1) const sagaMiddleware = createSagaMiddleware()
//2) added to applyMiddleware
//3) sagaMiddleware.run(rootSaga)

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk,sagaMiddleware )
));

// sagaMiddleware.run(watchAuth)
// sagaMiddleware.run(watchBurgerBuilder)
// sagaMiddleware.run(watchMakeOrder)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
