import style from './Post.module.css'

export type Post = {
    description: string
    countLike: number
    countDislike: number
}
export const Post = (props: Post) => {
    return (
        <div className={style.allpost}>
            <div className={style.post}>
                <img
                    src="https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg"
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