import { combineReducers } from 'redux';
import todo from './todo'
import contacts from './contacts'
import {user, users} from './users'

export default combineReducers({
    todo,
    contacts,
    user,
    users
})