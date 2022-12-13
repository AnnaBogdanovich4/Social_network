import style from './Newpost.module.css'
import React, {ChangeEvent} from 'react';
import {NewPostType} from '../../../types';
import {addPostActionCreator, changePostActionCreator} from '../../../reducers/profile-reducer';

export const NewPost = (props: NewPostType) => {
    const onClickHandler = () => {
        let action = addPostActionCreator(props.messageForNewPost)
        props.dispatch(action)
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let action = changePostActionCreator(event.currentTarget.value)
        props.dispatch(action)
    }

    return (
        <div className={style.newpost}>
            <h3>New post</h3>
            <textarea name="." id="" cols={80} rows={5} value={props.messageForNewPost} onChange={onChangeHandler}/>
            <button className={style.button} onClick={onClickHandler}>Add post</button>
        </div>
    )
}