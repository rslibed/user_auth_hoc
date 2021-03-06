import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './reducers';

import App from './components/app';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
