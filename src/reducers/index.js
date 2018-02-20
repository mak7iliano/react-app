import { combineReducers } from 'redux';
import todo from './todo'
import contacts from './contacts'

export default combineReducers({
    todo,
    contacts
})