import {combineReducers, legacy_createStore} from 'redux';
import messageReducer from './reducers/message-reducer';
import profileReducer from './reducers/profile-reducer';
let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer
})
export let store =  legacy_createStore(reducers)

