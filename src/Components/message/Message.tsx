import style from './Message.module.css'
import {Dialogs} from './dialogs/Dialogs';
import {Correspondent} from './correspondent/Correspondent';
import {StateType} from '../../types';
import {useRef} from 'react';

export const Message = (props:StateType) => {
    const dialogsRef = useRef<HTMLTextAreaElement>(null)
    const onClickHandler = () => {
        if(dialogsRef.current) {
            props.addMessage(dialogsRef.current.value)
            dialogsRef.current.value = ''
        }
    }
    return (
        <div className={style.messages}>
            <div className={style.correspondents}>
                {props.state.messagePage.correspondentData.map(el => <Correspondent key={el.id} id={el.id} src={el.src} name={el.name}/>)}
            </div>
            <div className={style.dialogs}>
                {props.state.messagePage.dialogsData.map(el => <Dialogs key={el.id} src={el.src} message={el.message}/>)}
                <textarea name="." id="" cols={20} rows={3} ref={dialogsRef}></textarea>
                <button onClick={onClickHandler}> Add message </button>
            </div>
        </div>
    )
}