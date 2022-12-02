import style from './Content.module.css'
import {Profile} from '../profile/Profile';
import {Message} from '../message/Message';

export const Content = () => {
    return (
        <div className={style.content}>
            <Profile/>
            <Message/>
        </div>
    )
}