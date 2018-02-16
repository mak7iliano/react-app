import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    todoList: [
        'react',
        'react-redux',
        'react-thunk'
    ],
    userEmail: ''
};

function playlist(state = initialState, action) {
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todoList:[...state.todoList, action.payload]
        }
    } else if (action.type === 'REMOVE_TODO') {
        let index = state.todoList.indexOf(action.payload);
        if (index > -1) {
            state.todoList.splice(index, 1);
        }
        return {
            ...state,
            todoList:[...state.todoList]
        }
    } else if (action.type === 'ADD_USER_EMAIL') {
        return {
            ...state,
            userEmail:[action.payload]
        }
    } else if (action.type === 'REMOVE_USER_EMAIL') {
        return {
            ...state,
            userEmail: ''
        }
    }

    return state;
}

const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();