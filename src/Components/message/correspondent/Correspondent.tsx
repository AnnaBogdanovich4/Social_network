import style from './Correspondent.module.css'
import {NavLink} from 'react-router-dom';
import {CorrespondentType} from '../../../types';

export const Correspondent = (props:CorrespondentType) => {
    return (
            <div className={style.correspondent}>
                <img src={props.src} alt='avatarka2'/>
                <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
            </div>
    )
}