import style from './Correspondent.module.css'
import {NavLink} from 'react-router-dom';

export type CorrespondentType={
    id:string
    name:string
    src:string
}
export const Correspondent = (props:CorrespondentType) => {
    return (
            <div className={style.correspondent}>
                <img src={props.src}/>
                <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
            </div>
    )
}