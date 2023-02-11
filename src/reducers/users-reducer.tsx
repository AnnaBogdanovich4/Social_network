import {ActionType, FollowActionType, SetUsersActionType, UnfollowActionType, UsersType,} from '../types';
import {v1} from 'uuid';

export const unFollowActionCreator = (userId: string): UnfollowActionType => ({type: 'UNFOLLOW', id: userId})

export const followActionCreator = (userId: string): FollowActionType => ({type: 'FOLLOW', id: userId})

export const setUsersActionCreator = (users: UsersType[]): SetUsersActionType => ({type: 'SET_USERS', users})

type InitialStateType = typeof initialState

let initialState = {
    users: [
        {
            userId: v1(),
            src: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg',
            status: true,
            name: 'Anna B.',
            info: 'I am looking for a job',
            country: 'Belarus',
            city: 'Mogilev',
        },
        {
            userId: v1(),
            src: 'https://klike.net/uploads/posts/2019-03/1551515594_15.jpg',
            status: false,
            name: 'Dima B.',
            info: 'I like watching TV',
            country: 'Poland',
            city: 'Warszwa',
        },
    ] as UsersType []
}

const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: [...state.users.map(el => el.userId === action.id ? {...el, status: true} : el)]};
        case 'UNFOLLOW':
            return {...state, users: [...state.users.map(el => el.userId === action.id ? {...el, status: false} : el)]};
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export default usersReducer