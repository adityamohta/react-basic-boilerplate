// External Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
// My Imports
import serviceWorker from './serviceWorker';
import App from './App';

const target = document.getElementById('app');
const history = createBrowserHistory();


ReactDOM.render(
    <BrowserRouter history={history}>
        <App/>
    </BrowserRouter>,
    target
);

serviceWorker();
