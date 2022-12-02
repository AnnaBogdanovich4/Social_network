import style from './Avatar.module.css'

export const Avatar = () => {
    return (
        <div className={style.avatar}>
            <img className={style.img} src="https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg" alt="ava1"/>
            <div>Description</div>
        </div>
    )
}