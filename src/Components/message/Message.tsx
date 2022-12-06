import style from './Message.module.css'
import {Dialogs} from './dialogs/Dialogs';
import {Correspondent} from './correspondent/Correspondent';
import {MessageType} from '../../types';

export const Message = (props:MessageType) => {
    return (
        <div className={style.messages}>
            <div className={style.correspondents}>
                {props.correspondentData.map(el => <Correspondent key={el.id} id={el.id} src={el.src} name={el.name}/>)}
            </div>
            <div className={style.dialogs}>
                {props.dialogsData.map(el => <Dialogs key={el.id} src={el.src} message={el.message}/>)}
            </div>
        </div>
    )
}