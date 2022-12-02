import style from './Post.module.css'

export const Post = () => {
    return (
        <div className={style.allpost}>
            <div className={style.post}>
                <img src="https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg" alt="" className={style.img}/>
                <div>Text post</div>
            </div>
            <button className={style.button}>Like</button>
        </div>
    )
}