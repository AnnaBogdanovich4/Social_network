import {combineReducers, createStore} from 'redux';
import messageReducer from './reducers/message-reducer';
import profileReducer from './reducers/profile-reducer';
let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer
})
export let store = createStore(reducers)

// import {combineReducers, legacy_createStore as createStore} from "redux"