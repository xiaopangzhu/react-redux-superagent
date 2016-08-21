import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import App from "./containers/app";
import reducer from "./reducers/index";
import getValue from "./middlewares/get-value";

const createStoreWithMiddleware = applyMiddleware(getValue)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('app'));
