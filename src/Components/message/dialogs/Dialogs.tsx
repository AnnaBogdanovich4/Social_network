import style from './Dialogs.module.css'
import {DialogType} from '../../../types';

export const Dialogs = (props:DialogType) => {
    return (
        <div className={style.dialogs}>
            <img src={props.src} alt={'avatarka'}/>
            <p>{props.message}</p>
        </div>
    )
}