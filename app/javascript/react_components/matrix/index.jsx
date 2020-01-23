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
import taskModalReducer from "./reducers/task_modal_reducer";
import categoryModalReducer from "./reducers/category_modal_reducer";
import modalReducer from "./reducers/modal_reducer";
import {CATEGORY_CREATION, TASK_CREATION} from "./constants/constants";

const middlewares = applyMiddleware(reduxPromise, logger);

const reducers = combineReducers({
    tasks: tasksReducer,
    categories: categoriesReducer,
    matrices: matricesReducer,
    modal: modalReducer,
    taskModal: taskModalReducer,
    categoryModal: categoryModalReducer
});

const initialState = {
    tasks: [],
    categories: [],
    matrices: [],
    modal: {
        display: false,
        modalType: TASK_CREATION,
        modalProps: {title: 'Create task'}
    },
    taskModal: {
        display: false,
        modalType: TASK_CREATION,
        modalProps: {title: 'Create task'}
    },
    categoryModal: {
        display: false,
        modalType: CATEGORY_CREATION,
        modalProps: {title: 'Create category'}
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