import style from './Avatar.module.css'
export type AvatarType = {
    src: string
    name: string
    age: string
    zodiac: string
    professional: string
}
export const Avatar = (props:AvatarType) => {
    return (
        <div className={style.avatar}>
            <img className={style.img} src={props.src} alt="ava1"/>
            <div className={style.description}>
                <span>My name: {props.name}</span>
                <span>Age: {props.age}</span>
                <span>Zodiac: {props.zodiac}</span>
                <span>Professional: {props.professional}</span>
            </div>
        </div>
    )
}