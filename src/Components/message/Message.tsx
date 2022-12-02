import style from './Message.module.css'
import {Dialogs} from './dialogs/Dialogs';

export const Message = () => {
    return (
        <div className={style.messages}>
            <h2>Message</h2>
            <Dialogs/>
        </div>
    )
}