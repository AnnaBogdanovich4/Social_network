import {Ava} from './Ava';
import {connect} from 'react-redux';
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from '../../../reducers/users-reducer';
import {Dispatch} from 'redux';
import {RootStoreType, UsersType} from '../../../types';
import {v1} from 'uuid';
import {store} from '../../../store';

type MapStateToPropsType = {
    users: UsersType[]
}
type MapDispatchToPropsType = {
    followed: (userId: string) => void,
    unfollowed: (userId: string) => void,
    addUsers: (users: UsersType[]) => void
}
let mapStateToProps = (store: RootStoreType): MapStateToPropsType => {
    return {
        users: store.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followed: (userId: string) => dispatch(followActionCreator(userId)),
        unfollowed: (userId: string) => dispatch(unFollowActionCreator(userId)),
        addUsers: (users: UsersType[]) => dispatch(setUsersActionCreator(users))
    }
}

store.getState().usersPage.users.length === 0
    ? store.dispatch(setUsersActionCreator([{
        userId: v1(),
        src: 'https://klike.net/uploads/posts/2019-03/1551515594_15.jpg',
        status: false,
        name: 'Dima Bogdanovich',
        info: 'I like sighting',
        country: 'England',
        city: 'London',
    }]))
    : store.dispatch(setUsersActionCreator([]))

export const ContainerAva = connect(mapStateToProps, mapDispatchToProps)(Ava)