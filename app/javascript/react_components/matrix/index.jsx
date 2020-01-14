import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './components/app';

import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';

const middlewares = applyMiddleware(reduxPromise, logger);

const reducers = combineReducers({
    messages: messagesReducer,
    channels: channelsReducer,
});

const initialState = {
    messages: [],
    channels: [],
};

ReactDOM.render(
    <Provider store={createStore(reducers, initialState, middlewares)}>
        <Router>
            <Switch>
                <Route exact path="/channels/:channel" component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('chat_app')
);