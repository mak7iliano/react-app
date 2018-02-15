import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

const initialState = [
    'Track 01',
    'Track 02'
];

function playlist(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === 'REMOVE_TRACK') {
        let index = state.indexOf(action.payload);
        if (index > -1) {
            state.splice(index, 1);
        }
        return [
            ...state
        ]
    }

    return state;
}

const store = createStore(playlist);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();