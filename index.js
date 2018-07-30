/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import CountContainer from './containers/CountContainer';


let store = createStore(allReducers);
const App = () => (
    <Provider store = {store}>
        <CountContainer />
    </Provider>
);

AppRegistry.registerComponent(appName, () => App);
