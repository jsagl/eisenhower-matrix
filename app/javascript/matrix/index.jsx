import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './components/app';

import tasksReducer from './reducers/tasks_reducer';

const middlewares = applyMiddleware(reduxPromise, logger);

const reducers = combineReducers({
    tasks: tasksReducer,
});

const initialState = {
    tasks: [],
};

ReactDOM.render(
    <Provider store={createStore(reducers, initialState, middlewares)}>
        <Router>
            <Switch>
                <Route path="/matrices/:matrix" component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('matrix_app')
);