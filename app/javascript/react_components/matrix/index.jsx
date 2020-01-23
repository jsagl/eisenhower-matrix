import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Matrix from './components/matrix';

import tasksReducer from './reducers/tasks_reducer';
import categoriesReducer from "./reducers/categories_reducer";
import matricesReducer from "./reducers/matrices_reducer";
import modalReducer from "./reducers/modal_reducer";
import {TASK_CREATION} from "./constants/constants";

const middlewares = applyMiddleware(reduxPromise, logger);

const reducers = combineReducers({
    tasks: tasksReducer,
    categories: categoriesReducer,
    matrices: matricesReducer,
    modal: modalReducer,
});

const initialState = {
    tasks: [],
    categories: [],
    matrices: [],
    modal: {
        display: false,
        modalType: TASK_CREATION,
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