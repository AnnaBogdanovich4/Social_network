import style from './Message.module.css'
import {MessageType} from '../../../types';
import {ChangeEvent} from 'react';

export const Message = (props: MessageType) => {

    const onClickHandler = () => {
        props.callBackClick()
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.callBackChange(event.currentTarget.value)
    }

    return (
        <div className={style.message}>
                            <textarea name="." id="" cols={20} rows={3}
                                      onChange={onChangeHandler}
                                      value={props.value}></textarea>
            <button onClick={onClickHandler}> Add message</button>
        </div>
    )
}