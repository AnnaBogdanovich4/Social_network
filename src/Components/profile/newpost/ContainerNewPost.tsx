import style from './Newpost.module.css'
import React from 'react';
import {addPostActionCreator, changePostActionCreator} from '../../../reducers/profile-reducer';
import {NewPost} from './Newpost';
import {StateType} from '../../../types';

export const ContainerNewPost = (props: StateType) => {
    const callBackClick = () => {
        let action = addPostActionCreator(props.state.profilePage.messageForNewPost)
        props.dispatch(action)
    }

    const callBackChange = (text: string) => {
        let action = changePostActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={style.newpost}>
            <NewPost value={props.state.profilePage.messageForNewPost}
                     callBackChange={(text:string) => callBackChange(text)}
                     callBackClick={callBackClick}/>
        </div>
    )
}