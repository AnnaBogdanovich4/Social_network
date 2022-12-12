import style from './Message.module.css'
import {Dialogs} from './dialogs/Dialogs';
import {Correspondent} from './correspondent/Correspondent';
import {StateType} from '../../types';
import {ChangeEvent} from 'react';

export const Message = (props: StateType) => {
    const onClickHandler = () => {
        props.dispatch({type: 'ADD-MESSAGE', newDialogs: props.state.messagePage.messageForNewDialog})
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch ({type: 'CHANGE-MESSAGE', newMessageForNewDialog: event.currentTarget.value})
    }
    return (
        <div className={style.messages}>
            <div className={style.correspondents}>
                {props.state.messagePage.correspondentData.map(el => <Correspondent key={el.id} id={el.id} src={el.src}
                                                                                    name={el.name}/>)}
            </div>
            <div className={style.dialogs}>
                {props.state.messagePage.dialogsData.map(el => <Dialogs key={el.id} src={el.src}
                                                                        message={el.message}/>)}
                <textarea name="." id="" cols={20} rows={3} onChange={onChangeHandler}
                          value={props.state.messagePage.messageForNewDialog}></textarea>
                <button onClick={onClickHandler}> Add message</button>
            </div>
        </div>
    )
}