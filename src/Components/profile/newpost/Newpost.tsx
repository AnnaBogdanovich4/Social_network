import style from './Newpost.module.css'
import React, {useRef} from 'react';
import {NewPostType} from '../../../types';

export const NewPost = (props:NewPostType) => {
    const postRef = useRef<HTMLTextAreaElement>(null)
    const onClickHandler = () =>{
        debugger
        if (postRef.current) {
            props.addPost(postRef.current.value)
            postRef.current.value = ''
        }
    }
    return (
        <div className={style.newpost}>
            <h3>New post</h3>
            <textarea ref={postRef} name="." id="" cols={80} rows={5}/>
            <button className={style.button} onClick={onClickHandler}>Add post</button>
        </div>
    )
}