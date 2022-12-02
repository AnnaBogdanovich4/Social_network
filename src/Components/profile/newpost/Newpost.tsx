import style from './Newpost.module.css'

export const Newpost = () => {
    return (
        <div className={style.newpost}>
            <h3>New post</h3>
            <textarea name="." id="" cols={80} rows={10}/>
            <button className={style.button}>Add post</button>
        </div>
    )
}