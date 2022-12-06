import style from './Post.module.css'
import {PostType} from '../../../types';

export const Post = (props: PostType) => {
    return (
        <div className={style.allpost}>
            <div className={style.post}>
                <img
                    src={props.src}
                    alt="" className={style.img}/>
                <div>{props.description}</div>
            </div>
            <div>
                <button className={style.button}>Like</button>
                <span>{props.countLike}</span>
                <button className={style.button}>Dislike</button>
                <span>{props.countDislike}</span></div>
        </div>
    )
}