import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Matrix from './components/matrix';

import tasksReducer from './reducers/tasks_reducer';
import taskModalReducer from "./reducers/task_modal_reducer";
import categoriesReducer from "./reducers/categories_reducer";

const middlewares = applyMiddleware(reduxPromise, logger);

const reducers = combineReducers({
    tasks: tasksReducer,
    taskModal: taskModalReducer,
    categories: categoriesReducer

});

const initialState = {
    tasks: [],
    categories: [],
    taskModal: {
        display: false,
        modalType: 'TASK_CREATION',
        modalProps: {title: 'Create task'}
    }
};

ReactDOM.render(
    <Provider store={createStore(reducers, initialState, middlewares)}>
        <Router>
            <Switch>
                <Route path="/matrices/:matrix" component={Matrix} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('matrix_app')
);