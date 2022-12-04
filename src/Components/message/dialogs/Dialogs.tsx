import style from './Dialogs.module.css'

export type DialogType={
    src: string
    message: string
}

export const Dialogs = (props:DialogType) => {
    return (
        <div className={style.dialogs}>
            <img src={props.src}/>
            <p>{props.message}</p>
        </div>
    )
}