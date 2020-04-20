import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

import App from './containers/App';
import createStore from './store'

import './index.scss';
import 'semantic-ui-css/semantic.min.css'

const store = createStore();


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

