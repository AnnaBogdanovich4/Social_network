import style from './Newpost.module.css'
import React, {ChangeEvent} from 'react';
import {NewPostType} from '../../../types';

export const NewPost = (props:NewPostType) => {
    const onClickHandler = () =>{
        props.dispatch({type: 'ADD-POST', messageForNewPost: props.messageForNewPost})
         }

    const onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) =>{
        props.dispatch({type: 'CHANGE-POST', newMessageForNewPost: event.currentTarget.value })
    }
    return (
        <div className={style.newpost}>
            <h3>New post</h3>
            <textarea name="." id="" cols={80} rows={5} value={props.messageForNewPost} onChange={onChangeHandler}/>
            <button className={style.button} onClick={onClickHandler}>Add post</button>
        </div>
    )
}