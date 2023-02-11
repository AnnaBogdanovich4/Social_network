import {combineReducers, legacy_createStore} from 'redux';
import messageReducer from './reducers/message-reducer';
import profileReducer from './reducers/profile-reducer';
import usersReducer from './reducers/users-reducer';
export let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer
})
export let store =  legacy_createStore(rootReducer)





