import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

import reducer from "./reducers"

// const initialState = {
//     todoList: [
//         'react',
//         'react-redux',
//         'react-thunk'
//     ],
//     userEmail: ''
// };
//
// function mainReducer(state = initialState, action) {
//     switch(action.type) {
//         case 'ADD_TODO':
//             return {
//                 ...state,
//                 todoList:[...state.todoList, action.payload]
//             };
//
//         case 'REMOVE_TODO':
//             let index = state.todoList.indexOf(action.payload);
//             if (index > -1) {
//                 state.todoList.splice(index, 1);
//             }
//             return {
//                 ...state,
//                 todoList:[...state.todoList]
//             };
//
//         case 'ADD_USER_EMAIL':
//             return {
//                 ...state,
//                 userEmail:[action.payload]
//             };
//
//         case 'REMOVE_USER_EMAIL':
//             return {
//                 ...state,
//                 userEmail: ''
//             };
//
//         case 'EDIT_TODO':
//             let editIndex = state.todoList.indexOf(action.payload);
//             if (editIndex > -1) {
//                 state.todoList[editIndex] = action.newName;
//             }
//             return {
//                 ...state,
//                 todoList:[...state.todoList]
//             };
//
//         default: break;
//     }
//
//     return state;
// }

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();