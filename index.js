/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import CountContainer from './containers/CountContainer';

//Redux saga
import createSagaMiddleware from 'redux-saga';
//Middleware
const sagaMiddleware = createSagaMiddleware();
import rootSaga from './sagas/rootSaga';

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store = {store}>
        <CountContainer />
    </Provider>
);

sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent(appName, () => App);
