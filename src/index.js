import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
        <App/>
,
document.getElementById("root"));
serviceWorker.register();