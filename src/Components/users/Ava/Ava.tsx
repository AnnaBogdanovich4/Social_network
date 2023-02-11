import style from './Ava.module.css'
import {AvaType} from '../../../types';

export const Ava = (props: AvaType) => {
    const onClickHandlerFollow = (id: string) => {
        props.followed(id)
    }
    const onClickHandlerUnfollow = (id: string) => {
        props.unfollowed(id)
    }
    return (
        <div className={style.ava}>
            <div className={style.face}>
                <img className={style.smile} src={props.src} alt={props.id}/>
                {!props.status
                    ? <button className={style.button} onClick={() => onClickHandlerFollow(props.id)}
                    >Follow</button>
                    : <button className={style.button} onClick={() => onClickHandlerUnfollow(props.id)}
                    >Unfollow</button>}
            </div>
            <div className={style.information}>
                <div className={style.dataPeople}>
                    <div className={style.name}>
                        {props.name}
                    </div>
                    <div className={style.status}>
                        {props.info}
                    </div>
                </div>
                <div className={style.location}>
                    <div className={style.country}>
                        {props.country}
                    </div>
                    <div className={style.city}>
                        {props.city}
                    </div>
                </div>
            </div>
        </div>
    )
}